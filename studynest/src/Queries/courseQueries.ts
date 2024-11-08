import { useQuery } from "@tanstack/react-query"
import { CourseService } from "../services/courseService"

export const CourseQueries = {
    useGetAllCourses: () => {
        useQuery({ 
            queryKey: ['courses'], 
            queryFn: CourseService.GetAllCourses
        })
    },
}