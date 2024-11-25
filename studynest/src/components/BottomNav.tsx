import { Link } from "react-router-dom";
import "./BottomNav.modules.scss";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";

const BottomNav = () => {
  return (
    <nav className="bottom-nav fixed bottom-0 left-0 w-screen">
      <ul className="flex flex-row justify-around">
        <li className="nav-item">
          <div className="flex justify-center align-middle flex-col">
            <Link className="" to="/">
              <RectangleGroupIcon />
            </Link>
            <p>Home</p>
          </div>
        </li>
        <li className="nav-item mx-8">
          <div className="flex justify-center align-middle flex-col">
            <Link className="react-link" to="browse">
              <HomeIcon />
            </Link>
            <p>Browse</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
