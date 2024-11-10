import axios from "axios";
import { Course } from "../@types/course";
import { AddCourseRequest } from "../@types/Requests/AddCourseRequest";

export const CourseService = {
  GetAllCourses: async () => {
    try {
      const response = await axios.get<Course[]>(
        "https://localhost:7021/course"
      );

      return response.data;
    } catch {
      console.error("Couldn't get courses");
    }
  },
  AddCourse: async (addCourseRequest: AddCourseRequest) => {
    try {
      const response = await axios.post<Course>(
        "https://localhost:7021/addCourse",
        addCourseRequest,
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
