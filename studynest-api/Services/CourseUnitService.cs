using Microsoft.EntityFrameworkCore;
using studynest_api.Data;

namespace studynest_api.Services;

public class CourseUnitService : ICourseUnitService
{

    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;

    public CourseUnitService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    // Change this to get by user course id?
    public async Task<List<Courseunit>> GetCourseunitsByCourseId(int courseUnitId)
    {
        using var context = dbContextFactory.CreateDbContext();

        var course = await context.Courseenrolls.Where(x => x.Id == courseUnitId).FirstOrDefaultAsync();

        if (course == null)
        {
            throw new Exception($"Could not find course associated with course id: {courseUnitId}");
        }

        var courseUnits = await context.Courseunits
            .Where(x => x.Courseid == course.Courseid)
            //.Include(x => x.Course)
            .Include(x => x.Unit)
                .ThenInclude(x => x.UnitTasks)
                    .ThenInclude(x => x.Task)
            .ToListAsync();

        return courseUnits;
    }
}
