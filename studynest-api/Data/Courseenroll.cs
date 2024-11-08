using System;
using System.Collections.Generic;

namespace studynest_api.Data;

public partial class Courseenroll
{
    public int Id { get; set; }

    public int? Userid { get; set; }

    public int? Courseid { get; set; }

    public virtual Course? Course { get; set; }

    public virtual Useraccount? User { get; set; }
}
