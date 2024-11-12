import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import { Toaster } from 'react-hot-toast';
import Browse from "./components/Browse/Browse";

const queryClient = new QueryClient(); // stay OUTSIDE of App()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        {/* <LandingPage /> */}
        <LeftNav />
        <TopNav />
        <div className="sm:ml-24">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/browse" element={<Browse />} />

          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
