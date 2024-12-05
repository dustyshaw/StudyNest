import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import TopNav from "./components/NavComponents/TopNav";
import { Toaster } from "react-hot-toast";
import Browse from "./components/Browse/Browse";
import Course from "./components/Course/Course";
import AddCourse from "./components/Course/AddCourse";
import FallbackComponent from "./components/FallbackComponent";
import EditCourse from "./components/Course/EditCourse";
import { ErrorBoundary } from "react-error-boundary";
import ViewTask from "./components/Task/Task";
import EditTask from "./components/Task/EditTask";
import AddTask from "./components/Task/AddTask";
import { UserContextProvidor } from "./context/userContextProvidor";
import AddUnit from "./components/Units/AddUnit";
import AddCourseWithUnitsForm from "./components/Course/AddCourseWithUnits/AddCourseWithUnits";
import { DynamicLayoutContext } from "./context/DynamicLayoutContext";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import LandingPage from "./components/LandingPage";
import LeftNav from "./components/NavComponents/LeftNav";
import BottomNav from "./components/NavComponents/BottomNav";
import EditUnit from "./components/Units/EditUnit";
import { CourseQueries } from "./Queries/courseQueries";

const queryClient = new QueryClient(); // stay OUTSIDE of function App() !!!

function App() {
  const { user: authuser } = useAuth();

  const unusedVariable = 5;

  const layoutContext = useContext(DynamicLayoutContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const marginLeft =
    windowWidth < 640 || !layoutContext?.navbarWidth
      ? 'ml-0'
      : 'ml-' + layoutContext?.navbarWidth?.slice(2, 4);

  if (!authuser) {
    return (
      <QueryClientProvider client={queryClient}>
        <LandingPage />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvidor>
        <Toaster />
        <BrowserRouter>
          <LeftNav />
          <TopNav />
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            <div className={` ${marginLeft} ${marginLeft === "ml-48" ? "ml-48" : ""} transition-all duration-300 in-app-tsx`}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/course/:courseId" element={<Course />} />
                <Route
                  path="/addcoursewithunits"
                  element={<AddCourseWithUnitsForm />}
                />
                <Route path="/addcourse" element={<AddCourse />} />
                <Route path="/editcourse/:courseId" element={<EditCourse />} />
                <Route path="/task/:taskId" element={<ViewTask />} />
                <Route path="/task/edit/:taskId" element={<EditTask />} />
                <Route
                  path="/dashboard/module/addTask/:courseUnitId"
                  element={<AddTask />}
                />
                <Route path="/addunit/:courseId" element={<AddUnit />} />
                <Route path="/editunit/:unitId" element={<EditUnit />} />
                <Route path="*" element={<FallbackComponent />} />
              </Routes>
            </div>
            <div className="sm:hidden sticky bottom-0">
              <BottomNav />
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      </UserContextProvidor>
    </QueryClientProvider>
  );
}

export default App;
