import React from "react";
import { AddTaskRequest } from "../../@types/Requests/AddTaskRequest";
import { TaskQueries } from "../../Queries/taskQueries";
import TextInput from "../Inputs/TextInput";
import Button from "../LayoutComponents/Button";
import { useParams } from "react-router";
import DatePicker from "../Inputs/DatePicker";

const AddTask = () => {
  const { courseUnitId } = useParams();
  const [formData, setFormData] = React.useState<Partial<AddTaskRequest>>({});
  const { mutateAsync: addTaskAsync } = TaskQueries.useAddTask();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;

    // If it's a date input, convert to ISO string and format it to match the required format
    if (id === "eventstart" || id === "eventend" || id === "duedate") {
      const date = new Date(value);
      // Format the date as 'yyyy-MM-ddTHH:mm'
      const formattedDate = date.toISOString().slice(0, 16); // Removes seconds and timezone
      setFormData({
        ...formData,
        [id]: formattedDate, // Store the formatted date string
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  // const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setFormData({
  //     ...formData,
  //     [e.currentTarget.id]: e.currentTarget.value,
  //   });
  // };

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
    <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-4 m-8">
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

        <Button onClick={handleSubmission}>
          <p>Add Task</p>
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
