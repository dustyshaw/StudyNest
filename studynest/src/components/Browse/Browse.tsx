
import { AddCourseEnrollRequest } from "../../@types/Requests/AddCourseEnrollRequest";
import { CourseQueries } from "../../Queries/courseQueries";
import { UserCourseQueries } from "../../Queries/userCourseQueries";

const Browse = () => {
  const { data } = CourseQueries.useGetAllCourses();
  const { mutateAsync } = UserCourseQueries.useAddACourse();

  const handleAddCourseEnroll = async(courseId: number) => {
    const newUserCourseRequest: AddCourseEnrollRequest = {
      courseId: courseId,
      userId: 1,
    }
    mutateAsync(newUserCourseRequest);
  }

  return (
    <div>
      {data?.map((x, key) => (
        <p key={key} className="mt-6">
          <span className="text-xl">{x.title}</span>
          <br />
          {x.id} 
          {x.description}
          <button onClick={() => handleAddCourseEnroll(x.id)} className="bg-lilac-300 text-white rounded-md px-3 py-2">Enroll Now!</button>
        </p>
      ))}
    </div>
  );
};

export default Browse;
