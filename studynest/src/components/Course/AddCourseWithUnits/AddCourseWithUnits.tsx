import React, { useEffect, useRef } from "react";
import { AddCourseRequest } from "../../../@types/Requests/AddCourseRequest";
import TextInput from "../../Inputs/TextInput";
import Button from "../../LayoutComponents/Button";
import { CourseQueries } from "../../../Queries/courseQueries";
import { CourseWithUnitsRequest } from "../../../@types/Requests/CourseWithUnitsRequest";
import toast from "react-hot-toast";

const AddCourseWithUnitsForm = () => {
  const [formData, setFormData] = React.useState<
    Partial<CourseWithUnitsRequest>
  >({});
  const { mutateAsync: addCourseAsync } = CourseQueries.useAddCourseWithUnits();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const targetRefs = {
    titleRef: useRef<HTMLDivElement | null>(null),
    descriptionRef: useRef<HTMLDivElement | null>(null),
    unitsRef: useRef<HTMLDivElement | null>(null),
  };

  const scrollToInput = (inputRef: React.RefObject<HTMLDivElement | null>) => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmission = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const newCourse: AddCourseRequest = {
      title: formData.course.title,
      description: formData.course.description,
    };

    const newCourseWithUnits: CourseWithUnitsRequest = {
      course: newCourse,
      enrollRequest: undefined,
      units: [],
    };

    addCourseAsync(newCourseWithUnits);
  };

  return (
    <div className="p-8">
      <form className="p-5">
        <div
          ref={targetRefs.titleRef}
          className="h-screen flex justify-center items-center"
        >
          <div className="md:w-1/2">
            <TextInput
              label="Course Title"
              placeholder="Enter Course Title"
              error="Course Title is Required"
              required={true}
              id="title"
              onChange={handleForm}
              defaultValue={""}
              className={"shadow-inner text-xl px-3 py-2 w-full bg-gray-100"}
              helperText={"Anything you want to learn! "}
            />
            <div className="w-full flex flex-row justify-end">
              <p
                className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
                onClick={() => {
                  if (
                    formData.course.title &&
                    formData.course.title?.length > 0
                  ) {
                    scrollToInput(targetRefs.descriptionRef);
                  } else {
                    toast.error("Title cannot be empty");
                  }
                }}
              >
                Next
              </p>
            </div>
          </div>
        </div>

        <div
          ref={targetRefs.descriptionRef}
          className="h-screen flex justify-center items-center"
        >
          <div className="md:w-1/2">
            <TextInput
              label="Course Description"
              placeholder="Enter Course Description"
              error="Course Description is Required"
              required={true}
              id="description"
              onChange={handleForm}
              defaultValue={""}
              className={"shadow-inner w-full p-2"}
              helperText={""}
            />
            <div className="w-full flex flex-row justify-between">
              <p
                className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
                onClick={() => {
                  scrollToInput(targetRefs.titleRef);
                }}
              >
                Back
              </p>
              <p
                className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
                onClick={() => {
                  if (
                    formData.course.description &&
                    formData.course.description?.length > 0
                  ) {
                    scrollToInput(targetRefs.unitsRef);
                  }
                }}
              >
                Next
              </p>
            </div>
          </div>
        </div>

        <div
          ref={targetRefs.unitsRef}
          className="h-screen flex justify-center items-center"
        >
          <div className="md:w-1/2">
            <p className="text-2xl">Add Units</p>
            {/* <AddUnitsToCourse handleForm={handleForm} /> */}
            <p>Not implemented yet...</p>
            <div className="w-full flex flex-row justify-between">
              <p
                className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
                onClick={() => {
                  scrollToInput(targetRefs.titleRef);
                }}
              >
                Back
              </p>
              <span
                className="cursor-pointer font-semibold text-lilac-400 mt-2 underline underline-offset-1 hover:scale-105"
                onClick={handleSubmission}
              >
                Create Course!
              </span>
            </div>
          </div>
        </div>
        <Button onClick={handleSubmission}>
          <p>Add Course</p>
        </Button>
      </form>
    </div>
  );
};

export default AddCourseWithUnitsForm;
