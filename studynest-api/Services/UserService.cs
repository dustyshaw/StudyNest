using Microsoft.EntityFrameworkCore;
using studynest_api.Data;
using studynest_api.CustomData.Requests;

namespace studynest_api.Services;

public class UserService : IUserService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;

    public UserService()
    {
    }

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

    public async Task<Useraccount> GetUserByEmail(string email)
    {
        using var context = dbContextFactory.CreateDbContext();

        var user = await context.Useraccounts.Where(x => x.Email == email).FirstOrDefaultAsync();


        if (user == null)
        {
            throw new Exception("No user found");
        }

        return user;
    }

    public async Task<int> UpdateUserStreak(int userId)
    {
        using var context = dbContextFactory.CreateDbContext();

        var user = await context.Useraccounts.Where(x => x.Id == userId).FirstOrDefaultAsync();

        if (user == null)
        {
            return 0;
        }

        var yesterday = DateOnly.FromDateTime(DateTime.Today.AddDays(-1));

        if (user.Lastactivedate == yesterday)
        {
            user.Streak = (user.Streak ?? 0) + 1;
            user.Lastactivedate = DateOnly.FromDateTime(DateTime.Today); 
            await context.SaveChangesAsync();
        }

        return user.Streak ?? 0;
    }
}
