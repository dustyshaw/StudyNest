using studynest_api.Data;

namespace studynest_api.CustomData.DTOs;

public class UnitTaskDto
{
    public int Id { get; set; }

    public int? Stackposition { get; set; }

    public int? Unitid { get; set; }

    public int? Taskid { get; set; }

    public virtual Studytask? Task { get; set; }
}
