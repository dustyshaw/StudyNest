import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import Button from "../Inputs/Button";
import { Link } from "react-router-dom";

const ViewTask = () => {
  const { taskId } = useParams();

  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));

  return (
    <div className="bg-gray-200">
      <p className="mb-3 m-8 text-gray-600 font-semibold">
        Dashboard / Unit / {task?.title}
      </p>
      <div className="m-8">
        <h1 className="text-2xl">{task?.title}</h1>
        <div className="flex flex-row">
          <div className="bg-white rounded-lg p-8 w-full">
            {task?.description}
          </div>
          <div className="w-1/3 mx-2 p-2 bg-gray-50 rounded-lg">
            <div className="">
              <h2 className="text-xl">Log Hours</h2>
              <div>
                <form>
                  <p>Hours</p>
                  <input type="number" className="rounded border border-gray-200 p-2" />
                  <p>Minutes</p>
                  <input type="number" />
                </form>
                <Button
                  onClick={() => {
                    console.log("Log Time");
                  }}
                >
                  Log Hours
                </Button>
              </div>
            </div>
          </div>
        </div>

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
