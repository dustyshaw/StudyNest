using studynest_api.Data2;

namespace studynest_api.Services;

public interface ITaskService
{
    public Task<StudyTask> GetTaskByTaskId(int taskId);

}
