import { FC, ReactNode } from 'react';

interface FormLayoutProps {
    children: ReactNode;
}

const FormLayout: FC<FormLayoutProps> = ({ children }) => { 
  return (
    <div>
        {children}
    </div>
  );
}

export default FormLayout;
