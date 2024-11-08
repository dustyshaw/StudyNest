import { CourseEnroll } from "./courseEntroll";
import { CourseUnit } from "./courseUnit";

export interface Course {
    title: string,
    description: string,
    courseenrolls: CourseEnroll,
    courseunits: CourseUnit,
}