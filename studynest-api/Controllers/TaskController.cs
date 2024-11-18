using Microsoft.AspNetCore.Mvc;
using studynest_api.Data2;
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
    public async Task<StudyTask> GetTaskByTaskId(int taskId)
    {
        return await taskService.GetTaskByTaskId(taskId);
    }
}
