import React from "react";

interface CheckboxProps {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  title: string;
  id: string;
}

const CheckboxInput: React.FC<CheckboxProps> = ({
  value,
  onChange,
  className,
  title,
  id,
}) => {
  return (
    <label>
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e)}
        className={`h-5 w-5 mb-2 me-2 mt-1 rounded-sm dark:bg-gray-700 focus:ring-teal-400 text-teal-600 dark:border-gray-900 dark:focus:ring-offset-black ${className}`}
      />
      {title}
    </label>
  );
};

export default CheckboxInput;
