import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import { Toaster } from "react-hot-toast";
import Browse from "./components/Browse/Browse";
import Course from "./components/Course/Course";
import AddCourse from "./components/Course/AddCourse";
import FallbackComponent from "./components/FallbackComponent";
import EditCourse from "./components/Course/EditCourse";
import { ErrorBoundary } from "react-error-boundary";
import Module from "./components/Module/Module";
import ViewTask from "./components/Task/Task";

const queryClient = new QueryClient(); // stay OUTSIDE of function App() !!!

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <UserContextProvidor> */}
        <Toaster />
        <BrowserRouter>
          <LeftNav />
          <TopNav />
          <ErrorBoundary FallbackComponent={FallbackComponent}
            onReset={() => {
              // reset the state of your app here
            }}
            resetKeys={['someKey']}>
            <div className="sm:ml-24">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/course/:courseId" element={<Course />} />
                <Route path="/addcourse" element={<AddCourse />} />
                <Route path="/editcourse/:courseId" element={<EditCourse />} />
                <Route path="/module/:unitId" element={<Module />} />
                <Route path="/task/:taskId" element={<ViewTask />} />
                <Route path="*" element={<FallbackComponent />} />
              </Routes>
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      {/* </UserContextProvidor> */}
    </QueryClientProvider>
  );
}

export default App;
