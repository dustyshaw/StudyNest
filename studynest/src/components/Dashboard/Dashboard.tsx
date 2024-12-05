import { Link } from "react-router-dom";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import Button from "../LayoutComponents/Button";
import UserCoursesList from "../LayoutComponents/DashboardCourse";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Stats from "../Stats/Stats";
import LoadingComponent from "../LoadingComponent";
import NoItemsComponent from "../LayoutComponents/NoItemsComponent";
import feather from "../../assets/feather-white.svg";

const Dashboard = () => {
  const userContext = useContext(UserContext);

  // TODO change this back to userContext?.user?.id ?? 0
  const { data: userCourses, isLoading } =
    UserCourseQueries.useGetAllUserCoursesByUserId(userContext?.user?.id ?? 0);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (userCourses == undefined || userCourses?.length <= 0) {
    <NoItemsComponent
      linkToAdd={"/addcourse"}
      itemName={"Course"}
      supportingText={"Looks like you don't have any courses yet..."}
    />;
  }

  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="w-full p-8 md:order-1 order-2">
          <div className="flex flex-row justify-between">
            <div className="text-2xl">Your Dashboard</div>
            <Link to={"/addcourse"}>
              <Button className="flex flex-row">
                <img src={feather} className="mt-1 me-1" /> Add a Course
              </Button>
            </Link>
          </div>
          <div className="flex flex-row flex-wrap">
            <UserCoursesList userCourses={userCourses} />
          </div>
        </div>
        <div className="md:w-1/3 w-full bg-gray-100 md:h-screen md:order-2 order-1">
          {userContext?.user && <Stats user={userContext?.user} />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
