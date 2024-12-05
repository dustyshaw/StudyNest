import { FC, ReactNode, useState } from "react";
import { DynamicLayoutContext } from "./DynamicLayoutContext";

export const DynamicLayoutContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const smallWidth = "w-16";
  const largeWidth = "w-48";

  const [navbarWidth, setNavbarWidth] = useState<string>(() => {
    const savedWidth = localStorage.getItem("navbarWidth");
    return savedWidth ? savedWidth : largeWidth;
  });

  const handleNavbarWidthChange = () => {
    const newWidth = navbarWidth === largeWidth ? smallWidth : largeWidth;
    setNavbarWidth(newWidth);
    localStorage.setItem("navbarWidth", newWidth);
  };
  console.log(navbarWidth)

  return (
    <DynamicLayoutContext.Provider
      value={{
        navbarWidth,
        smallWidth,
        largeWidth,
        handleNavbarWidthChange,
      }}
    >
      {children}
    </DynamicLayoutContext.Provider>
  );
};
