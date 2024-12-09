import { Link } from "react-router-dom";
import nofile from "../../src/assets/nothing_here.png";

const FallbackComponent = () => {
  return (
    <div className="w-100 h-screen flex items-center justify-center">
      <div style={{ maxWidth: "600px" }} className="text-center">
        <img src={nofile} className="w-20" />
        <h1 className="text-2xl font-semibold">404 Not Found</h1>
        <p className="mb-3">Try reloading the page</p>
        <Link to={"/"}>
          <span className="text-sky-500 font-semibold underline underline-offset-2 hover:text-sky-600">
            Go home!
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FallbackComponent;
