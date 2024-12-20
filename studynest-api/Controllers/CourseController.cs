﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData.DTOs;
using studynest_api.CustomData.Requests;
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

    [HttpGet("/course/getall")]
    public async Task<List<CourseDto>> GetAllCourses()
    {
        return await courseService.GetAllCourses();
    }

    [HttpGet("/course/public")]
    public async Task<List<CourseDto>> GetAllPublicCourses()
    {
        return await courseService.GetAllPublicCourses();
    }

    [HttpGet("/coursebyid")]
    public async Task<CourseDto> GetCourseById(int courseId)
    {
        return await courseService.GetCourseById(courseId);
    }

    [HttpPost("/course/addCourse")]
    public async Task<bool> AddCourse(AddCourseRequest addCourseRequest)
    {
        return await courseService.AddCourse(addCourseRequest);
    }

    [HttpPatch("/course/editCourse")]
    public async Task<bool> EditCourse(EditCourseRequest editCourseRequest)
    {
        return await courseService.EditCourse(editCourseRequest);
    }
}
