import { UserCourseQueries } from "../../Queries/userCourseQueries";
import AddCoursePage from "../AddCoursePage";
import starburst from "../../assets/starburst.svg"

const Dashboard = () => {
  // TODO get actual user id from database
  const { data: userCourses } =
    UserCourseQueries.useGetAllUserCoursesByUserId(6);

    console.log("User Courses: ", userCourses)

  return (
    <>
      <div className="p-8">
        <div className="text-2xl">Your Dashboard</div>

        {userCourses?.map((x, key) => (
          <div className="w-1/2 flex flex-col m-4" key={key}>
            <div className="h-full bg-lilac-300 text-sky-300 rounded-t-lg p-3">
              <img src={starburst} />
            </div>
            <div className="bg-gray-100 p-2 rounded-b-lg">
              <h2 className="text-xl text-gray-800">{x.courseTitle}</h2>
              <p className="text-gray-600">{x.ownerUsername}</p>
            </div>
          </div>
        ))}

        <AddCoursePage />
      </div>
    </>
  );
};

export default Dashboard;
