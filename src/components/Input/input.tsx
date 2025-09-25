import { useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, type = "text", className = "", ...props }: InputProps) => {
  const start = props.value ?? props.defaultValue ?? "";
  const [inputValue, setInputValue] = useState(String(start));
  const isControlledInput = props.value != null;
  const displayedInputValue = isControlledInput ? String(props.value) : inputValue;

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isControlledInput) setInputValue(e.target.value);
    props.onChange?.(e);
  };

  //Sirve para que TypeScript sepa que e.target es un HTMLInputElement

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-blue-900">{label}</label>}

      <div className="relative">
        <input
          {...props}
          type={type}
          value={displayedInputValue}
          onChange={handleInputChange}
          className={`border-2 border-blue-800 rounded-2xl px-4 py-3 text-blue-900 w-full ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
