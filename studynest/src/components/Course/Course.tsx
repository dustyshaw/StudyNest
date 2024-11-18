import { useParams } from "react-router";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import { useEffect, useState } from "react";
import { courseEnrollDto } from "../../@types/Dtos/courseEnrollDto";
import { Link } from "react-router-dom";
import { CourseUnitQueries } from "../../Queries/courseUnitQueries";

const Course = () => {
  const { courseId: userCourseId } = useParams();
  const { data: userCourses } =
    UserCourseQueries.useGetAllUserCoursesByUserId(6);
  // console.log(userCourses)
  const [filteredUserCourse, setFilteredCourse] = useState<
    courseEnrollDto | undefined
  >();

  console.log(userCourseId);

  // useEffect to filter the user courses whenever userCourseId or userCourses change
  useEffect(() => {
    if (userCourses && userCourseId) {
      const foundCourse = userCourses.find(
        (course) => course.userCourseId === Number(userCourseId)
      );
      setFilteredCourse(foundCourse);
    }
  }, [userCourses, userCourseId]); // Runs when userCourses or userCourseId changes

  const { data: courseUnits } = CourseUnitQueries.useGetCourseById(
    Number(userCourseId)
  );

  console.log("course units by course id: ", courseUnits);

  if (!userCourses) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  return (
    <div className="m-8">
      <p className="mb-3">Dashboard / User Course</p>
      <h1 className="text-3xl">{filteredUserCourse?.course.title}</h1>
      <p className="text-xl text-gray-600 mb-8">
        {filteredUserCourse?.course?.description}
      </p>
      <Link to={`/editcourse/${userCourseId}`}>Edit</Link>
      <p className="text-2xl mt-5">Course Modules</p>
      {courseUnits && courseUnits.length <= 0 && <p>No modules yet...</p>}
      {courseUnits &&
        courseUnits.map((x, key) => (
          <div key={key}>
            <div className="bg-gray-100 rounded md:w-1/3">
              <p className="text-xl p-3">
                {x.unitid} - {x.unit.title}
              </p>
            </div>
            {x.unit.unitTasks.map((unitTask, key) => (
              <Link to={`/task/${unitTask.taskid}`}>
                <div key={key} className="px-3 border-b-2">
                  {unitTask.task.title} -{" "}
                  {unitTask.task.dueDate &&
                    unitTask.task.dueDate.toDateString()}
                </div>
              </Link>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Course;
