namespace studynest_api.CustomData.Requests;

public class AddTaskRequest
{
    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime? Eventstart { get; set; }

    public DateTime? Eventend { get; set; }

    public DateTime? Duedate { get; set; }

    public bool? Iscomplete { get; set; }
}
