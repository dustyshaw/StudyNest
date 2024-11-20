import React from 'react'
import { AddTaskRequest } from '../../@types/Requests/AddTaskRequest';
import { TaskQueries } from '../../Queries/taskQueries';
import TextInput from '../Inputs/TextInput';
import Button from '../Inputs/Button';

const AddTask = () => {
    const [formData, setFormData] = React.useState<Partial<AddTaskRequest>>({});
    const { mutateAsync: addTaskAsync } = TaskQueries.useAddTask();
  
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setFormData({
        ...formData,
        [e.currentTarget.id]: e.currentTarget.value,
      });
    };
  
    const handleSubmission = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
      e.stopPropagation();

    //   const newCourse: AddTaskRequest = {
    //       title: formData.title ?? '',
    //       description: '',
    //       eventstart: Date.now() ?? undefined,
    //       eventend: undefined,
    //       duedate: undefined,
    //       iscomplete: false
    //   };
  
    //   const newCourse: AddTaskRequest = {
    //     title: formData.title ?? "",
    //     description: formData.description ?? "",
    //   };
    //   addTaskAsync(newCourse);
    };
  
    return (
      <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-4">
        <form className="p-5">
          <TextInput
            label="* Task Title"
            placeholder="Enter Course Title"
            error="Task Title is Required"
            required={true}
            id="title"
            onChange={handleForm}
          />
          <TextInput
            label="Task Description"
            placeholder="Enter Task Description"
            error="Task Description is Required"
            required={true}
            id="description"
            onChange={handleForm}
          />
          <Button onClick={handleSubmission}>
            <p>Add Course</p>
          </Button>
        </form>
      </div>
    );
}

export default AddTask