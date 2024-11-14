namespace studynest_api.Data.DTOs;

public class CourseUnitDto
{
    public int Id { get; set; }

    public int? Stackposition { get; set; }

    public int? Unitid { get; set; }

    public int? Courseid { get; set; }

    public virtual Course? Course { get; set; }
}
