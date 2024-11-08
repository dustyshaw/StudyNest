import { Course } from "./course";
import { UserAccount } from "./userAccount";

export interface CourseEnroll {
    id: number,
    userId: number,
    courseId: number,
    course: Course,
    user: UserAccount,
}