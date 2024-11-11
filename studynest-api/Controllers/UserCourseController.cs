using Microsoft.AspNetCore.Mvc;
using studynest_api.Data;
using studynest_api.Data.DTOs;
using studynest_api.Data.Requests;
using studynest_api.Services;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class UserCourseController
{
    private readonly IUserCourseService userCourseService;
    public UserCourseController(IUserCourseService userCourseService)
    {
        this.userCourseService = userCourseService;
    }

    [HttpGet("/getByUser")]
    public Task<List<UserCourseDto>> GetCoursesByUser(int userId)
    {
        return userCourseService.GetCoursesByUserId(userId);
    }

    [HttpPost("/addCourseEnroll")]
    public Task<bool> AddUserCourse(AddCourseEnrollRequest request)
    {
        return userCourseService.AddUserCourse(request);
    }
}
