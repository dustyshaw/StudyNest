using Microsoft.EntityFrameworkCore;
using studynest_api.Data;
using studynest_api.Data.DTOs;
using studynest_api.Data.Requests;

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

        var courses = await dbContext.Courseenrolls.Where(x => x.Userid == userId).ToListAsync();
        return courses.Select(x => x.ToDto()).ToList();
    }
}
