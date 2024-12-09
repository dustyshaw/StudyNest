import BrowseCourseList from "../LayoutComponents/BrowseCourse";
import LoadingComponent from "../LoadingComponent";
import { CourseQueries } from "../../Queries/courseQueries";
import LoginButton from "../../features/LoginBtn";

const PublicBrowse = () => {
  const { data, isLoading } = CourseQueries.useGetAllPublicCourses();

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <div className="flex justify-end w-full">
        <LoginButton />
      </div>
      <div className="w-90 m-8 rounded-3xl bg-sky-300 p-3">
        <h1 className="text-3xl font-semibold">Browse public courses</h1>
        <p>Build your own course and make it public to share the knowledge!</p>
      </div>
      <BrowseCourseList data={data} showEnrollBtns={false} />
    </div>
  );
};

export default PublicBrowse;
