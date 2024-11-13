using studynest_api.Data.DTOs;
using studynest_api.Data.Requests;

namespace studynest_api.Services;

public interface ICourseService
{
    public Task<List<CourseDto>> GetAllCourses();
    public Task<CourseDto> GetCourseById(int courseId);
    public Task<bool> AddCourse(AddCourseRequest course);
}
