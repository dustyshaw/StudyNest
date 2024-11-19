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
  const [filteredUserCourse, setFilteredCourse] = useState<
    courseEnrollDto | undefined
  >();

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
          <div key={key} className="mb-8">
            <div className="bg-gray-100 rounded md:w-1/3 flex flex-row justify-between">
              <p className="text-xl p-3">
                {x.unitid} - {x.unit.title}
              </p>
              <Link to={`/dashboard/module/addTask/${x.id}`}><div className="bg-gray-400 text-white"><p>New task</p></div></Link>
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
