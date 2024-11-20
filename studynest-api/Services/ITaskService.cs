using studynest_api.Data;

namespace studynest_api.Services;

public interface ITaskService
{
    public Task<Studytask> GetTaskByTaskId(int taskId);

}
