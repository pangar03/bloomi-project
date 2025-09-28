import type { InputProps } from "../../types/InputTypes";

const Input = ({
  placeholder,
  type = "text",
  inputValue,
  setInputValue,
  label,
  className,
  {...rest},
}: InputProps) => {
  
  return (
    <>
      {label && (
        <label className="mb-2 text-sm text-accent-darker pl-4">{label}</label>
      )}
      <input
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue?.(e.target.value)}
        placeholder={placeholder}
        className=`border-2 border-blue-800 rounded-2xl px-4 py-3 text-blue-900 w-full ${className}`
        {...rest}
      />
    </>
  );
};

export default Input;