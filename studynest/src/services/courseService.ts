import axios from "axios";
import { Course } from "../@types/course";


export const CourseService = {
    GetAllCourses: async () => {
        try {
            const response = await axios.get<Course[]>("https://localhost:7021/course")

            return response.data
        } catch {
            console.error("Couldn't get courses")
        }
    },
}