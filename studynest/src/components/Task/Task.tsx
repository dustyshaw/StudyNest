import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import { Link } from "react-router-dom";
import formatDate from "../DateFormatter";
import "./DatePicker.modules.css";
import LogHours from "./LogHours";
import SecondaryBtn from "../genericComponents/SecondaryBtn";
import CompleteTask from "./CompleteTask";

const ViewTask = () => {
  const { taskId } = useParams();
  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  if (!task) {
    return <p>No Task...</p>;
  }

  return (
    <div className="">
      <p className="mb-3 m-8 text-gray-600 font-semibold">
        <Link to={"/"}>Dashboard</Link> / Unit / {task.title}
      </p>
      <div className="m-8">
        <h1 className="text-2xl">{task.title}</h1>
        <p>Due at {formatDate(task.duedate)}</p>
        <CompleteTask task={task} />
        <div className="flex flex-row">
          <div className=" bg-gray-50 rounded-lg p-8 w-full">
            {task?.description}
          </div>
          <div className="w-1/3 mx-4 p-8 bg-gray-50 rounded-lg">
            <p>
              {task.hours} Hrs and {task.minutes} min spent on this task!
            </p>
            <LogHours taskId={task.id} />
          </div>
        </div>
        <Link to={`/task/edit/${taskId}`}>
          <SecondaryBtn>Edit Task</SecondaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default ViewTask;
