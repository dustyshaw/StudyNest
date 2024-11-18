import { useQuery } from "@tanstack/react-query";
import { TaskService } from "../services/taskService";

export const TaskQueries = {
  GetTasksByTaskIdQuery: (taskId: number) => {
    return useQuery({
      queryKey: ["tasks"],
      queryFn: () => TaskService.GetTaskByTaskId(taskId),
    });
  },
};
