using Microsoft.EntityFrameworkCore;
using studynest_api.CustomData.DTOs;
using studynest_api.CustomData.Requests;
using studynest_api.Data;

namespace studynest_api.Services;

public class TaskService : ITaskService
{
    private readonly IDbContextFactory<DbDustyshaw25Context> dbContextFactory;
    public TaskService(IDbContextFactory<DbDustyshaw25Context> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<StudytaskDto> GetTaskByTaskId(int taskId)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var task = await dbContext.Studytasks.Where(x => x.Id == taskId).FirstOrDefaultAsync();

        if (task is null)
        {
            throw new ArgumentNullException(nameof(task));
        }

        return task.ToDto();
    }

    public async Task<StudytaskDto> AddTask(AddTaskRequest request)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        Studytask newTask = new()
        {
            Title = request.Title,
            Description = request.Description,
            Eventstart = request.Eventstart,
            Eventend = request.Eventend,
            Duedate = request.Duedate,
            Iscomplete = request.Iscomplete,
        };

        dbContext.Add(newTask);
        await dbContext.SaveChangesAsync();

        var task = await dbContext.Studytasks.Where(x => x.Equals(newTask)).FirstOrDefaultAsync();

        if (task is null)
        {
            throw new Exception("failed to add task");
        }

        UnitTask newUnitTask = new()
        {
            Stackposition = 0,
            Unitid = request.UnitId,
            Taskid = task.Id
        };

        dbContext.Add(newUnitTask);
        await dbContext.SaveChangesAsync();

        return newTask.ToDto();
    }

    public async Task<StudytaskDto> UpdateTaskTime(UpdateTaskTimeRequest request)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var task = await dbContext.Studytasks.Where(x => x.Id == request.TaskId).FirstOrDefaultAsync();

        if (task is null)
        {
            throw new ArgumentNullException(nameof(task));
        }

        if (task.Eventend == null)
        {
            task.Eventend = DateTime.Now;
        }

        task.Eventend = task.Eventend.Value.AddHours(request.Hours).AddMinutes(request.Minutes);


        dbContext.Update(task);
        await dbContext.SaveChangesAsync();

        return task.ToDto();
    }

    public async Task<StudytaskDto> UpdateTask(UpdateTaskRequest request)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var task = await dbContext.Studytasks.Where(x => x.Id == request.TaskId).FirstOrDefaultAsync();

        if (task is null)
        {
            throw new ArgumentNullException(nameof(task));
        }

        task.Description = request.Description;
        task.Title = request.Title;
        task.Duedate = request.Duedate;
        task.Iscomplete = request.IsComplete;

        dbContext.Update(task);
        await dbContext.SaveChangesAsync();

        return task.ToDto();
    }
}
