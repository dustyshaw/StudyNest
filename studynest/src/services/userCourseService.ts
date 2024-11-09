import axios from "axios"
import { CourseEnroll } from "../@types/courseEntroll"

export const UserCourseService = {
    GetAllUserCourses: async () => {
        try {
            const response = await axios.get<CourseEnroll[]>("https://localhost:7021/course")

            return response.data
        } catch {
            console.error("Couldn't get enrolled courses")
        }
    }
}