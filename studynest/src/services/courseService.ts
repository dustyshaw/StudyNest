import axios from "axios";
import { Course } from "../@types/course";
import { AddCourseRequest } from "../@types/Requests/AddCourseRequest";
import { EditCourseRequest } from "../@types/Requests/EditCourseRequest";

export const CourseService = {
  GetAllCourses: async () => {
    try {
      const response = await axios.get<Course[]>(
        "https://localhost:7021/course/getall"
      );
      return response.data;
    } catch {
      console.error("Couldn't get courses");
    }
  },
  GetAllPublicCourses: async () => {
    try {
      const response = await axios.get<Course[]>(
        "https://localhost:7021/course/public"
      );
      return response.data;
    } catch {
      console.error("Couldn't get courses");
    }
  },
  GetCourseById: async (courseId: number) => {
    console.log("HHHHAHAA: course id: ", courseId)
    try {
      const response = await axios.get<Course>(
        "https://localhost:7021/coursebyid",
        {
          params: {
            courseId: courseId,
          },
        }
      );

      return response.data;
    } catch {
      console.error("Couldn't get courses");
    }
  },
  AddCourse: async (addCourseRequest: AddCourseRequest) => {
    try {
      const response = await axios.post<Course>(
        "https://localhost:7021/course/addCourse",
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
  EditCourse: async(editCourseRequest: EditCourseRequest) => {
    console.log(editCourseRequest)
    try {
      const response = await axios.patch<Course>(
        "https://localhost:7021/course/editCourse",
        editCourseRequest,
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
  }
};
