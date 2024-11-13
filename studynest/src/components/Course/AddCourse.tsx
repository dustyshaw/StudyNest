import { Link } from "react-router-dom";
import AddCourseForm from "./AddCourseForm";

const AddCourse = () => {
  return (
    <>
      <div className="m-8">
        <div className="text-lg mt-8 mb-6">
          <span className="text-lilac-400">
            <Link to={"/"}>Dashboard</Link>
          </span>{" "}
          &gt; Add Course
        </div>
        <AddCourseForm />
      </div>
    </>
  );
};

export default AddCourse;
