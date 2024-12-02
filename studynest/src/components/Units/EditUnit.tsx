import React from "react";
import TextInput from "../Inputs/TextInput";
import Button from "../LayoutComponents/Button";
import { UnitQueries } from "../../Queries/unitQueries";
import { useParams } from "react-router";
import { EditUnitRequest } from "../../@types/Requests/EditUnitRequest";

const EditUnit = () => {
  const unitId = useParams();
  const [formData, setFormData] = React.useState<Partial<EditUnitRequest>>({});
  const { mutateAsync: editUnitAsync } = UnitQueries.useEditUnit();

  console.log("UNIT ID", unitId.unitId)

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

    console.log("BLAHH", unitIdNum)

    const request: EditUnitRequest = {
        title: formData.title ?? "Untitled",
        unitId: unitIdNum
    };

    await editUnitAsync(request);
  };

  return (
    <div>
      <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-4 m-8">
        <form className="p-5">
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
          <Button onClick={handleSubmission}>
            <p>Edit Unit</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditUnit;
