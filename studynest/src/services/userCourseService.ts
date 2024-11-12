import axios from "axios"
import { courseEnrollDto } from "../@types/Dtos/courseEnrollDto"
import { AddCourseEnrollRequest } from "../@types/Requests/AddCourseEnrollRequest"

export const UserCourseService = {
    GetAllUserCourses: async (userId: number) => {
        try {
            const response = await axios.get<courseEnrollDto[]>("https://localhost:7021/getByUser",
                {
                    params: {
                      userId: userId,
                    },
                  }
            )

            return response.data
        } catch {
            console.error("Couldn't get enrolled courses")
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
}