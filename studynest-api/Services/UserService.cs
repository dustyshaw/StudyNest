using Microsoft.EntityFrameworkCore;
using studynest_api.Data;
using studynest_api.Data.Requests;

namespace studynest_api.Services;

public class UserService : IUserService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;
    public UserService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<bool> AddUser(AddUserRequest newUserRequest)
    {
        using var context = dbContextFactory.CreateDbContext();

        bool userExists = await context.Useraccounts
                                   .AnyAsync(x => x.AuthId == newUserRequest.AuthId || x.Email == newUserRequest.Email);

        if (userExists)
        {
            return false; // Don't add the user if one already exists
        }

        Useraccount newUser = new Useraccount()
        {
            Username = newUserRequest.UserName.Replace(" ", "").ToLower(),
            Email = newUserRequest.Email,
            AuthId = newUserRequest.AuthId,
        };

        context.Add(newUser);
        await context.SaveChangesAsync();
        return true;
    }
}
