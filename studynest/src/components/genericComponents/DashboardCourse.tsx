import { FC } from "react";
import { Link } from "react-router-dom"; 
import starburst from "../../assets/starburst.svg";
import { courseEnrollDto } from "../../@types/Dtos/courseEnrollDto";

interface UserCourseListProps {
  userCourses: courseEnrollDto[] | undefined; 
}

const UserCoursesList: FC<UserCourseListProps> = ({ userCourses }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {userCourses?.map((course, key) => (
        <Link to={`/course/${course.userCourseId}`} key={key}>
          <div className="flex flex-col m-3">
            <div className="h-full bg-lilac-300 text-sky-300 rounded-t-lg p-3">
              <img src={starburst} alt="Course image" />
            </div>
            <div className="bg-gray-100 p-2 rounded-b-lg">
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
