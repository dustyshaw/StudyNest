import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import TextInput from "../Inputs/TextInput";
import React, { useEffect, useState } from "react";
import { UpdateTaskRequest } from "../../@types/Requests/UpdateTaskRequest";
import LoadingComponent from "../LoadingComponent";
import FormLayout from "../LayoutComponents/FormLayout";
import Button from "../LayoutComponents/Button";
import DatePicker from "../Inputs/DatePicker";

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
    console.log("update task request", request);
    await updateTaskAsync(request);
  };

  if (isPending) {
    return <LoadingComponent />;
  }

  return (
    <FormLayout formTitle="Edit Task">
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
        <DatePicker
          id={"duedate"}
          label={"Due Date"}
          value={formData.duedate?.toString()}
          onChange={handleForm}
        />
        {/* <p className="mt-6">Due Date</p>
        <input
          aria-label="Due Date"
          type="datetime-local"
          id="duedate"
          value={formData.duedate ? formData.duedate.toString() : ""}
          onChange={handleForm}
        /> */}
        <br />
        <Button onClick={handleSubmission} className="mt-5">
          <p>Save Changes</p>
        </Button>
      </form>
    </FormLayout>
  );
};

export default EditTask;
