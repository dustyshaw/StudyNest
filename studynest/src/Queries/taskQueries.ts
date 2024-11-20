import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TaskService } from "../services/taskService";
import { AddTaskRequest } from "../@types/Requests/AddTaskRequest";
import toast from "react-hot-toast";

export const TaskQueries = {
  GetTasksByTaskIdQuery: (taskId: number) => {
    return useQuery({
      queryKey: ["tasks"],
      queryFn: () => TaskService.GetTaskByTaskId(taskId),
    });
  },
  useAddTask: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (addTaskRequest: AddTaskRequest) => TaskService.AddTask(addTaskRequest),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        toast.success("Successfully Added Task")
      },
    });
  },
};
