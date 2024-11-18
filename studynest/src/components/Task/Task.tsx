import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";

const ViewTask = () => {
  const { taskId } = useParams();
  console.log("Task Id: ", taskId);

  const { data } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  console.log("Task: ", data)
  return (
    <div>
      <p className="mb-3">Dashboard / Unit / Unit Task</p>
      ViewTask
    </div>
  );
};

export default ViewTask;
