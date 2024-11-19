import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import Button from "../Inputs/Button";
import { Link } from "react-router-dom";

const ViewTask = () => {
  const { taskId } = useParams();

  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  return (
    <div>
      <p className="mb-3 m-8 text-gray-600 font-semibold">
        Dashboard / Unit / {task?.title}
      </p>
      <div className="m-8">
        <h1 className="text-2xl">{task?.title}</h1>
        <div className="bg-gray-200 rounded-lg p-8">{task?.description}</div>
        <Button
          onClick={() => {
            console.log("Log Time");
          }}
        >
          Log Hours
        </Button>
        <Link to={`/task/edit/${taskId}`}>
        <Button
          onClick={() => {
            console.log(true);
          }}
          >
          Edit Task
        </Button>
          </Link>
      </div>
    </div>
  );
};

export default ViewTask;
