import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import { Link } from "react-router-dom";
import formatDate from "../../services/DateFormatter";
import "./DatePicker.modules.css";
import LogHours from "./LogHours";
import SecondaryBtn from "../LayoutComponents/SecondaryBtn";
import CompleteTask from "./CompleteTask";
import BackButton from "../LayoutComponents/BackButton";

const ViewTask = () => {
  const { taskId } = useParams();
  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  if (!task) {
    return <p>No Task...</p>;
  }

  console.log("tasl ", task)

  return (
    <div className="m-8">
      <BackButton />
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl">{task.title}</h1>
          <p>Due at {formatDate(task.duedate)}</p>
        </div>
        <CompleteTask task={task} />
      </div>
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
  );
};

export default ViewTask;
