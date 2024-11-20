using Microsoft.EntityFrameworkCore;
using studynest_api.Data;
using studynest_api.CustomData.Requests;
using studynest_api.CustomData.DTOs;

namespace studynest_api.Services;

public class UserCourseService : IUserCourseService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;
    public UserCourseService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }
    public async Task<bool> AddUserCourse(AddCourseEnrollRequest addCourseEnrollRequest)
    {
        using var context = dbContextFactory.CreateDbContext();

        Courseenroll newCourseEnroll = new Courseenroll()
        {
            Userid = addCourseEnrollRequest.UserId,
            Courseid = addCourseEnrollRequest.CourseId,
        };

        await context.AddAsync(newCourseEnroll);
        await context.SaveChangesAsync();

        return true;
    }

    public async Task<List<UserCourseDto>> GetCoursesByUserId(int userId)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        //var courses = await dbContext.Courses.ToListAsync();
        var courseenrolls = await dbContext.Courseenrolls
            .Where(x => x.Userid == userId)
            .Include(x => x.Course)
                .ThenInclude(x => x.Courseunits)
            .Include(x => x.User)
            .ToListAsync();
        return courseenrolls.Select(x => x.ToDto()).ToList();
    }

    public async Task<UserCourseDto> GetUserCourseByCourseId(int userCourseId)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        //var courses = await dbContext.Courses.ToListAsync();
        var courseEnroll = await dbContext.Courseenrolls
            .Where(x => x.Id == userCourseId)
            .Include(x => x.Course)
                .ThenInclude(x => x.Courseunits)
                .ThenInclude(x => x.Unit)
            .Include(x => x.User)
            .FirstOrDefaultAsync();

        var courseEnrollDto = new UserCourseDto
        {
            UserCourseId = courseEnroll.Id,
            OwnerUsername = courseEnroll.User.Username, // Assuming the User entity has a Username property
            Course = new CourseDto
            {
                Id = courseEnroll.Course.Id,
                Title = courseEnroll.Course.Title,
                Courseunits = courseEnroll.Course.Courseunits
            .Select(cu => new Courseunit
            {
                Id = cu.Unit.Id,
            })
            .ToList()
            }
        };

        return courseEnrollDto;
    }
}
