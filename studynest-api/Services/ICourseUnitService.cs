using studynest_api.Data;

namespace studynest_api.Services;

public interface ICourseUnitService
{
    public Task<List<Courseunit>> GetCourseunitsByCourseId(int courseId);
}
