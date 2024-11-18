import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import Button from "../Inputs/Button";

const ViewTask = () => {
  const { taskId } = useParams();
  console.log("Task Id: ", taskId);

  const { data } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  console.log("Task: ", data);
  return (
    <div>
      <p className="mb-3 m-8 text-gray-600 font-semibold">Dashboard / Unit / Unit Task</p>
      <div className="m-8">
        <h1 className="text-2xl">{data?.title}</h1>
        <div className="bg-gray-200 rounded-lg p-8">
            {data?.description}
        </div>
        <Button
          onClick={() => {
            console.log("Log Time");
          }}
        >
          Log Hours
        </Button>
      </div>
    </div>
  );
};

export default ViewTask;
