using System;
using System.Collections.Generic;

namespace studynest_api.Data2;

public partial class StudyTask
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public DateOnly? Eventstart { get; set; }

    public DateOnly? Eventend { get; set; }

    public DateOnly? Duedate { get; set; }

    public virtual ICollection<UnitTask> UnitTasks { get; set; } = new List<UnitTask>();
}
