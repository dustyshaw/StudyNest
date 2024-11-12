using studynest_api.Data.Requests;

namespace studynest_api.Services;

public interface IUserService
{
    public Task<bool> AddUser(AddUserRequest newUserRequest);
}
