using studynest_api.CustomData.Requests;
using studynest_api.Data;

namespace studynest_api.Services;

public interface IUserService
{
    public Task<bool> AddUser(AddUserRequest newUserRequest);
    public Task<Useraccount> GetUserByEmail(string email);
    public Task<int> UpdateUserStreak(string email);
}
