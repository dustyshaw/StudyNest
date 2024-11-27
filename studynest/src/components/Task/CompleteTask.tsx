import React, { FC } from "react";
import Button from "../LayoutComponents/Button";
import { TaskQueries } from "../../Queries/taskQueries";
import { Task } from "../../@types/task";
import { UpdateTaskRequest } from "../../@types/Requests/UpdateTaskRequest";

const CompleteTask: FC<{ task: Task }> = ({ task }) => {
  const { mutateAsync: updateTaskAsync } = TaskQueries.useUpdateTask();

  const handleSubmission = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const request: UpdateTaskRequest = {
      taskid: task.id,
      title: task.title,
      description: task.description ?? "",
      duedate: task.duedate ? task.duedate : new Date(),
      iscomplete: !task.iscomplete,
    };
    await updateTaskAsync(request);
  };

  return (
    <div>
      <Button onClick={handleSubmission}>
        {task.iscomplete ? "Mark as Incomplete" : "Complete this task"}
      </Button>
    </div>
  );
};

export default CompleteTask;
