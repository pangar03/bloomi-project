import { useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
  withToggle?: boolean;
};

const Input = ({ label, withToggle = false, type = "text", className = "", ...props }: InputProps) => {



  const isPassword = type === "password";
  const inputType = isPassword && withToggle ? "text" : type;

    
  let initialValue = "";
    if (props.value != null) initialValue = String(props.value);
  else if (props.defaultValue != null) initialValue = String(props.defaultValue);

  const [innerValue, setInnerValue] = useState<string>(initialValue);
  const isControlled = props.value != null;
  const valueToUse = isControlled ? (props.value as string) : innerValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInnerValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-blue-900">{label}</label>}

      <div className="relative">
        <input
          {...props}
          type={inputType}
          value={valueToUse}
          onChange={handleChange}
          className={`border-2 border-blue-800 rounded-2xl px-4 py-3 text-blue-900 w-full ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
