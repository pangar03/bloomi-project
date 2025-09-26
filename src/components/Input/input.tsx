import { useState } from "react";
import type { InputProps } from "../../types/InputTypes";

const Input = ({ placeholder, type = "text",}: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type={type}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      className="border-2 border-blue-800 rounded-2xl px-4 py-3 text-blue-900 w-full"
    />
  );
};

export default Input;
