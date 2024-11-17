
import { useParams } from "react-router";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import { useEffect, useState } from "react";
import { courseEnrollDto } from "../../@types/Dtos/courseEnrollDto";
import { Link } from "react-router-dom";
import { CourseUnitQueries } from "../../Queries/courseUnitQueries";

const Course = () => {
  const { courseId: userCourseId } = useParams();
  const { data: userCourses } = UserCourseQueries.useGetAllUserCoursesByUserId(6);
  // console.log(userCourses)
  const [filteredUserCourse, setFilteredCourse] = useState<courseEnrollDto | undefined>();
  
  // useEffect to filter the user courses whenever userCourseId or userCourses change
  useEffect(() => {
    if (userCourses && userCourseId) {
      const foundCourse = userCourses.find(course => course.userCourseId === Number(userCourseId));
      setFilteredCourse(foundCourse);
    }
  }, [userCourses, userCourseId]); // Runs when userCourses or userCourseId changes
  
  const { data: courseUnits} = CourseUnitQueries.useGetCourseById(filteredUserCourse?.course.id)


  if (!userCourses) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }



  return (
    <div className="m-8">
      <p>User Course Page</p>
      <h1 className="text-3xl">{filteredUserCourse?.course.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{filteredUserCourse?.course?.description}</p>
      <Link to={`/editcourse/${userCourseId}`}>Edit</Link>
      <p className="text-2xl mt-5">Course Modules</p>
      {courseUnits &&
        courseUnits.map((x, key) => (
          <div key={key} className="bg-gray-300 rounded md:w-1/3">
            <p className="text-xl p-3">1. {x.unit.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Course;
