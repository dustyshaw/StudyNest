﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using studynest_api.Data.DTOs;
using studynest_api.Data.Requests;
using studynest_api.Services;

namespace studynest_api.Controllers;


[ApiController]
[Route("[controller]")]
public class CourseController : ControllerBase
{
    private readonly ICourseService courseService;

    public CourseController(ICourseService courseService)
    {
        this.courseService = courseService;
    }

    [HttpGet]
    public async Task<List<CourseDto>> GetAllCourses()
    {
        return await courseService.GetAllCourses();
    }

    [HttpPost("/addCourse")]
    [Authorize]
    public async Task<bool> AddCourse(AddCourseRequest addCourseRequest)
    {
        var userEmail = User?.FindFirst("email")?.Value;

        return await courseService.AddCourse(addCourseRequest);
    }
}
