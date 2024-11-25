import { useParams } from "react-router";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import { useEffect, useState } from "react";
import { courseEnrollDto } from "../../@types/Dtos/courseEnrollDto";
import { Link } from "react-router-dom";
import { CourseUnitQueries } from "../../Queries/courseUnitQueries";
import formatDate from "../DateFormatter";
import { useAuth } from "react-oidc-context";
import { UserQueries } from "../../Queries/userQueries";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import SecondaryBtn from "../genericComponents/SecondaryBtn";
import AddCourseBtn from "./AddCourseBtn";
import Button from "../genericComponents/Button";

const Course = () => {
  const { courseId: userCourseId } = useParams();

  const { user: authuser } = useAuth();

  const email = authuser?.profile.email ?? "";
  const { data: user } = UserQueries.useGetUserByEmail(email);

  // TODO: Change this back to 0
  const { data: userCourses } = UserCourseQueries.useGetAllUserCoursesByUserId(
    user?.id ?? 6
  );
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
      <p className="">Dashboard / {filteredUserCourse?.course.title}</p>

      <div className="flex flex-row justify-between">
        <h1 className="text-3xl my-5">{filteredUserCourse?.course.title}</h1>
        <Link to={`/editcourse/${userCourseId}`}>
          <SecondaryBtn>Edit</SecondaryBtn>
        </Link>
      </div>

      <p className="text-xl text-gray-600 mb-8">
        {filteredUserCourse?.course?.description}
      </p>

      <p className="text-2xl mt-5">Course Units</p>
      <Link to={`/addunit/${filteredUserCourse?.course.id}`}>
        <Button>Add Unit</Button>
      </Link>
      {courseUnits && courseUnits.length <= 0 && <p>No units yet...</p>}
      {courseUnits &&
        courseUnits.map((x, key) => (
          <div key={key} className="mb-8 md:w-1/2">
            <div className="bg-gray-200 rounded-lg flex flex-row justify-between">
              <p className="text-xl p-4">{x.unit.title}</p>
            </div>
            {x.unit.unitTasks.map((unitTask, key) => (
              <Link to={`/task/${unitTask.taskid}`} key={key}>
                <div
                  key={key}
                  className={`px-3 border-b-2 text-lg p-3 border-l-8 rounded-lg flex flex-row ${
                    unitTask.task.iscomplete
                      ? "border-l-lime-400 text-gray-600"
                      : "border-l-black"
                  } my-2 ml-8`}
                >
                  {unitTask.task?.iscomplete ? (
                    <CheckCircleIcon className="w-6 me-2 text-lime-600" />
                  ) : (
                    ""
                  )}
                  <span className="flex flex-row justify-between w-full">
                    <p>{unitTask.task.title}</p>
                    <p className="text-sm">due {unitTask.task.duedate && formatDate(unitTask.task.duedate)}</p>
                  </span>
                </div>
              </Link>
            ))}
            {x.unit.unitTasks.length <= 0 && (
              <p className="my-2 ml-8 text-lg p-3">No tasks yet...</p>
            )}
            <AddCourseBtn courseUnitId={x.id} />
          </div>
        ))}
    </div>
  );
};

export default Course;
