import LoginButton from "../features/LoginBtn";

import { SparklesIcon } from "@heroicons/react/24/outline";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

const LandingPage = () => {
  // const { data } = CourseQueries.useGetAllPublicCourses();

  return (
    <>
      <div className="flex justify-end w-full">
        <LoginButton />
      </div>
      <div className="flex justify-center">
        <div className="w-full" style={{ maxWidth: "1200px" }}>
          <div className="text-3xl mt-8">StudyNest</div>
          <p className="text-xl mb-8">Create your own study plans</p>
        </div>
      </div>
      <div className="bg-slate-800 text-white flex justify-center p-4">
        <div className="w-full" style={{ maxWidth: "1200px" }}>
          <div className="text-3xl mt-8 mb-3">Stay Motivated</div>
          <p className="text-xl mb-8">
            Track your progress in topics you want to learn.
          </p>
          <div className="flex justify-between text-black mb-8">
            <div className="bg-gray-50 m-3 flex flex-col items-center justify-center text-center rounded w-1/4">
              <CursorArrowRaysIcon className="w-24 m-8" />
              <p className="my-8">Create Courses</p>
            </div>
            <div className="bg-gray-50 m-3 flex flex-col items-center justify-center text-center rounded w-1/4">
              <SparklesIcon className="w-24 m-8" />
              <p className="my-8"> Set Goals</p>
            </div>
            <div className="bg-gray-50 m-3 flex flex-col items-center justify-center text-center rounded w-1/4">
              <RectangleGroupIcon className="w-24 m-8" />
              <p className="my-8">Browse Topics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex align-middle text-center flex-col mt-16">
        <h2 className="text-2xl font-semibold">Enroll in user made courses</h2>
        <div className="w-full">
          {/* <BrowseCourseList data={data?.slice(0, 3)} /> */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
