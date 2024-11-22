import { useParams } from "react-router";
import { TaskQueries } from "../../Queries/taskQueries";
import TextInput from "../Inputs/TextInput";
import Button from "../Inputs/Button";
import React, { useEffect, useState } from "react";
import { UpdateTaskRequest } from "../../@types/Requests/UpdateTaskRequest";

const EditTask = () => {
  const { taskId } = useParams();
  const { data: task } = TaskQueries.GetTasksByTaskIdQuery(Number(taskId));
  const [formData, setFormData] = React.useState<Partial<UpdateTaskRequest>>(
    { }
  );
  const { mutateAsync: updateTaskAsync } = TaskQueries.useUpdateTask();

  const [duedate, setDuedate] = useState<string>(task?.duedate ? task.duedate.toString().slice(0, 16) : "");


  useEffect(() => {
    // Once task data is available, set it in formData state
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

  const handleSubmission = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      
      const taskIdNumber = Number(taskId)
      console.log(duedate)

      const newCourse: UpdateTaskRequest = {
        title: formData.title ?? "",
        description: formData.description ?? "",
        taskid: taskIdNumber,
        duedate: duedate ? duedate : new Date(),
      };
      console.log("New Due Date: ",  newCourse.duedate)
      await updateTaskAsync(newCourse);
    };

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
          defaultValue={task?.description || ''}
          onChange={handleForm}
        />
        <p className="mt-6">Due Date</p>
        <div className="">
          <input
            aria-label="Due Date"
            type="datetime-local"
            id="duedate"
            value={formData.duedate ? formData.duedate.toString() : ""}
            onChange={handleForm}
          />
        </div>
        <Button onClick={handleSubmission}>
          <p>Edit Task</p>
        </Button>
      </form>
    </div>
  );
};

export default EditTask;
