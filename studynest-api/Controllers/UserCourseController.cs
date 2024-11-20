using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData.DTOs;
using studynest_api.CustomData.Requests;
using studynest_api.Data;
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



    // Goal: Make it so if you're not logged in as user 1, you can't see it
    [HttpGet("/authOnly")]
    [Authorize]
    public string authOnly(int userId, HttpContext context)
    {
        var identity = context.User.Identity;
        return $"AuthOnly {identity?.ToString()}";
    }



    // Goal: Make it so that if you AREN'T this user, then you can't get their courses
    [HttpGet("/getByUser")]
    public Task<List<UserCourseDto>> GetCoursesByUser(int userId)
    {
        return userCourseService.GetCoursesByUserId(userId);
    }

    [HttpGet("/getUserCourse")]
    public Task<UserCourseDto> GetUserCourse(int userCourseId)
    {
        return userCourseService.GetUserCourseByCourseId(userCourseId);
    }

    [HttpPost("/addCourseEnroll")]
    public Task<bool> AddUserCourse(AddCourseEnrollRequest request)
    {
        return userCourseService.AddUserCourse(request);
    }
}
