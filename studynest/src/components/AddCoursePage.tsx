import React from "react";
import TextInput from "./Inputs/TextInput";
import { AddCourseRequest } from "../@types/Requests/AddCourseRequest";
import { CourseQueries } from "../Queries/courseQueries";

const AddCoursePage = () => {
  const [formData, setFormData] = React.useState<Partial<AddCourseRequest>>({});

  const { mutateAsync: addCourseAsync } = CourseQueries.useAddACourse();

  //   export interface AddCourseEnrollRequest {
  //     title: number,
  //     description: number,
  // }

  //   const handleForm = (
  //     e: React.FormEvent<HTMLInputElement>,
  //     newVal: string
  //   ): void => {
  //     setFormData({
  //       ...formData,
  //       [e.currentTarget.id]: newVal,
  //     });
  //   };

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
    console.log("Form Data", formData);

    const newCourse: AddCourseRequest = {
        title: formData.title ?? "",
        description: formData.description ?? ""
    }

    addCourseAsync(newCourse)

  };

  return (
    <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2">
      <form className="p-5">
        <TextInput
          label="* Course Title"
          placeholder="Enter Course Title"
          error="Course Title is Required"
          required={true}
          id="title"
          onChange={handleForm}
        />
        <TextInput
          label="Course Description"
          placeholder="Enter Course Description"
          error="Course Description is Required"
          required={true}
          id="description"
          onChange={handleForm}
        />
        {/* <Button onClick={(e) => handleSubmission(e)}>
          <p>Add Course</p>
        </Button> */}
        <button onClick={(e) => handleSubmission(e)}>Add Course</button>
      </form>
    </div>
  );
};

export default AddCoursePage;
