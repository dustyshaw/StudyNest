import { FC } from 'react';
import { Course } from '../../@types/course';

interface CourseListProps {
  data: Course[] | undefined;
  handleAddCourseEnroll: (courseId: number) => void;
}

const BrowseCourseList: FC<CourseListProps> = ({ data, handleAddCourseEnroll }) => {
  return (
    <div className="flex flex-wrap w-full">
      {data?.map((x, key) => (
        <div
          className="lg:w-1/4 md:w-1/2 w-full bg-lime-300 p-6 mx-4 my-3 rounded-3xl"
          key={key}
        >
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-50 hidden">
            <div
              className="bg-gray-50 h-1.5 rounded-full dark:bg-gray-900"
              style={{ width: '45%' }}
            ></div>
          </div>
          <div className="flex flex-row items-baseline mt-16">
            <h2 className="font-semibold text-2xl mb-2">{x.title}</h2>
            <p className="text-lime-800 ms-5"></p>
          </div>
          <p className="mb-6">{x.description}</p>
          <button
            className="bg-gray-900 rounded-lg text-white px-5 py-2 m-5 shadow hover:bg-white hover:text-gray-900 transition-all hover:shadow-none font-semibold"
            onClick={() => handleAddCourseEnroll(x.id)}
          >
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
};

export default BrowseCourseList;
