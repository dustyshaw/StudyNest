export interface AddTaskRequest {
    unitid: number,
    title: string,
    description: string,
    eventstart: Date,
    eventend: Date,
    duedate: Date,
    iscomplete: boolean
}