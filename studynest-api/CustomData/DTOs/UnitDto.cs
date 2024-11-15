namespace studynest_api.CustomData.DTOs;

public class UnitDto
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public virtual ICollection<CourseUnitDto> Courseunits { get; set; } = new List<CourseUnitDto>();

    public virtual ICollection<UnitTaskDto> UnitTasks { get; set; } = new List<UnitTaskDto>();
}
