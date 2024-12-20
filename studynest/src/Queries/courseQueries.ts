import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CourseService } from "../services/courseService";
import { AddCourseRequest } from "../@types/Requests/AddCourseRequest";
import toast from "react-hot-toast";
import { EditCourseRequest } from "../@types/Requests/EditCourseRequest";
import { CourseWithUnitsRequest } from "../@types/Requests/CourseWithUnitsRequest";

export const CourseQueries = {
  useGetAllCourses: () => {
    return useQuery({
      queryKey: ["courses"],
      queryFn: () => CourseService.GetAllCourses(),
    });
  },
  useGetAllPublicCourses: () => {
    return useQuery({
      queryKey: ["courses"],
      queryFn: () => CourseService.GetAllPublicCourses(),
    });
  },
  useGetCourseById: (courseNumber: number) => {
    return useQuery({
      queryKey: ["courses"],
      queryFn: () => CourseService.GetCourseById(courseNumber),
    });
  },
  useAddACourse: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (addCourseRequest: AddCourseRequest) =>
        CourseService.AddCourse(addCourseRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] }); // Explicitly pass it as an array
        toast.success("Successfully Added Course");
      },
    });
  },
  useAddCourseWithUnits: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (addCourseRequest: CourseWithUnitsRequest) =>
        CourseService.AddCourseWithUnits(addCourseRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] }); // Explicitly pass it as an array
        toast.success("Successfully Added Course");
      },
    });
  },
  useEditCourse: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (editCourseRequest: EditCourseRequest) =>
        CourseService.EditCourse(editCourseRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["courses"] }); // Explicitly pass it as an array
        toast.success("Successfully Edited Course");
      },
    });
  },
};
