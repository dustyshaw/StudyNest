import React from "react";

interface DatePickerProps {
  id: string;
  label: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({ id, label, value, onChange, required = false }) => {
  return (
    <div className="mt-6">
      <p>{label}</p>
      <input
        aria-label={label}
        type="datetime-local"
        id={id}
        value={value ? value : ""}
        onChange={onChange}
        required={required}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default DatePicker;
