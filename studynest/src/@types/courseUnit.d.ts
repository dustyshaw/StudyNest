import { Course } from "./course";
import { Unit } from "./unit";

export interface CourseUnit {
    id: number,
    stackposition: number,
    unitid: number,
    courseid: number,
    course: Course,
    unit: Unit
}