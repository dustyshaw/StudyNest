import { Link } from "react-router-dom";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import Button from "../genericComponents/Button";
import UserCoursesList from "../genericComponents/DashboardCourse";
import BarChartComponent from "../Stats/StatsBoard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  // Auth stuff
  // const { user: authuser } = useAuth();
  // const email = authuser?.profile.email ?? "";
  // const { data: user } = UserQueries.useGetUserByEmail(email);
  const userContext = useContext(UserContext);


  const { data: userCourses } = UserCourseQueries.useGetAllUserCoursesByUserId(
    userContext?.user?.id ?? 0
  );


  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="w-full p-8 md:order-1 order-2">
          <div className="text-2xl">Your Dashboard</div>
          <Link to={"/addcourse"}>
            <Button
              onClick={() => {
                console.log("Adding Course");
              }}
            >
              Add a Course
            </Button>
          </Link>
          <div className="flex flex-row flex-wrap">
            <UserCoursesList userCourses={userCourses} />
          </div>
        </div>
        <div className="md:w-1/3 w-full bg-gray-100 md:h-screen md:order-2 order-1">
          <h1 className="text-2xl">Your Stats</h1>
          <BarChartComponent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
