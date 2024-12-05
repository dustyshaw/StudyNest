import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className? : string;
}

const SecondaryBtn: FC<ButtonProps> = ({children, onClick, className}) => {
  return (
    <button
      className={`bg-gray-50 rounded-lg text-gray-900 px-5 py-2 m-5 shadow hover:bg-gray-100 border border-transparent hover:border-gray-800 hover:text-gray-900 transition-all hover:shadow-none font-semibold ${className}`}
        onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
