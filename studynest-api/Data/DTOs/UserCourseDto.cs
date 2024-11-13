using System.Text.Json.Serialization;

namespace studynest_api.Data.DTOs;

public class UserCourseDto
{
    public string OwnerUsername { get; set; } = "";
    public CourseDto Course { get; set; } = new CourseDto();
}
