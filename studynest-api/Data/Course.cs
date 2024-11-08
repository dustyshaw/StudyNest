using System;
using System.Collections.Generic;

namespace studynest_api.Data;

public partial class Course
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public virtual ICollection<Courseenroll> Courseenrolls { get; set; } = new List<Courseenroll>();

    public virtual ICollection<Courseunit> Courseunits { get; set; } = new List<Courseunit>();
}
