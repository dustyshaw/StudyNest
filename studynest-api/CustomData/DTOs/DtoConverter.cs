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
        //var units = course.Course.Courseunits.Select(x => x.Unit).ToList();
        //var unittasks = units.Select(x => x.UnitTasks).ToList();
        //var tasks = unittasks.SelectMany(unittasks => unittasks);


        CourseDto cDto = course.Course.ToDto();
        UserCourseDto dto = new UserCourseDto()
        {
            UserCourseId = course.Id,
            OwnerUsername = course.User?.Username ?? "",
            Course = cDto ?? new CourseDto(),
            //Hours = course.Course.Courseunits.Select(x => x.Unit).Select(x => x.UnitTasks)
            //Minutes = 
        };

        return dto;
    }

    public static StudytaskDto ToDto(this Studytask task)
    {
        if (task is null || task.Eventend is null || task.Eventstart is null)
        {
            throw new ArgumentNullException(nameof(task));
        }

        var timeDifference = task.Eventend.Value - task.Eventstart.Value;
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
            Iscomplete=task.Iscomplete
        };
        
        return dto;
    }
}
