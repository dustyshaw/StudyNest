﻿using Microsoft.EntityFrameworkCore;
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

    public async Task<Studytask> GetTaskByTaskId(int taskId)
    {
        using var dbContext = dbContextFactory.CreateDbContext();

        var task = await dbContext.Studytasks.Where(x => x.Id == taskId).FirstOrDefaultAsync();

        if (task is null)
        {
            throw new ArgumentNullException(nameof(task));
        }

        return task;
    }

    public async Task<Studytask> AddTask(AddTaskRequest request)
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

        return newTask;
    }
}
