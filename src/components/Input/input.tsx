import { useState } from "react";

type CustomInputProps = {
  placeholder?: string;
  type?: string;
};

const CustomInput = ({ placeholder, type = "text" }: CustomInputProps) => {
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

export default CustomInput;
