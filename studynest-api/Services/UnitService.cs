using Microsoft.EntityFrameworkCore;
using studynest_api.Data;
using studynest_api.CustomData.Requests;

namespace studynest_api.Services;

public class UnitService : IUnitService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;
    public UnitService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<bool> AddUnit(AddUnitRequest addUnitRequest)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        Unit newUnit = new Unit()
        {
            Title = addUnitRequest.Title,
        };

        dbContext.Add(newUnit);
        await dbContext.SaveChangesAsync();

        var unitJustAdded = await dbContext.Units.Where(x => x.Equals(newUnit)).FirstOrDefaultAsync();

        Courseunit courseunit = new Courseunit()
        {
            Stackposition = 0,
            Unitid = newUnit.Id,
            Courseid = addUnitRequest.CourseId,
        };

        dbContext.Add(courseunit);
        await dbContext.SaveChangesAsync();

        return true;
    }

    public async Task<bool> EditUnit(EditUnitRequest request)
    {
        using var dbContext = dbContextFactory.CreateDbContext();
      
        var uuc = await dbContext.Units.Where(u => u.Id == request.Id).FirstOrDefaultAsync();

        if (uuc == null)
        {
            throw new Exception("The unit under change could not be found by it's id");
        }

        uuc.Title = request.Title;  

        dbContext.Update(uuc);
        await dbContext.SaveChangesAsync();

        return true;
    }

    //public async Task<List<UnitDto>> GetUnitByCourseId(int courseId)
    //{
    //    using var dbContext = dbContextFactory.CreateDbContext();

    //    //var courses = await dbContext.Courses.ToListAsync();
    //    var courseenrolls = await dbContext.Courseenrolls
    //        .Where(x => x.Userid == userId)
    //        .Include(x => x.Course)
    //        .Include(x => x.User)
    //        .ToListAsync();
    //    return courseenrolls.Select(x => x.ToDto()).ToList();
    //}

}
