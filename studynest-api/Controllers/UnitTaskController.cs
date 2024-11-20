using Microsoft.AspNetCore.Mvc;
using studynest_api.Services;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class UnitTaskController : Controller
{
    private readonly IUnitTaskService unitTaskService;

    public UnitTaskController(IUnitTaskService unitTaskService)
    {
        this.unitTaskService = unitTaskService;
    }

}
