import { CourseEnroll } from "./courseEntroll";

export interface UserAccount {
    id: number,
    username: string,
    email: string,
    streak: number,
    lastactivedate: string,
    authid: string,
    courseenrolls: CourseEnroll
}