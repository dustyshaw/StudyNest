import { useParams } from "react-router";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import { useEffect, useState } from "react";
import { courseEnrollDto } from "../../@types/Dtos/courseEnrollDto";
import { Link } from "react-router-dom";
import { CourseUnitQueries } from "../../Queries/courseUnitQueries";
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import formatDate from "../DateFormatter";


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

  console.log(courseUnits)
  console.log(courseUnits && courseUnits[0].unit.unitTasks[3].task.iscomplete)

  if (!userCourses) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  return (
    <div className="m-8">
      <p className="mb-6">Dashboard / User Course</p>
      <h1 className="text-3xl">{filteredUserCourse?.course.title}</h1>
      <p className="text-xl text-gray-600 mb-8">
        {filteredUserCourse?.course?.description}
      </p>
      <Link to={`/editcourse/${userCourseId}`}>Edit</Link>
      <p className="text-2xl mt-5">Course Modules</p>
      {courseUnits && courseUnits.length <= 0 && <p>No modules yet...</p>}
      {courseUnits &&
        courseUnits.map((x, key) => (
          <div key={key} className="mb-8 md:w-1/2">
            <div className="bg-gray-200 rounded-lg flex flex-row justify-between">
              <p className="text-xl p-3">
                {x.unit.title}
              </p>
              <Link to={`/dashboard/module/addTask/${x.id}`}>
                <div className="">
                  <PlusCircleIcon className="size-10 text-black m-3" />
                </div>
              </Link>
            </div>
            {x.unit.unitTasks.map((unitTask, key) => (
              <Link to={`/task/${unitTask.taskid}`} key={key}>
                <div key={key} className={`px-3 border-b-2 text-lg p-3 border-l-8 rounded-lg ${unitTask.task.iscomplete ? "border-l-lime-400" : 'border-l-black'} my-2 ml-8`}>
                  {unitTask.task.title} - {" "}
                  {unitTask.task.duedate &&
                  formatDate(unitTask.task.duedate)}
                </div>
              </Link>
            ))}
            {x.unit.unitTasks.length <= 0 && <p className="my-2 ml-8 text-lg p-3">No tasks yet...</p>}
          </div>
        ))}
    </div>
  );
};

export default Course;
