using studynest_api.Data;

namespace studynest_api.CustomData.DTOs;

public class CourseDto
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;

    public string? Description { get; set; }
    public bool? Ispublic { get; set; }

    //public virtual ICollection<UserCourseDto> Courseenrolls { get; set; } = new List<UserCourseDto>();

    public virtual ICollection<Courseunit> Courseunits { get; set; } = new List<Courseunit>();
}
