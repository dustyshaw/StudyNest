import { useContext } from "react";
import LoginButton from "../../features/LoginBtn";
import { DynamicLayoutContext } from "../../context/DynamicLayoutContext";

const TopNav = () => {
  const layoutContext = useContext(DynamicLayoutContext);
  const marginLeft = "ml-" + layoutContext?.navbarWidth?.slice(2,4);
  
  return (
    <div className={`sm:${marginLeft} w-90 bg-gray-100 flex justify-end`}>
      <LoginButton />
    </div>
  );
};

export default TopNav;
