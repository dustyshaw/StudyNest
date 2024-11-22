using studynest_api.CustomData.DTOs;
using studynest_api.CustomData.Requests;
using studynest_api.Data;

namespace studynest_api.Services;

public interface ITaskService
{
    public Task<StudytaskDto> GetTaskByTaskId(int taskId);
    public Task<StudytaskDto> AddTask(AddTaskRequest request);
    public Task<StudytaskDto> UpdateTaskTime(UpdateTaskTimeRequest request);
    public Task<StudytaskDto> UpdateTask(UpdateTaskRequest request);


}
