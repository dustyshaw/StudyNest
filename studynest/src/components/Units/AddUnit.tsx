import React from "react";
import TextInput from "../Inputs/TextInput";
import { AddUnitRequest } from "../../@types/Requests/AddUnitRequest";
import Button from "../genericComponents/Button";
import { UnitQueries } from "../../Queries/unitQueries";
import { useParams } from "react-router";

const AddUnit = () => {
  const courseId = useParams();
  const [formData, setFormData] = React.useState<Partial<AddUnitRequest>>({});
  const { mutateAsync: addUnitAsync } = UnitQueries.useAddUnit();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmission = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(courseId.courseId)
    const userCourseIdNum = Number(courseId.courseId)
    console.log(userCourseIdNum)
    const request: AddUnitRequest = {
      title: formData.title ?? "Untitled",
      courseId: userCourseIdNum,
    };

    console.log(request);

    await addUnitAsync(request);
  };

  return (
    <div>
      <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-4 m-8">
        <form className="p-5">
          <TextInput
            label="* Unit Title"
            placeholder="Enter Course Title"
            error="Unit Title is Required"
            required={true}
            id="title"
            onChange={handleForm}
            defaultValue={""}
          />
          <Button onClick={handleSubmission}>
            <p>Add Unit</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddUnit;
