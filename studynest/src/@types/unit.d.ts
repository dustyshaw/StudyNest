import { CourseUnit } from "./courseUnit";
import { UnitTask } from "./UnitTask";

export interface Unit {
    id: number,
    title: string,
    courseunits: CourseUnit[],
    unitTasks: UnitTask[]
}