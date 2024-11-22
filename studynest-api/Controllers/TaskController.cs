using Microsoft.AspNetCore.Mvc;
using studynest_api.CustomData.DTOs;
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
    public async Task<StudytaskDto> GetTaskByTaskId(int taskId)
    {
        return await taskService.GetTaskByTaskId(taskId);
    }


    [HttpPost("/task/addtask")]
    public async Task<StudytaskDto> AddTask(AddTaskRequest request)
    {
        return await taskService.AddTask(request);
    }

    [HttpPatch("/task/updatetasktime")]
    public async Task<StudytaskDto> UpdateTaskTime(UpdateTaskTimeRequest request)
    {
        return await taskService.UpdateTaskTime(request);
    }

    [HttpPatch("/task/updatetask")]
    public async Task<StudytaskDto> UpdateTask(UpdateTaskRequest request)
    {
        return await taskService.UpdateTask(request);
    }
}
