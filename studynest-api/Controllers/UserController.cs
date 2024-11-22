using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData.Requests;
using studynest_api.Data;
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

    [HttpPost("/user/getByEmail")]
    public async Task<Useraccount> GetUserByEmail([FromBody] string email)
    {
        return await userService.GetUserByEmail(email);
    }

    [HttpPost("/user/updatestreak")]
    public async Task<int> UpdateUserStreak([FromBody] string email)
    {
        return await userService.UpdateUserStreak(email);
    }
}
