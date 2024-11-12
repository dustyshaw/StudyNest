import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserCourseService } from "../services/userCourseService";
import toast from "react-hot-toast";
import { AddCourseEnrollRequest } from "../@types/Requests/AddCourseEnrollRequest";

export const UserCourseQueries = {
  useGetAllUserCoursesByUserId: (userId: number) => {
    return useQuery({
      queryKey: ["usercourses"],
      queryFn: () => UserCourseService.GetAllUserCourses(userId),
    });
  },
  useAddACourse: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (addCourseRequest: AddCourseEnrollRequest) => UserCourseService.AddCourseEnroll(addCourseRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["usercourses"] }); // Explicitly pass it as an array
        toast.success("Successfully Added Enrolled User in Course!")
      },
    });
  },
};
