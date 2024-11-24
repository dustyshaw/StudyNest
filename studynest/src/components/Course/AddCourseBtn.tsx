import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const AddCourseBtn: React.FC<{ courseUnitId: number }> = ({ courseUnitId }) =>  {
  return (
    <Link to={`/dashboard/module/addTask/${courseUnitId}`}>
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
    </Link>
  );
};

export default AddCourseBtn;
