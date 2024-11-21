import { AddCourseEnrollRequest } from "../../@types/Requests/AddCourseEnrollRequest";
import { CourseQueries } from "../../Queries/courseQueries";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import BrowseCourseList from "../genericComponents/BrowseCourse";

const Browse = () => {
  const { data } = CourseQueries.useGetAllPublicCourses();
  const { mutateAsync } = UserCourseQueries.useAddACourse();

  const handleAddCourseEnroll = async (courseId: number) => {
    const newUserCourseRequest: AddCourseEnrollRequest = {
      courseId: courseId,
      userId: 6,
    }
    mutateAsync(newUserCourseRequest);
  }

  return (
    <div>
      <BrowseCourseList data={data} handleAddCourseEnroll={handleAddCourseEnroll} />
    </div>
  );
};

export default Browse;
