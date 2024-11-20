export interface AddTaskRequest {
    title: string,
    description: string,
    eventstart: Date,
    eventend: Date,
    duedate: Date,
    iscomplete: boolean
}