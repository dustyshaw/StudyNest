import { AddCourseEnrollRequest } from "../../@types/Requests/AddCourseEnrollRequest";
import { CourseQueries } from "../../Queries/courseQueries";
import { UserCourseQueries } from "../../Queries/userCourseQueries";
import starburst from "../../assets/starburst.svg"

const Browse = () => {
  const { data } = CourseQueries.useGetAllPublicCourses();
  const { mutateAsync } = UserCourseQueries.useAddACourse();


  // TODO: make this the actual user
  const handleAddCourseEnroll = async (courseId: number) => {
    const newUserCourseRequest: AddCourseEnrollRequest = {
      courseId: courseId,
      userId: 6,
    }
    mutateAsync(newUserCourseRequest);
  }

  return (
    <div>
      <img src={starburst} />

      <div className="flex flex-wrap w-full">

        {data && data?.map((x, key) => (
          <div className="lg:w-1/4 w-1/2 bg-lime-300 p-6 mx-4 my-3 rounded-3xl" key={key}>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-50 hidden">
              <div className="bg-gray-50 h-1.5 rounded-full dark:bg-gray-900" style={{ width: "45%" }}></div>
            </div>
            <div className="flex flex-row items-baseline mt-16">
              <h2 className="font-semibold text-2xl mb-2 ">{x.title}</h2>
              <p className="text-lime-800 ms-5"></p>
            </div>
            <p className="mb-6">{x.description}</p>
            <button
              className="bg-gray-900 rounded-lg text-white px-5 py-2 m-5 shadow hover:bg-white hover:text-gray-900 transition-all hover:shadow-none font-semibold"
              onClick={() => handleAddCourseEnroll(x.id)}>
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
