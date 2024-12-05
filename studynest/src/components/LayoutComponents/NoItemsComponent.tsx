import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import starburst from "../../assets/starburst.svg";

interface Props {
  linkToAdd: string;
  itemName: string;
  supportingText: string;
}

const NoItemsComponent: React.FC<Props> = ({ linkToAdd, itemName, supportingText }) => {
  return (
    <div className="w-100 h-full flex items-center justify-center flex-row">
      <img src={starburst} alt="Course image" className="w-18" />
      <div className="ms-6">
        <div className="text-2xl font-semibold mb-8">
          {supportingText}
        </div>
        <Link to={`${linkToAdd}`}>
          <Button>Add {itemName}</Button>
        </Link>
      </div>
    </div>
  );
};

export default NoItemsComponent;
