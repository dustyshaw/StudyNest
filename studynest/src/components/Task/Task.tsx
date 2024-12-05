import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import { Link } from "react-router-dom";
import formatDate from "../../services/DateFormatter";
import "./DatePicker.modules.css";
import LogHours from "./LogHours";
import SecondaryBtn from "../LayoutComponents/SecondaryBtn";
import CompleteTask from "./CompleteTask";
import BackButton from "../LayoutComponents/BackButton";
import { PencilIcon } from "@heroicons/react/24/solid";

const ViewTask = () => {
  const { taskId } = useParams();
  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  if (!task) {
    return <p>No Task...</p>;
  }

  return (
    <div className="m-8">
      <BackButton />
      <div className="flex md:flex-row flex-col justify-between">
        <div>
          <h1 className="text-2xl">{task.title}</h1>
          <p>Due at {formatDate(task.duedate)}</p>
        </div>
        <CompleteTask task={task} />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full md:mx-4 md:mt-0 md:mb-0 mt-3 mb-3 p-8 bg-gray-50 rounded-lg md:order-2 order-1">
          <p className="mb-3">
            <span className="font-semibold">{task.hours} hrs</span> and{" "}
            <span className="font-semibold">{task.minutes} min</span> spent on
            this task!
          </p>
          <LogHours taskId={task.id} />
        </div>
        <div className="bg-gray-50 rounded-lg p-8 w-full md:order-1 order-2">
          {task?.description}
        </div>
      </div>
      <Link to={`/task/edit/${taskId}`}>
        <SecondaryBtn className="flex flex-row">
          <PencilIcon className="w-5" />
          Edit Task
        </SecondaryBtn>
      </Link>
    </div>
  );
};

export default ViewTask;
