import { FC, ReactNode } from "react";
import BackButton from "./BackButton";

interface FormLayoutProps {
  children: ReactNode;
  formTitle?: string;
}

const FormLayout: FC<FormLayoutProps> = ({ children, formTitle }) => {

  return (
    <div className="md:m-8 m-3 p-5">
      <BackButton />
      <h2 className="text-xl mb-5">{formTitle}</h2>
      <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-5">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
