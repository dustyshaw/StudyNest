import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TaskService } from "../services/taskService";
import { AddTaskRequest } from "../@types/Requests/AddTaskRequest";
import toast from "react-hot-toast";
import { UpdateTaskRequest } from "../@types/Requests/UpdateTaskRequest";

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
        queryClient.invalidateQueries({ queryKey: ["tasks", "addtask"] });
        toast.success("Successfully Added Task")
      },
    });
  },
  useUpdateTask: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (request: UpdateTaskRequest) => TaskService.UpdateTask(request),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks", "updatetask"] });
        toast.success("Successfully Updated Task")
      },
    });
  },
};
