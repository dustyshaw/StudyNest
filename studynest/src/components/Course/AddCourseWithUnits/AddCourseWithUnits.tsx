import React, { useEffect, useRef } from "react";
import { AddCourseRequest } from "../../../@types/Requests/AddCourseRequest";
import TextInput from "../../Inputs/TextInput";
import Button from "../../genericComponents/Button";
import { CourseQueries } from "../../../Queries/courseQueries";
import { CourseWithUnitsAndTasksRequest } from "../../../@types/Requests/CourseWithUnitsRequest";
import toast from "react-hot-toast";
import AddCourseBtn from "../AddCourseBtn";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

const AddCourseWithUnitsForm = () => {
  const [formData, setFormData] = React.useState<Partial<AddCourseRequest>>({});
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
    console.log("Scrolling");
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

    const newCourse: CourseWithUnitsAndTasksRequest = {
      course: undefined,
      enrollRequest: undefined,
      units: [],
    };
    addCourseAsync(newCourse);
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
                  if (formData.title && formData.title?.length > 0) {
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
                    formData.description &&
                    formData.description?.length > 0
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
            <TextInput
              label="Unit Title"
              placeholder="Enter Unit Title"
              error="Unit Title is Required"
              required={true}
              id="title"
              onChange={handleForm}
              defaultValue={""}
              className={"shadow-inner text-xl px-3 py-2 w-full bg-gray-100"}
              helperText={""}
            />
            <div className="flex flex-col items-center group relative">
              <small className="text-xs mb-0 p-0 m-0 opacity-0 translate-y-6 scale-50 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
                Add task
              </small>
              <div className="flex flex-row align-middle items-center w-full m-0">
                <div className="w-1/2 h-[1px] ms-8 bg-gray-400" />
                <PlusCircleIcon className="size-10 text-gray-400 " />
                <div className="w-1/2 h-[1px] me-8 bg-gray-400" />
              </div>
            </div>

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
                    formData.description &&
                    formData.description?.length > 0
                  ) {
                    scrollToInput(targetRefs.unitsRef);
                  }
                }}
              >
                Create Course!
              </p>
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
