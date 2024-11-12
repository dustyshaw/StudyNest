import { UserCourseQueries } from "../../Queries/userCourseQueries";
import AddCoursePage from "../AddCoursePage";

const Dashboard = () => {
  const { data: userCourses } =
    UserCourseQueries.useGetAllUserCoursesByUserId(1);
  console.log(userCourses);

  // useEffect(() => {
  //   const fetchAuthData = async () => {
  //     try {
  //       // Assuming token is stored in localStorage, replace with your method of token management
  //       const token = localStorage.getItem('authToken');
        
  //       // Fetching from the /authOnly endpoint
  //       const response = await fetch('/authOnly', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch auth data');
  //       }

  //       const data = await response.json();
  //       setAuthData(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAuthData();
  // }, []); 

  return (
    <>
      <div className="p-8">
        <div className="text-2xl">Your Dashboard</div>

        {userCourses?.map((x, key) => (
          <div className="w-1/2 flex flex-col m-4" key={key}>
            <div className="h-full bg-lilac-300 text-sky-300 rounded-t-lg p-3">
              <svg
                className="w-10 h-10"
                viewBox="0 0 147 148"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                  fill="currentColor"
                />
                <path
                  d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
                <path
                  d="M147 70.0938H0V77.2021H147V70.0938Z"
                  fill="currentColor"
                />
                <path
                  d="M147 70.0938H0V77.2021H147V70.0938Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
                <path
                  d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                  fill="currentColor"
                />
                <path
                  d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
                <path
                  d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                  fill="currentColor"
                />
                <path
                  d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
                <path
                  d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                  fill="currentColor"
                />
                <path
                  d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
                <path
                  d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                  fill="currentColor"
                />
                <path
                  d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
                <path
                  d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                  fill="currentColor"
                />
                <path
                  d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
                <path
                  d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                  fill="currentColor"
                />
                <path
                  d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                />
              </svg>
            </div>
            <div className="bg-gray-100 p-2 rounded-b-lg">
              <h2 className="text-xl text-gray-800">{x.courseTitle}</h2>
              <p className="text-gray-600">{x.ownerUsername}</p>
            </div>
          </div>
        ))}

        <AddCoursePage />
      </div>
    </>
  );
};

export default Dashboard;
