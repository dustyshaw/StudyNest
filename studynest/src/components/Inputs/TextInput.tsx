import React, { useState } from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  error: string;
  required: boolean;
  id: string;
  defaultValue: string;
  className?: string;
  helperText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  error,
  required,
  id,
  defaultValue,
  onChange,
  className,
  helperText,
  ...otherProps
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setIsEmpty(newValue.length === 0);
    onChange(event, newValue); 
  };

  const handleFieldTouched = () => {
    setIsTouched(true);
  };

  return (
    <div className="mt-6">
      <label htmlFor={id} className="">{label}</label>
      <p className="text-sm text-gray-500 mt-1 mb-1">{helperText}</p>
      <input
        type="text"
        className={`block bg-white border-gray-400 text-gray-800 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-500 rounded-md px-2 py-1 ${className}`}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleFieldTouched}
        placeholder={placeholder}
        required={required}
        {...otherProps}
      />
      {error && isTouched && isEmpty && (
        <div className="error-message text-red-600">* {error}</div>
      )}
    </div>
  );
};

export default TextInput;
