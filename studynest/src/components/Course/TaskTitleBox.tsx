import React from "react";
import { UnitTask } from "../../@types/UnitTask";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import formatDate from "../../services/DateFormatter";

interface Props {
  task: UnitTask;
}

const TaskTitleBox: React.FC<Props> = ({ task }) => {
  return (
    <div
      className={`px-3 border-b-2 text-lg p-3 border-l-8 rounded-lg flex flex-row ${
        task.task.iscomplete
          ? "border-l-lime-400 text-gray-600"
          : "border-l-black"
      } my-2 ml-8`}
    >
      {task.task?.iscomplete && (
        <CheckCircleIcon className="w-6 me-2 text-lime-600" />
      )}
      <span className="flex flex-row justify-between w-full">
        <p>{task.task.title}</p>
        <p className="text-sm">
          due {task.task.duedate && formatDate(task.task.duedate)}
        </p>
      </span>
    </div>
  );
};

export default TaskTitleBox;
