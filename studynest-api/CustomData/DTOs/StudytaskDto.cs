using studynest_api.Data;

namespace studynest_api.CustomData.DTOs;

public class StudytaskDto
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime? Eventstart { get; set; }

    public DateTime? Eventend { get; set; }

    public DateTime? Duedate { get; set; }

    public bool? Iscomplete { get; set; }

    public int Hours { get; set; }
    public int Minutes { get; set; }

    public virtual ICollection<UnitTask> UnitTasks { get; set; } = new List<UnitTask>();
}
