using Microsoft.AspNetCore.Mvc;
using studynest_api.Data.Requests;
using studynest_api.Services;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : Controller
{
   private readonly IUserService userService;

    public UserController(IUserService userService)
    {
        this.userService = userService;
    }

    [HttpPost("/addUser")]
    public async Task<bool> AddUser(AddUserRequest request)
    {
        return await userService.AddUser(request); 
    }
}
