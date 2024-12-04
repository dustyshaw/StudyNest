import React from "react";
import { AddCourseRequest } from "../../@types/Requests/AddCourseRequest";
import TextInput from "../Inputs/TextInput";
import Button from "../LayoutComponents/Button";
import { CourseQueries } from "../../Queries/courseQueries";
import CancelButton from "../LayoutComponents/CancelButton";
import CheckboxInput from "../Inputs/SelectInput";

const AddCourseForm = () => {
  const [formData, setFormData] = React.useState<Partial<AddCourseRequest>>({});

  const { mutateAsync: addCourseAsync } = CourseQueries.useAddACourse();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value, type, checked } = e.currentTarget;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [id]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }

    console.log(formData)
  };

  const handleSubmission = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const newCourse: AddCourseRequest = {
      title: formData.title ?? "",
      description: formData.description ?? "",
      isPrivate: formData.isPrivate ?? true,
    };

    addCourseAsync(newCourse);
  };

  return (
    <form>
      <CheckboxInput
        id="isPrivate" // Set the correct ID for checkbox to bind properly
        value={formData.isPrivate ?? false} // Pass value (not checked)
        onChange={handleForm} // Handle checkbox change
        title={"Private (just for me to see)"}
      />
      <TextInput
        label="* Course Title"
        placeholder="Enter Course Title"
        error="Course Title is Required"
        required={true}
        id="title"
        onChange={handleForm}
        defaultValue={""}
        className={""}
        helperText={""}
      />
      <TextInput
        label="Course Description"
        placeholder="Enter Course Description"
        error="Course Description is Required"
        required={true}
        id="description"
        onChange={handleForm}
        defaultValue={""}
        className={""}
        helperText={""}
      />
      <Button onClick={handleSubmission}>
        <p>Add Course</p>
      </Button>
      <CancelButton></CancelButton>
    </form>
  );
};

export default AddCourseForm;
