import { CourseEnroll } from "./courseEntroll";
import { CourseUnit } from "./courseUnit";

export interface Course {
    id: number,
    title: string,
    description: string,
    courseenrolls: CourseEnroll[],
    courseunits: CourseUnit[],
}