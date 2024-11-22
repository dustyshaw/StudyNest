import React, { useState } from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  error: string;
  required: boolean;
  id: string;
  defaultValue: string; // Default empty string if no defaultValue is passed
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void; // Update onChange type
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  error,
  required,
  id,
  defaultValue,
  onChange,
  ...otherProps
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setIsEmpty(newValue.length === 0);
    onChange(event, newValue); // Send the event and the new value to the parent
  };

  const handleFieldTouched = () => {
    setIsTouched(true);
  };

  return (
    <div className="mt-6">
      <label htmlFor={id} className="">{label}</label>
      <input
        type="text"
        className="block w-1/2 bg-white border-gray-400 text-gray-800 focus:ring-navy-550 focus:border-navy-500 placeholder-gray-500 rounded-md px-2 py-1"
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
