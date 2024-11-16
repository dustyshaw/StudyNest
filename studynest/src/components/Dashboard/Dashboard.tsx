import { Link } from "react-router-dom";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import starburst from "../../assets/starburst.svg";
import Button from "../Inputs/Button";
import { useAuth } from "react-oidc-context";
import { UserQueries } from "../../Queries/userQueries";

const Dashboard = () => {

  // Auth stuff
  const { user: authuser, isAuthenticated } = useAuth();

  if ((authuser == undefined || null) || !isAuthenticated) {
    return (<p className="text-2xl text-red-500">You're not logged in</p>)
  }

  const email = authuser.profile.email ?? "";
  const { data: userFromQuery, refetch} = UserQueries.useGetUserByEmail("dusty.shaw@students.snow.edu");
  

  // const userFromQuery = UserService.GetUserByEmail(email);
  console.log("user from query => ", userFromQuery)
  // END Auth stuff

  // TODO get actual user id from database
  const { data: userCourses } =
    UserCourseQueries.useGetAllUserCoursesByUserId(6);

  return (
    <>
      {/* <AddCourse /> */}

      <div className="p-8">
        <div className="text-2xl">Your Dashboard</div>
        <button
          onClick={() => {
            throw new Error("Manually triggered error");
          }}
        >
          Throw Error
        </button>
        <Link to={"/addcourse"}>
          <Button onClick={() => {console.log("Adding Course"); refetch();}}>
            Add a Course
          </Button>
        </Link>
        <div className="flex flex-row flex-wrap">
          {userCourses?.map((x, key) => (
            <Link to={`/course/${x.course.id}`}>
              <div className="flex flex-col m-3" key={key}>
                <div className="h-full bg-lilac-300 text-sky-300 rounded-t-lg p-3">
                  <img src={starburst} />
                </div>
                <div className="bg-gray-100 p-2 rounded-b-lg">
                  <h2 className="text-xl text-gray-800">{x.course.title}</h2>
                  <p></p>
                  <p className="text-gray-600">{x.ownerUsername}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
