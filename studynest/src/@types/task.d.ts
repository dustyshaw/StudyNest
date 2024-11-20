import { UnitTask } from "./UnitTask";

export interface Task {
    id: number,
    title: string,
    description: string,
    eventstart: Date,
    eventend: Date,
    duedate: Date,
    unitTasks: UnitTask,
    iscomplete: boolean,
}