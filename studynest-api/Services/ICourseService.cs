using studynest_api.CustomData.Requests;
using studynest_api.CustomData.DTOs;

namespace studynest_api.Services;

public interface ICourseService
{
    public Task<List<CourseDto>> GetAllCourses();
    public Task<List<CourseDto>> GetAllPublicCourses();
    public Task<CourseDto> GetCourseById(int courseId);
    public Task<bool> AddCourse(AddCourseRequest course);
    public Task<bool> EditCourse(EditCourseRequest editCourseRequest);
}
