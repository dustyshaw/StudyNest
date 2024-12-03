using Microsoft.EntityFrameworkCore;
using studynest_api.CustomData;
using studynest_api.Data;

namespace studynest_api.Services;

public class StatsService : IStatsService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;
    public StatsService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }
    public async Task<List<StatsReport>> GetUserStats(string userEmail)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var user = await dbContext.Useraccounts.Where(x => x.Email == userEmail).FirstOrDefaultAsync();

        var userCourseEnrolls = await dbContext.Courseenrolls.Where(x => x.Userid == user.Id).ToListAsync();
        var courseIds = userCourseEnrolls.Select(x => x.Courseid).ToList();

        var userCourses = await dbContext.Courses
            .Where(course => courseIds.Contains(course.Id))
            .ToListAsync();

        var courseNames = userCourses.Select(x => x.Title).ToList();    

        var courseUnits = await dbContext.Courseunits.Select(x => x.Unit).ToListAsync();
        
        var unitTasks = await dbContext.UnitTasks.Where(x => courseUnits.Contains(x.Unit)).ToListAsync();
        var unitTaskIds = unitTasks.Select(x => x.Taskid).ToList();

        var tasks = await dbContext.Studytasks.Where(x => unitTaskIds.Contains(x.Id)).ToListAsync();


        StatsReport statsReport = new StatsReport()
        {
            CourseTitle = userEmail,
            MinutesElapsed = 0,
        };
        throw new NotImplementedException();
    }
}
