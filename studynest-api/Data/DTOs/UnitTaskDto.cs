namespace studynest_api.Data.DTOs;

public class UnitTaskDto
{
    public int Id { get; set; }

    public int? Stackposition { get; set; }

    public int? Unitid { get; set; }

    public int? Taskid { get; set; }

    public virtual Task? Task { get; set; }
}
