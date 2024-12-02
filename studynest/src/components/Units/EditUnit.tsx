import React from "react";
import TextInput from "../Inputs/TextInput";
import Button from "../LayoutComponents/Button";
import { UnitQueries } from "../../Queries/unitQueries";
import { useParams } from "react-router";
import { EditUnitRequest } from "../../@types/Requests/EditUnitRequest";
import FormLayout from "../LayoutComponents/FormLayout";
import CancelButton from "../LayoutComponents/CancelButton";

const EditUnit = () => {
  const unitId = useParams();
  const [formData, setFormData] = React.useState<Partial<EditUnitRequest>>({});
  const { mutateAsync: editUnitAsync } = UnitQueries.useEditUnit();

  console.log("UNIT ID", unitId.unitId);

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

    const unitIdNum = Number(unitId.unitId);

    console.log("BLAHH", unitIdNum);

    const request: EditUnitRequest = {
      title: formData.title ?? "Untitled",
      unitId: unitIdNum,
    };

    await editUnitAsync(request);
  };

  return (
    <FormLayout formTitle="Edit Unit">
      <form>
        <TextInput
          label="* Unit Title"
          placeholder="Enter Unit Title"
          error="Unit Title is Required"
          required={true}
          id="title"
          onChange={handleForm}
          defaultValue={""}
          className={""}
          helperText={""}
        />
        <Button onClick={handleSubmission} className={"mt-6"}>
          <p>Edit Unit</p>
        </Button>
        <CancelButton></CancelButton>
      </form>
    </FormLayout>
  );
};

export default EditUnit;
