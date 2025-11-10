import type { InputProps } from "../../types/InputTypes";

const Input = ({
    placeholder,
    type = "text",
    inputValue,
    setInputValue,
    label,
    className,
    ...rest
}: InputProps) => {
    return (
        <>
            {label && (
                <label className="mb-0.2 text-sm text-accent-darker pl-4 ">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={inputValue}
                onChange={(e) => setInputValue?.(e.target.value)}
                placeholder={placeholder}
                className={`border-2 border-accent-darker rounded-rounded px-4 py-4 text-accent-darker w-full ${className}`}
                {...rest}
            />
        </>
    );
};

export default Input;
