import axios from "axios";
import { CourseUnit } from "../@types/courseUnit";


export const CourseUnitService = {
    GetCourseunitsByCourseId: async (courseId: number) => {
      try {
        const response = await axios.get<CourseUnit[]>(
          `${import.meta.env.VITE_URL}/courseunit/getallbycourseid`,
          {
            params: {
              courseId: courseId,
            },
          }
        );
        return response.data;
      } catch {
        console.error("Couldn't get course units by course id");
      }
    },
}