using studynest_api.Data.DTOs;

namespace studynest_api.Services;

public interface ICourseService
{
    public Task<List<CourseDto>> GetAllCourses();
}
