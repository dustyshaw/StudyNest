import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import "./index.css";
import LandingPage from "./components/LandingPage";

const queryClient = new QueryClient(); // stay OUTSIDE of App()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  );
}

export default App;
