using studynest_api.Data;
using studynest_api.Data.DTOs;
using studynest_api.Data.Requests;

namespace studynest_api.Services;

public interface IUserCourseService
{
    public Task<bool> AddUserCourse(AddCourseEnrollRequest addCourseEnrollRequest);
    public Task<List<UserCourseDto>> GetCoursesByUserId(int userId);
}
