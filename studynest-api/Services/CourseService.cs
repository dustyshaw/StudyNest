using Microsoft.EntityFrameworkCore;
using studynest_api.CustomData.DTOs;
using studynest_api.CustomData.Requests;
using studynest_api.Data;

namespace studynest_api.Services;

public class CourseService : ICourseService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;

    public CourseService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<List<CourseDto>> GetAllCourses()
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var courses = await dbContext.Courses.Where(x => x.Ispublic == true).Include(x => x.Courseunits).ThenInclude(x => x.Unit).ToListAsync();

        if (courses is null)
        {
            throw new ArgumentNullException(nameof(courses));
        }

        return courses.Select(x => x.ToDto()).ToList();
    }

    public async Task<List<CourseDto>> GetAllPublicCourses()
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var courses = await dbContext.Courses.Include(x => x.Courseunits).ThenInclude(x => x.Unit).Where(x => x.Ispublic == true || x.Ispublic == null).ToListAsync();

        if (courses is null)
        {
            throw new ArgumentNullException(nameof(courses));
        }

        return courses.Select(x => x.ToDto()).ToList();
    }

    public async Task<CourseDto> GetCourseById(int courseId)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var course = await dbContext.Courses.Where(x => x.Id == courseId)
            .Include(x => x.Courseunits)
            .ThenInclude(x => x.Unit)
            .FirstOrDefaultAsync();

        if (course is null)
        {
            throw new ArgumentNullException(nameof(course));
        }

        return course.ToDto();
    }

    public async Task<bool> AddCourse(AddCourseRequest addCourseRequest)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var user = await dbContext.Useraccounts.Where(x => x.Email == addCourseRequest.UserEmail).FirstOrDefaultAsync();

        Course newCourse = new Course()
        {
            Title = addCourseRequest.Title,
            Description = addCourseRequest.Description,
        };
        dbContext.Add(newCourse);
        await dbContext.SaveChangesAsync();

        if (user == null) { return false; }

        var courseJustAdded = await dbContext.Courses.Where(x => x.Title == newCourse.Title && x.Description == newCourse.Description).FirstOrDefaultAsync();

        if (courseJustAdded == null) { return false; }

        Courseenroll newCourseEnroll = new Courseenroll()
        {
            Userid = user.Id,
            Courseid = courseJustAdded.Id
        };
        dbContext.Add(newCourseEnroll);
        await dbContext.SaveChangesAsync();

        return true;
    }

    public async Task<bool> EditCourse(EditCourseRequest editCourseRequest)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var userCourse = await dbContext.Courseenrolls.Where(x => x.Id == editCourseRequest.CourseId).FirstOrDefaultAsync();
        if (userCourse is null)
        {
            throw new Exception($"No user course found with the given id: {editCourseRequest.CourseId}");

        }

        var course = await dbContext.Courses.Where(x => x.Id == userCourse.Courseid).FirstOrDefaultAsync();

        if (course == null)
        {
            throw new Exception($"No course found with the given id: {course?.Id}");
        }
        
        course.Title = editCourseRequest.Title;
        course.Description = editCourseRequest.Description;

        dbContext.Update(course);
        await dbContext.SaveChangesAsync();

        return true;
    }
}
