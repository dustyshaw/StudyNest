import axios from "axios";
import { courseEnrollDto } from "../@types/Dtos/courseEnrollDto";
import { AddCourseEnrollRequest } from "../@types/Requests/AddCourseEnrollRequest";

export const UserCourseService = {
  // GOAL: Make it so that there is a bearer in the header
  GetAllUserCourses: async (userId: number) => {
    try {
      const response = await axios.get<courseEnrollDto[]>(
        "https://localhost:7021/getByUser",
        {
          params: {
            userId: userId,
          },
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );

      return response.data;
    } catch {
      console.error("Couldn't get enrolled courses");
    }
  },
  GetUserCourseById: async (userCourseId: number) => {
    try {
      const response = await axios.get<courseEnrollDto[]>(
        "https://localhost:7021/getUserCourse",
        {
          params: {
            userCourseId: userCourseId,
          },
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );

      return response.data;
    } catch {
      console.error("Couldn't get enrolled courses");
    }
  },
  AddCourseEnroll: async (request: AddCourseEnrollRequest) => {
    try {
      const response = await axios.post<boolean>(
        "https://localhost:7021/addCourseEnroll",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Couldn't add course.");
    }
  },
};
