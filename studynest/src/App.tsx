import "./App.css";
import "./index.css";
import LoginButton from "./LoginBtn";
import { CourseQueries } from "./Queries/courseQueries";

function App() {
  //const { data } = CourseQueries.useGetAllCourses();

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
      {/* <div>
        {data && data.map((d, key) => {<p>{d.}</p>})}
      </div> */}
      <div className="bg-slate-800 text-white flex justify-center">
        <div className="w-full" style={{ maxWidth: "1200px" }}>
          <div className="text-3xl mt-8 mb-3">Stay Motivated</div>
          <p className="text-xl mb-8">Track your progress in topics you want to learn.</p>
          <div className="flex justify-between text-black mb-8">
            <div className="bg-white flex align-middle justify-center rounded w-1/4">
                <p className="my-8">Create Courses</p>
            </div>
            <div className="bg-white flex align-middle justify-center rounded w-1/4">
                <p className="my-8">Set Goals</p>
            </div>
            <div className="bg-white flex align-middle justify-center rounded w-1/4">
                <p className="my-8">Browse Courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
