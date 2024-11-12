import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button
      className="bg-lilac-400 rounded-lg text-white px-5 py-2 m-5 shadow hover:bg-lilac-300 hover:text-lilac-700 transition-all hover:shadow-none font-semibold"
        onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
