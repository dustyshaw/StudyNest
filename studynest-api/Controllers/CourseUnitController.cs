using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData.DTOs;
using studynest_api.Data2;
using studynest_api.Services;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class CourseUnitController : Controller
{
    private readonly ICourseUnitService courseUnitService;

    public CourseUnitController(ICourseUnitService courseUnitService)
    {
        this.courseUnitService = courseUnitService;
    }


    [HttpGet("/courseunit/getallbycourseid")]
    public async Task<List<Courseunit>> GetCourseunitsByCourseId(int courseId)
    {
        return await courseUnitService.GetCourseunitsByCourseId(courseId);
    }

}
