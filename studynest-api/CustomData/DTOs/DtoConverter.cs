using System.Runtime.CompilerServices;
using studynest_api.Data;

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

    public static StudytaskDto ToDto(this Studytask task)
    {
        var timeDifference = task.Eventend.Value - task.Eventstart.Value;
        // Get the total hours and minutes from the TimeSpan
        int hoursSpent = (int)timeDifference.TotalHours;
        int minutesSpent = (int)timeDifference.TotalMinutes % 60;

        StudytaskDto dto = new()
        {
            Id=task.Id,
            Description=task.Description,
            Title=task.Title,
            Eventend=task.Eventend,
            Eventstart=task.Eventstart,
            Duedate=task.Duedate,
            UnitTasks=task.UnitTasks,
            Hours=hoursSpent,
            Minutes=minutesSpent,
        };
        
        return dto;
    }
}
