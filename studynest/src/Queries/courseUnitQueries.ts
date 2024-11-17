import { useQuery } from "@tanstack/react-query";
import { CourseUnitService } from "../services/courseUnitService";

export const CourseUnitQueries = {
  useGetCourseById: (courseId: number) => {
    return useQuery({
      queryKey: ["courses"],
      queryFn: () => CourseUnitService.GetCourseunitsByCourseId(courseId),
    });
  },
};
