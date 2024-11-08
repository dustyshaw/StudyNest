using Microsoft.EntityFrameworkCore;
using studynest_api.Data;
using studynest_api.Data.DTOs;


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
}
