import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-gray-900 rounded-lg text-white px-5 py-2 shadow-lg hover:bg-gray-100 border border-transparent hover:border-gray-800 hover:text-gray-900 transition-all hover:shadow-none font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
