import React from "react";
import { AddCourseRequest } from "../../@types/Requests/AddCourseRequest";
import TextInput from "../Inputs/TextInput";
import Button from "../genericComponents/Button";
import { CourseQueries } from "../../Queries/courseQueries";

const AddCourseForm = () => {
  const [formData, setFormData] = React.useState<Partial<AddCourseRequest>>({});
  const { mutateAsync: addCourseAsync } = CourseQueries.useAddACourse();

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

    const newCourse: AddCourseRequest = {
      title: formData.title ?? "",
      description: formData.description ?? "",
    };
    addCourseAsync(newCourse);
  };

  return (
    <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-4">
      <form className="p-5">
        <TextInput
          label="* Course Title"
          placeholder="Enter Course Title"
          error="Course Title is Required"
          required={true}
          id="title"
          onChange={handleForm} defaultValue={""}        />
        <TextInput
          label="Course Description"
          placeholder="Enter Course Description"
          error="Course Description is Required"
          required={true}
          id="description"
          onChange={handleForm} defaultValue={""}        />
        <Button onClick={handleSubmission}>
          <p>Add Course</p>
        </Button>
      </form>
    </div>
  );
};

export default AddCourseForm;
