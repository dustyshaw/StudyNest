using studynest_api.CustomData.Requests;
using studynest_api.Data;

namespace studynest_api.Services;

public interface ITaskService
{
    public Task<Studytask> GetTaskByTaskId(int taskId);
    public Task<Studytask> AddTask(AddTaskRequest request);
    public Task<Studytask> UpdateTaskTime(UpdateTaskTimeRequest request);

}
