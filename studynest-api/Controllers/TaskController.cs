using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData.Requests;
using studynest_api.Data;
using studynest_api.Services;

namespace studynest_api.Controllers;

[ApiController]
[Route("[controller]")]
public class TaskController : Controller
{
    private readonly ITaskService taskService;

    public TaskController(ITaskService taskService)
    {
        this.taskService = taskService;
    }

    [HttpGet("/task/gettaskbytaskid")]
    public async Task<Studytask> GetTaskByTaskId(int taskId)
    {
        return await taskService.GetTaskByTaskId(taskId);
    }


    [HttpPost("/task/addtask")]
    public async Task<Studytask> AddTask(AddTaskRequest request)
    {
        return await taskService.AddTask(request);
    }

    [HttpPatch("/task/updatetasktime")]
    public async Task<Studytask> UpdateTaskTime(UpdateTaskTimeRequest request)
    {
        return await taskService.UpdateTaskTime(request);
    }
}
