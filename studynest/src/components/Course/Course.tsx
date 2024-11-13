
import { CourseQueries } from "../../Queries/courseQueries";
import { useParams } from "react-router";

const Course = () => {
    const { courseId } = useParams();

    const {data: course} = CourseQueries.useGetCourseById(Number(courseId))

  return (
    <div className="m-8">
      <h1 className="text-3xl">{course?.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{course?.description}</p>
    </div>
  );
};

export default Course;
