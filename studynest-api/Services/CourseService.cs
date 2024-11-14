using Microsoft.EntityFrameworkCore;
using studynest_api.Data;
using studynest_api.Data.DTOs;
using studynest_api.Data.Requests;
using System.Runtime.CompilerServices;


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

        var courses = await dbContext.Courses.ToListAsync();

        if (courses is null)
        {
            throw new ArgumentNullException(nameof(courses));
        }

        return courses.Select(x => x.ToDto()).ToList();
    }

    public async Task<CourseDto> GetCourseById(int courseId)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var course = await dbContext.Courses.Where(x => x.Id == courseId).FirstOrDefaultAsync();

        if (course is null)
        {
            throw new ArgumentNullException(nameof(course));
        }

        return course.ToDto();
    }

    public async Task<bool> AddCourse(AddCourseRequest addCourseRequest)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        Course newCourse = new Course()
        {
            Title = addCourseRequest.Title,
            Description = addCourseRequest.Description,
        };

        dbContext.Add(newCourse);

        await dbContext.SaveChangesAsync();

        return true;
    }

    public async Task<bool> EditCourse(EditCourseRequest editCourseRequest)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var course = await dbContext.Courses.Where(x => x.Id == editCourseRequest.CourseId)
            .FirstOrDefaultAsync() ?? throw new Exception("Could not find course under change.");
        
        course.Title = editCourseRequest.Title;
        course.Description = editCourseRequest.Description;

        dbContext.Update(course);
        await dbContext.SaveChangesAsync();

        return true;
    }
}
