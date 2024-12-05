import { useParams } from "react-router";
import { CourseQueries } from "../../Queries/courseQueries";
import TextInput from "../Inputs/TextInput";
import React, { useEffect } from "react";
import { Course } from "../../@types/course";
import { EditCourseRequest } from "../../@types/Requests/EditCourseRequest";
import Button from "../LayoutComponents/Button";
import CancelButton from "../LayoutComponents/CancelButton";
import FormLayout from "../LayoutComponents/FormLayout";

const EditCourse = () => {
  const { courseId } = useParams();
  const { data: course } = CourseQueries.useGetCourseById(Number(courseId));
  const [formData, setFormData] = React.useState<Partial<Course>>({});
  const { mutateAsync: editCourseAsync } = CourseQueries.useEditCourse();

  useEffect(() => {
    if (course) setFormData(course);
  }, [course]);

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

    if (!course) {
      throw new Error("No course found");
    }

    const userCourseIdNumber = Number(courseId);

    const newCourse: EditCourseRequest = {
      title: formData.title ?? "",
      description: formData.description ?? "",
      courseId: userCourseIdNumber ?? 0,
    };
    editCourseAsync(newCourse);
  };

  return (
    <>
      <FormLayout formTitle="Edit Course">
        <form>
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
          <Button onClick={handleSubmission} className="mt-6">
            <p>Save Changes</p>
          </Button>
          <CancelButton></CancelButton>
        </form>
      </FormLayout>
    </>
  );
};

export default EditCourse;
