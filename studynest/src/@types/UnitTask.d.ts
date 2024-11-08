import { Task } from "./task";
import { Unit } from "./unit";

export interface UnitTask {
    id: number,
    stackposition: number,
    unitid: number,
    taskid: number,
    task: Task,
    unit: Unit
}