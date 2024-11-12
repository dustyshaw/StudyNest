import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    onClick: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void; // Update onChange type

}

const Button: FC<ButtonProps> = ({children}) => {
  return (
    <button
      className="bg-lilac-400 rounded-lg text-white hover:text-lilac-500 px-5 py-2 m-5 shadow hover:bg-lilac-200 hover:shadow-none"
        onClick={e => e}
    >
      {children}
    </button>
  );
};

export default Button;
