import React from "react";
import TextInput from "../Inputs/TextInput";
import { AddUnitRequest } from "../../@types/Requests/AddUnitRequest";
import Button from "../LayoutComponents/Button";
import { UnitQueries } from "../../Queries/unitQueries";
import { useParams } from "react-router";
import FormLayout from "../LayoutComponents/FormLayout";
import { Link } from "react-router-dom";
import SecondaryBtn from "../LayoutComponents/SecondaryBtn";

const AddUnit = () => {
  const { courseId } = useParams();
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
    const userCourseIdNum = Number(courseId);
    const request: AddUnitRequest = {
      title: formData.title ?? "Untitled",
      courseId: userCourseIdNum,
    };

    await addUnitAsync(request);
  };

  return (
    <FormLayout formTitle="Add Unit">
      <form className="p-5">
        <TextInput
          label="* Unit Title"
          placeholder="Enter Course Title"
          error="Unit Title is Required"
          required={true}
          id="title"
          onChange={handleForm}
          defaultValue={""}
          className={""}
          helperText={""}
        />
        <Button onClick={handleSubmission} className={"mt-6"}>
          <p>Add Unit</p>
        </Button>
        <Link to={"/"}>
          <SecondaryBtn>Cancel</SecondaryBtn>
        </Link>
      </form>
    </FormLayout>
  );
};

export default AddUnit;
