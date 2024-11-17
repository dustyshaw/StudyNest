﻿using System.Runtime.CompilerServices;
using studynest_api.Data2;

namespace studynest_api.CustomData.DTOs;

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
            Ispublic = course.Ispublic ?? true,
        };

        return dto;
    }

    public static UserCourseDto ToDto(this Courseenroll course)
    {
        CourseDto cDto = course.Course.ToDto();
        UserCourseDto dto = new UserCourseDto()
        {
            UserCourseId = course.Id,
            OwnerUsername = course.User?.Username ?? "",
            Course = cDto ?? new CourseDto(),
        };

        return dto;
    }
}