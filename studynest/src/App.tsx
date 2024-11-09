import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";

const queryClient = new QueryClient(); // stay OUTSIDE of App()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <LandingPage /> */}
        <LeftNav />
        <TopNav />
        <div className="sm:ml-24">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
