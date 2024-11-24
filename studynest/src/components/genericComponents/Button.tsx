import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button
      className="bg-gray-900 rounded-lg text-white px-5 py-2 m-5 shadow-lg hover:bg-gray-100 border border-transparent hover:border-gray-800 hover:text-gray-900 transition-all hover:shadow-none font-semibold"
        onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
