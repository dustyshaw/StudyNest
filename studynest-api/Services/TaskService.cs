using Microsoft.EntityFrameworkCore;
using studynest_api.CustomData.DTOs;
using studynest_api.Data2;

namespace studynest_api.Services;

public class TaskService : ITaskService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;
    public TaskService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<StudyTask> GetTaskByTaskId(int taskId)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var task = await dbContext.Tasks.Where(x => x.Id == taskId).FirstOrDefaultAsync();

        if (task is null)
        {
            throw new ArgumentNullException(nameof(task));
        }

        return task;
    }
}
