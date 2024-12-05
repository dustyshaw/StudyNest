import React from "react";
import { AddTaskRequest } from "../../@types/Requests/AddTaskRequest";
import { TaskQueries } from "../../Queries/taskQueries";
import TextInput from "../Inputs/TextInput";
import Button from "../LayoutComponents/Button";
import { useParams } from "react-router";
import DatePicker from "../Inputs/DatePicker";
import FormLayout from "../LayoutComponents/FormLayout";

const AddTask = () => {
  const { courseUnitId } = useParams();
  const [formData, setFormData] = React.useState<Partial<AddTaskRequest>>({});
  const { mutateAsync: addTaskAsync } = TaskQueries.useAddTask();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;

    if (id === "eventstart" || id === "eventend" || id === "duedate") {
      const date = new Date(value);
      const formattedDate = date.toISOString().slice(0, 16);
      setFormData({
        ...formData,
        [id]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmission = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const courseUnitIdNum = Number(courseUnitId);

    const newTask: AddTaskRequest = {
      unitid: courseUnitIdNum ?? 0,
      title: formData.title ?? "",
      description: formData.description ?? "",
      eventstart:
        formData.eventstart instanceof Date ? formData.eventstart : new Date(),
      eventend:
        formData.eventend instanceof Date ? formData.eventend : new Date(),
      duedate: formData.duedate instanceof Date ? formData.duedate : new Date(),
      iscomplete: false,
    };

    addTaskAsync(newTask);
  };

  return (
    <FormLayout formTitle="Task Title">
      <form className="p-5">
        <TextInput
          label="* Task Title"
          placeholder="Enter Course Title"
          error="Task Title is Required"
          required={true}
          id="title"
          onChange={handleForm}
          defaultValue={""}
          className={""}
          helperText={""}
        />
        <TextInput
          label="Task Description"
          placeholder="Enter Task Description"
          error="Task Description is Required"
          required={true}
          id="description"
          onChange={handleForm}
          defaultValue={""}
          className={""}
          helperText={""}
        />

        <DatePicker
          id={"duedate"}
          label={"Due Date"}
          value={formData.duedate?.toString()}
          onChange={handleForm}
        />

        <Button onClick={handleSubmission} className="mt-3">
          <p>Add Task</p>
        </Button>
      </form>
    </FormLayout>
  );
};

export default AddTask;
