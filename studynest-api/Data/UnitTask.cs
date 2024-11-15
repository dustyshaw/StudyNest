using System;
using System.Collections.Generic;

namespace studynest_api.Data2;

public partial class UnitTask
{
    public int Id { get; set; }

    public int? Stackposition { get; set; }

    public int? Unitid { get; set; }

    public int? Taskid { get; set; }

    public virtual StudyTask? Task { get; set; }

    public virtual Unit? Unit { get; set; }
}
