import { useParams } from "react-router";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import { useContext, useEffect, useState } from "react";
import { courseEnrollDto } from "../../@types/Dtos/courseEnrollDto";
import { Link } from "react-router-dom";
import { CourseUnitQueries } from "../../Queries/courseUnitQueries";
import SecondaryBtn from "../LayoutComponents/SecondaryBtn";
import AddCourseBtn from "./AddCourseBtn";
import Button from "../LayoutComponents/Button";
import LoadingComponent from "../LoadingComponent";
import { UserContext } from "../../context/UserContext";
import UnitTitleBox from "./UnitTitleBox";
import TaskTitleBox from "./TaskTitleBox";

const Course = () => {
  const { courseId: userCourseId } = useParams();
  const userContext = useContext(UserContext);

  const { data: userCourses, isLoading } =
    UserCourseQueries.useGetAllUserCoursesByUserId(userContext?.user?.id ?? 0);

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

  if (!userCourses || isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="m-8">
      <p className="my-8">
        <Link to={"/"}>Dashboard</Link> / {filteredUserCourse?.course.title}
      </p>
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-3xl">{filteredUserCourse?.course.title}</h1>
          <p className="text-gray-600 mb-8">
            {filteredUserCourse?.course?.description}
          </p>
        </div>
        <Link to={`/editcourse/${userCourseId}`}>
          <SecondaryBtn>Edit</SecondaryBtn>
        </Link>
      </div>

      <Link to={`/addunit/${filteredUserCourse?.course.id}`}>
        <Button>Add Unit</Button>
      </Link>
      <div className="w-full flex flex-col justify-center items-center">
        {courseUnits && courseUnits.length <= 0 && <p>No units yet...</p>}

        {courseUnits &&
          courseUnits.map((courseUnit, key) => (
            <div key={key} className="mb-8 md:w-1/2">
              <UnitTitleBox unitCourse={courseUnit} />

              {courseUnit.unit != undefined && courseUnit.unit.unitTasks != undefined &&
                courseUnit.unit.unitTasks.map((task, key) => (
                  <Link to={`/task/${task.taskid}`} key={key}>
                    <TaskTitleBox task={task} />
                  </Link>
                ))}
              {courseUnit.unit != undefined && courseUnit.unit.unitTasks != undefined && courseUnit.unit.unitTasks.length <= 0 && (
                <p className="my-2 ml-8 text-lg p-3">No tasks yet...</p>
              )}
              <AddCourseBtn courseUnitId={courseUnit.id} />
            </div>
          ))}

        {/* {courseUnits &&
          courseUnits
            .map((x) => ({
              ...x,
              unitTasks:
                x.unit?.unitTasks?.sort((a) => (a.task.iscomplete ? -1 : 1)) || [],
            }))
            .sort((a, b) => {
              // Sort units based on the completion of their tasks (completed tasks come first)
              const allTasksACompleted = a.unitTasks.every(
                (task) => task.task.iscomplete
              );
              const allTasksBCompleted = b.unitTasks.every(
                (task) => task.task.iscomplete
              );
              if (allTasksACompleted && !allTasksBCompleted) {
                return -1; // Unit A is completed, Unit B is not
              }
              if (!allTasksACompleted && allTasksBCompleted) {
                return 1; // Unit B is completed, Unit A is not
              }
              return 0; // If both have the same completion status, no change
            })
            .map((x, key) => (
              <div key={key} className="mb-8 md:w-1/2">
                <div className="bg-gray-200 rounded-lg flex flex-row justify-between items-center">
                  <p className="text-xl p-4">{x.unit.title}</p>
                  <span className="m-4">
                    <Link to={`/editunit/${x.unit.id}`}>
                      <PencilSquareIcon className="w-5 h-5 text-gray-600" />
                    </Link>
                  </span>
                </div>
                {x.unitTasks.map((unitTask, key) => (
                  <Link to={`/task/${unitTask.taskid}`} key={key}>
                    <div
                      key={key}
                      className={`px-3 border-b-2 text-lg p-3 border-l-8 rounded-lg flex flex-row ${
                        unitTask.task.iscomplete
                          ? "border-l-lime-400 text-gray-600"
                          : "border-l-black"
                      } my-2 ml-8`}
                    >
                      {unitTask.task?.iscomplete && (
                        <CheckCircleIcon className="w-6 me-2 text-lime-600" />
                      )}
                      <span className="flex flex-row justify-between w-full">
                        <p>{unitTask.task.title}</p>
                        <p className="text-sm">
                          due{" "}
                          {unitTask.task.duedate &&
                            formatDate(unitTask.task.duedate)}
                        </p>
                      </span>
                    </div>
                  </Link>
                ))}
                {x.unitTasks.length <= 0 && (
                  <p className="my-2 ml-8 text-lg p-3">No tasks yet...</p>
                )}
                <AddCourseBtn courseUnitId={x.id} />
              </div>
            ))} */}

        {/* {courseUnits &&
          courseUnits.map((x, key) => 
        
              <div key={key} className="mb-8 md:w-1/2">
                <div className="bg-gray-200 rounded-lg flex flex-row justify-between items-center">
                  <p className="text-xl p-4">{x.unit.title}</p>
                  <span className="m-4">
                    <Link to={`/editunit/${x.unit.id}`}>
                      <PencilSquareIcon className="w-5 h-5 text-gray-600" />
                    </Link>
                  </span>
                </div>
                {x.unitTasks.map((unitTask, key) => (
                  <Link to={`/task/${unitTask.taskid}`} key={key}>
                    <div
                      key={key}
                      className={`px-3 border-b-2 text-lg p-3 border-l-8 rounded-lg flex flex-row ${
                        unitTask.task.iscomplete
                          ? "border-l-lime-400 text-gray-600"
                          : "border-l-black"
                      } my-2 ml-8`}
                    >
                      {unitTask.task?.iscomplete && (
                        <CheckCircleIcon className="w-6 me-2 text-lime-600" />
                      )}
                      <span className="flex flex-row justify-between w-full">
                        <p>{unitTask.task.title}</p>
                        <p className="text-sm">
                          due{" "}
                          {unitTask.task.duedate &&
                            formatDate(unitTask.task.duedate)}
                        </p>
                      </span>
                    </div>
                  </Link>
                ))}
                {x.unitTasks.length <= 0 && (
                  <p className="my-2 ml-8 text-lg p-3">No tasks yet...</p>
                )}
                <AddCourseBtn courseUnitId={x.id} />
              </div>
            ))} */}
      </div>
    </div>
  );
};

export default Course;
