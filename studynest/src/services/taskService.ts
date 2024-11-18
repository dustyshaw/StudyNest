import axios from "axios";
import { Task } from "../@types/task";

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
};
