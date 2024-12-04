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

        var courseUnits = await dbContext.Courseunits
            .Where(x => courseIds.Contains(x.Courseid))
            .Select(x => x.Unit).ToListAsync();
        
        var unitTasks = await dbContext.UnitTasks.Where(x => courseUnits.Contains(x.Unit)).ToListAsync();
        var unitTaskIds = unitTasks.Select(x => x.Taskid).ToList();

        var tasks = await dbContext.Studytasks.Where(x => unitTaskIds.Contains(x.Id)).ToListAsync();


        var taskDurations = tasks.Select(task =>
        {
            if (task.Eventstart != null && task.Eventend != null)
            {
                var duration = task.Eventend - task.Eventstart;

                return new
                {
                    TaskId = task.Id,
                    DurationInMinutes = (int)duration.Value.TotalMinutes // Assuming StartTime and EndTime are not null
                };
            }

            return new
            {
                TaskId = task.Id,
                DurationInMinutes = 0 // Default to 0 if times are null
            };
        }).ToList();


        StatsReport statsReport = new StatsReport()
        {
            CourseTitle = userEmail,
            MinutesElapsed = 0,
        };
        throw new NotImplementedException();
    }
}
