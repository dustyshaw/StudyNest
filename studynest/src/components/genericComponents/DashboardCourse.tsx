import { FC } from "react";
import { Link } from "react-router-dom";
import starburst from "../../assets/starburst.svg";
import { courseEnrollDto } from "../../@types/Dtos/courseEnrollDto";

interface UserCourseListProps {
  userCourses: courseEnrollDto[] | undefined;
}

const UserCoursesList: FC<UserCourseListProps> = ({ userCourses }) => {
  return (
    <div className="flex flex-wrap justify-left w-full">
      {userCourses?.map((course, key) => (
        <Link
          to={`/course/${course.userCourseId}`}
          key={key}
          className="w-full sm:w-1/2 xl:w-1/3 p-2"
        >
          {" "}
          {/* Ensures half width on small and large screens */}
          <div className="flex flex-col md:flex-row m-3">
            <div className="h-full bg-lilac-300 text-sky-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg p-3">
              <img
                src={starburst}
                alt="Course image"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 p-2 rounded-b-lg w-full">
              <h2 className="text-xl text-gray-800">{course.course.title}</h2>
              <p className="text-gray-600">{course.ownerUsername}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserCoursesList;
