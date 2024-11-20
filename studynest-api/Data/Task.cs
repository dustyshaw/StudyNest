using System;
using System.Collections.Generic;

namespace studynest_api.Data;

public partial class Task
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime? Eventstart { get; set; }

    public DateTime? Eventend { get; set; }

    public DateTime? Duedate { get; set; }

    public bool? Iscomplete { get; set; }

    public virtual ICollection<UnitTask> UnitTasks { get; set; } = new List<UnitTask>();
}
