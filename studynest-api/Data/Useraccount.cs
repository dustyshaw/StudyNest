using System;
using System.Collections.Generic;

namespace studynest_api.Data2;

public partial class Useraccount
{
    public int Id { get; set; }

    public string? Username { get; set; }

    public string? Email { get; set; }

    public int? Streak { get; set; }

    public DateOnly? Lastactivedate { get; set; }

    public string? AuthId { get; set; }

    public virtual ICollection<Courseenroll> Courseenrolls { get; set; } = new List<Courseenroll>();
}
