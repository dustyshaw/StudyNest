import { UnitTask } from "./UnitTask";

export interface Task {
    id: number,
    title: string,
    description: string,
    eventStart: Date,
    eventEnd: Date,
    dueDate: Date,
    unitTasks: UnitTask,
    isComplete: boolean,
}