import { useParams } from "react-router";
import { CourseQueries } from "../../Queries/courseQueries";
import TextInput from "../Inputs/TextInput";
import React, { useEffect } from "react";
import { Course } from "../../@types/course";
import { EditCourseRequest } from "../../@types/Requests/EditCourseRequest";
import Button from "../LayoutComponents/Button";

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
      <div>Edit Course</div>
      <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-4">
        <form className="p-5">
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
            <p>Edit Course</p>
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditCourse;
