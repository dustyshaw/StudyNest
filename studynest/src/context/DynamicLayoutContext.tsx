import { createContext } from "react";

export interface DynamicLayoutContextInterface {
  navbarWidth: string | undefined;
  largeWidth: string | undefined;
  smallWidth: string | undefined;
  handleNavbarWidthChange: () => void;
}

export const DynamicLayoutContext = createContext<
  DynamicLayoutContextInterface | undefined
>(undefined);
