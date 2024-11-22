namespace studynest_api.CustomData.Requests;

public class UpdateTaskRequest
{
    public int TaskId { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime? Duedate { get; set; }

}
