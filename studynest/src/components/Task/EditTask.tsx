import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import TextInput from "../Inputs/TextInput";
import React, { useEffect, useState } from "react";
import { UpdateTaskRequest } from "../../@types/Requests/UpdateTaskRequest";
import SecondaryBtn from "../LayoutComponents/SecondaryBtn";
import LoadingComponent from "../LoadingComponent";

const EditTask = () => {
  const { taskId } = useParams();
  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));
  const [formData, setFormData] = React.useState<Partial<UpdateTaskRequest>>(
    {}
  );
  const { mutateAsync: updateTaskAsync, isPending } =
    TaskQueries.useUpdateTask();

  const [duedate, setDuedate] = useState<string>(
    task?.duedate ? task.duedate.toString().slice(0, 16) : ""
  );

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        taskid: task.id,
        duedate: duedate ? new Date(duedate) : new Date(),
      });

      setDuedate(task.duedate ? task.duedate.toString().slice(0, 16) : "");
    }
  }, [task, duedate]);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });

    if (e.currentTarget.id === "duedate") {
      setDuedate(e.currentTarget.value);
    }
  };

  const handleSubmission = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const taskIdNumber = Number(taskId);

    const request: UpdateTaskRequest = {
      title: formData.title ?? "",
      description: formData.description ?? "",
      taskid: taskIdNumber,
      duedate: duedate ? duedate : new Date(),
      iscomplete: false,
    };
    await updateTaskAsync(request);
  };

  if (isPending) {
    return <LoadingComponent />;
  }

  return (
    <div className="mt-8">
      <p>Edit Task {taskId}</p>
      <form className="p-5">
        <TextInput
          label="* Task Title"
          placeholder="Enter Task Title"
          error="Task Title is Required"
          required={true}
          id="title"
          defaultValue={task?.title || ""}
          onChange={handleForm}
        />
        <TextInput
          label="Task Description"
          placeholder="Enter Task Description"
          error="Task Description is Required"
          required={true}
          id="description"
          defaultValue={task?.description || ""}
          onChange={handleForm}
        />
        <p className="mt-6">Due Date</p>
        <input
          aria-label="Due Date"
          type="datetime-local"
          id="duedate"
          value={formData.duedate ? formData.duedate.toString() : ""}
          onChange={handleForm}
        />
        <SecondaryBtn onClick={handleSubmission}>
          <p>Edit Task</p>
        </SecondaryBtn>
      </form>
    </div>
  );
};

export default EditTask;
