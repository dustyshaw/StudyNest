export interface courseEnrollDto {
    userCourseId: number,
    ownerUsername: string,
    course: Course,
    // units: Unit[],
}


// public int UserCourseId { get; set; }
// public string OwnerUsername { get; set; } = "";
// public CourseDto Course { get; set; } = new CourseDto();