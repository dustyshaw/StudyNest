import axios from "axios";
import { CourseUnit } from "../@types/courseUnit";


export const CourseUnitService = {
    GetCourseunitsByCourseId: async (courseId: number) => {
        // console.log("courseId2: ", courseId)
      try {
        const response = await axios.get<CourseUnit[]>(
          "https://localhost:7021/courseunit/getallbycourseid",
          {
            params: {
              courseId: courseId,
            },
          }
        );
        // console.log("response.data:", response.data)
        return response.data;
      } catch {
        console.error("Couldn't get course units by course id");
      }
    },
}