import axios from "axios";
import { CourseUnit } from "../@types/courseUnit";


export const CourseUnitService = {
    GetCourseunitsByCourseId: async (courseId: number) => {
      try {
        const response = await axios.get<CourseUnit[]>(
          "https://localhost:7021/courseunit/getallbycourseid",
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