import React from "react";
import { CourseUnit } from "../../@types/courseUnit";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

interface Props {
  unitCourse: CourseUnit;
}

const UnitTitleBox: React.FC<Props> = ({ unitCourse }) => {
  return (
    <div className="bg-gray-200 rounded-lg flex flex-row justify-between items-center">
      <p className="text-xl p-4">{unitCourse.unit != undefined && unitCourse.unit.title != undefined && unitCourse.unit.title}</p>
      <span className="m-4">
        <Link to={`/editunit/${unitCourse.unit != undefined && unitCourse.unit.id != undefined && unitCourse.unit.id}`}>
          <PencilSquareIcon className="w-5 h-5 text-gray-600" />
        </Link>
      </span>
    </div>
  );
};

export default UnitTitleBox;
