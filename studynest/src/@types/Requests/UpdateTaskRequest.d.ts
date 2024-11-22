export interface UpdateTaskRequest {
    taskid: number,
    title: string,
    description: string,
    duedate: string | Date,
}


// public string Title { get; set; } = null!;

// public string? Description { get; set; }

// public DateTime? Duedate { get; set; }