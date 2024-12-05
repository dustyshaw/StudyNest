import { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import { DynamicLayoutContext } from "../../context/DynamicLayoutContext";

const LeftNav = () => {
  const layoutContext = useContext(DynamicLayoutContext);

  const handleNavbarWidthChange = () => {
    layoutContext?.handleNavbarWidthChange();
  };


  return (
    <>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 ${layoutContext?.navbarWidth} h-screen transition-transform -translate-x-full sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-navy-700">
          <ul className="space-y-2 font-medium">
            <li>
              <span
                onClick={handleNavbarWidthChange}
                className="flex items-center p-2 text-navy-100 rounded-lg hover:bg-navy-600 group text-sm"
              >
                <ChevronLeftIcon
                  className={`w-4 h-4 text-gray-100 transition duration-75  group-hover:text-navy-900 ${
                    layoutContext?.navbarWidth === layoutContext?.largeWidth
                      ? "block"
                      : "hidden"
                  }`}
                />
                <ChevronRightIcon
                  className={`w-4 h-4 text-gray-100 transition duration-75  group-hover:text-navy-900 ${
                    layoutContext?.navbarWidth === layoutContext?.smallWidth
                      ? "block"
                      : "hidden"
                  }`}
                />
              </span>
            </li>
            <li className="pt-8">
              <Link to={"/"}>
                <span className="flex items-center p-2 text-navy-100 rounded-lg hover:bg-navy-600 group">
                  <HomeIcon className="w-5 h-5 text-gray-100 transition duration-75  group-hover:text-navy-900" />
                  <span
                    className={`ms-3 ${
                      layoutContext?.navbarWidth === layoutContext?.largeWidth
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    Home
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link to={"/browse"}>
                <span className="flex items-center p-2 text-navy-100 rounded-lg hover:bg-navy-600 group">
                  <RectangleGroupIcon className="w-5 h-5 text-gray-100 transition duration-75  group-hover:text-navy-900" />
                  <span
                    className={`ms-3 ${
                      layoutContext?.navbarWidth === layoutContext?.largeWidth
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    Browse
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default LeftNav;
