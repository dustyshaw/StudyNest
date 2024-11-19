import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";

const EditTask = () => {
  const { taskId } = useParams();

  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  console.log(task);

  return (
    <div>
      <p>Edit Task {taskId}</p>
      <form></form>
    </div>
  );
};

export default EditTask;
