import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CourseService } from "../services/courseService";
import { AddCourseRequest } from "../@types/Requests/AddCourseRequest";

export const CourseQueries = {
  useGetAllCourses: () => {
    return useQuery({
      queryKey: ["courses"],
      queryFn: () => CourseService.GetAllCourses(),
    });
  },
  useAddACourse: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (addCourseRequest: AddCourseRequest) => CourseService.AddCourse(addCourseRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] }); // Explicitly pass it as an array
      },
    });
  },
};
