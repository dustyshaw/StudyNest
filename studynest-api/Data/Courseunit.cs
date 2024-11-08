using System;
using System.Collections.Generic;

namespace studynest_api.Data;

public partial class Courseunit
{
    public int Id { get; set; }

    public int? Stackposition { get; set; }

    public int? Unitid { get; set; }

    public int? Courseid { get; set; }

    public virtual Course? Course { get; set; }

    public virtual Unit? Unit { get; set; }
}
