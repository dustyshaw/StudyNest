using System;
using System.Collections.Generic;

namespace studynest_api.Data2;

public partial class Unit
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public virtual ICollection<Courseunit> Courseunits { get; set; } = new List<Courseunit>();

    public virtual ICollection<UnitTask> UnitTasks { get; set; } = new List<UnitTask>();
}
