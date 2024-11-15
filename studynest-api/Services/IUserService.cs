using studynest_api.CustomData.Requests;

namespace studynest_api.Services;

public interface IUserService
{
    public Task<bool> AddUser(AddUserRequest newUserRequest);
}
