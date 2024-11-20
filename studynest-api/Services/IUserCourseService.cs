using studynest_api.Data;
using studynest_api.CustomData.Requests;
using studynest_api.CustomData.DTOs;

namespace studynest_api.Services;

public interface IUserCourseService
{
    public Task<bool> AddUserCourse(AddCourseEnrollRequest addCourseEnrollRequest);
    public Task<List<UserCourseDto>> GetCoursesByUserId(int userId);
    public Task<UserCourseDto> GetUserCourseByCourseId(int userCourseId);
}
