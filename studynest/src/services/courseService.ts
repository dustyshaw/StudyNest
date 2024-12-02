import axios from "axios";
import { Course } from "../@types/course";
import { AddCourseRequest } from "../@types/Requests/AddCourseRequest";
import { EditCourseRequest } from "../@types/Requests/EditCourseRequest";
import { CourseWithUnitsRequest } from "../@types/Requests/CourseWithUnitsRequest";

export const CourseService = {
  GetAllCourses: async () => {
    try {
      const response = await axios.get<Course[]>(
        `${import.meta.env.VITE_URL}/course/getall`
      );
      return response.data;
    } catch {
      console.error("Couldn't get courses");
    }
  },
  GetAllPublicCourses: async () => {
    try {
      const response = await axios.get<Course[]>(
        `${import.meta.env.VITE_URL}/course/public`
      );
      return response.data;
    } catch {
      console.error("Couldn't get courses");
    }
  },
  GetCourseById: async (courseId: number) => {
    try {
      const response = await axios.get<Course>(
        `${import.meta.env.VITE_URL}/coursebyid`,
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
        `${import.meta.env.VITE_URL}/course/addCourse`,
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
  AddCourseWithUnits: async (requests: CourseWithUnitsRequest) => {
    try {
      const response = await axios.post<Course>(
        `${import.meta.env.VITE_URL}/course/addCourse`,
        requests,
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
  EditCourse: async (editCourseRequest: EditCourseRequest) => {
    try {
      const response = await axios.patch<Course>(
        `${import.meta.env.VITE_URL}/course/editCourse`,
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
  },
};
