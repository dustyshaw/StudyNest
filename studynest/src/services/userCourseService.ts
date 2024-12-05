import axios from "axios";
import { courseEnrollDto } from "../@types/Dtos/courseEnrollDto";
import { AddCourseEnrollRequest } from "../@types/Requests/AddCourseEnrollRequest";

export const UserCourseService = {
  // GOAL: Make it so that there is a bearer in the header
  GetAllUserCourses: async (userId: number) => {
    try {
      const response = await axios.get<courseEnrollDto[]>(
        `${import.meta.env.VITE_URL}/getByUser`,
        {
          params: {
            userId: userId,
          },
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
        `${import.meta.env.VITE_URL}/getUserCourse`,
        {
          params: {
            userCourseId: userCourseId,
          },
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
        `${import.meta.env.VITE_URL}/addCourseEnroll`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data == false) {
        throw new Error("Already enrolled in course");
      }
      return response.data;
    } catch {
      throw new Error("Failed to enroll in course");
    }
  },
};
