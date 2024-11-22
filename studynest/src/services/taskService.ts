import axios from "axios";
import { Task } from "../@types/task";
import { AddTaskRequest } from "../@types/Requests/AddTaskRequest";
import { UpdateTaskRequest } from "../@types/Requests/UpdateTaskRequest";
import { UpdateTaskTimeRequest } from "../@types/Requests/UpdateTaskTimeRequest";

export const TaskService = {
  GetTaskByTaskId: async (taskId: number) => {
    try {
      const response = await axios.get<Task>(
        "https://localhost:7021/task/gettaskbytaskid",
        {
          params: {
            taskId: taskId,
          },
        }
      );
      return response.data;
    } catch {
      console.error("Couldn't get enrolled courses");
    }
  },
  AddTask: async (request: AddTaskRequest) => {
    try {
      const response = await axios.post<Task>(
        "https://localhost:7021/task/addtask",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Failed to add Task");
    }
  },
  UpdateTaskTime: async (request: UpdateTaskTimeRequest) => {
    try {
      const response = await axios.patch<Task>(
        "https://localhost:7021/task/updatetasktime",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Failed to update Task");
    }
  },
  UpdateTask: async (request: UpdateTaskRequest) => {
    try {
      const response = await axios.patch<Task>(
        "https://localhost:7021/task/updatetask",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch {
      console.error("Failed to update Task");
    }
  },
};
