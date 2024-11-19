using Microsoft.AspNetCore.Mvc;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class UnitTaskController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
