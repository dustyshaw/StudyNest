using Microsoft.EntityFrameworkCore;
using studynest_api.Data2;

namespace studynest_api.Services;

public class CourseUnitService : ICourseUnitService
{

    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;

    public CourseUnitService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<List<Courseunit>> GetCourseunitsByCourseId(int courseId)
    {
        using var context = dbContextFactory.CreateDbContext();

        var courseUnits = await context.Courseunits
            .Where(x => x.Courseid == courseId)
            .Include(x => x.Course)
            .Include(x => x.Unit)
            .ToListAsync();

        return courseUnits;
    }
}
