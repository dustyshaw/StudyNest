using System.Runtime.CompilerServices;

namespace studynest_api.Data.DTOs;

public static class DtoConverter
{
    public static CourseDto ToDto(this Course course)
    {
        CourseDto dto = new CourseDto()
        {
            Id = course.Id,
            //Courseenrolls = course.Courseenrolls,
            Courseunits = course.Courseunits,
            Title = course.Title,
            Description = course.Description,
        };

        return dto;
    }

    public static UserCourseDto ToDto(this Courseenroll course)
    {
        CourseDto cDto = course.Course.ToDto();
        UserCourseDto dto = new UserCourseDto()
        {
            OwnerUsername = course.User?.Username ?? "",
            Course = cDto ?? new CourseDto(),
        };

        return dto;
    }
}
