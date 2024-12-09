import LoginButton from "../features/LoginBtn";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { BoltIcon } from "@heroicons/react/24/solid";

import { CourseQueries } from "../Queries/courseQueries";
import { useAuth } from "react-oidc-context";
import feather from "../assets/feather.svg";
import LoadingComponent from "./LoadingComponent";

const LandingPage = () => {
  const { data: courses, isLoading } = CourseQueries.useGetAllPublicCourses();
  const auth = useAuth();

  if (isLoading) {
    return <LoadingComponent />
  }

  return (
    <>
      <div className="flex justify-end w-full">
        <LoginButton />
      </div>
      <div className="flex justify-center text-center">
        <div className="w-full mt-16" style={{ maxWidth: "1200px" }}>
          <div className="flex items-center justify-center text-4xl font-bold tracking-wide mt-8">
            <span>StudyNest</span>
            <img src={feather} className="ml-2 w-8" alt="Feather icon" />
          </div>
          <p className="text-xl mb-8 mx-auto w-full sm:w-1/2">
            Organize your learning journey and stay on track with custom study
            plans tailored to your goals.
          </p>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <div className="w-full" style={{ maxWidth: "1200px" }}>
          <div className="text-3xl mt-8 mb-3 font-semibold">Stay Motivated</div>
          <p className="text-xl mb-8">
            Track your progress in topics you want to learn.
          </p>
          <div className="flex sm:flex-row flex-col justify-between text-black mb-8 transition-all">
            <div className="bg-lilac-200 m-3 flex flex-col items-center justify-center text-center rounded-xl md:w-1/4 w-full ">
              <CursorArrowRaysIcon className="w-24 m-8" />
              <p className="my-8">Create Courses</p>
            </div>
            <div className="bg-sky-200 m-3 flex flex-col items-center justify-center text-center rounded-xl md:w-1/4 w-full">
              <SparklesIcon className="w-24 m-8" />
              <p className="my-8"> Set Goals</p>
            </div>
            <div className="bg-yellow-100 m-3 flex flex-col items-center justify-center text-center rounded-xl md:w-1/4 w-full">
              <RectangleGroupIcon className="w-24 m-8" />
              <p className="my-8">Browse Topics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex align-middle text-center flex-col mt-16 bg-gray-900 text-white sm:m-4 m-1 p-3 rounded-3xl">
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Browse hundreds of user-made courses
        </h2>
        <div className="flex sm:flex-row flex-col">
          {courses?.map((c, key) => (
            <div
              key={key}
              className="bg-sky-300 text-gray-950 m-2 px-8 py-4 rounded-xl font-semibold flex flex-row hover:scale-105 transition-all"
              role="button"
              onClick={() => void auth.signinRedirect()}
            >
              <BoltIcon className="w-5 me-2" />
              {c.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
