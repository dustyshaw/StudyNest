using studynest_api.Data2;

namespace studynest_api.CustomData.DTOs;

public class CourseUnitDto
{
    public int Id { get; set; }

    public int? Stackposition { get; set; }

    public int? Unitid { get; set; }

    public int? Courseid { get; set; }

    public virtual Course? Course { get; set; }
}
