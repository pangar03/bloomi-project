import { useState } from "react";

type CheckButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    isChecked: boolean;
    onClick: () => void;
    variant?: "default" | "blue";
};

const CheckButton = ({ isChecked, onClick, variant = "default", ...props }: CheckButtonProps) => {
    const [isCheckedState, setIsCheckedState] = useState(isChecked);

    const handleClick = () => {
        setIsCheckedState(!isCheckedState);
        onClick();
    };

    const getButtonStyle = () => {
        if (variant === "blue") {
            return isCheckedState ? "bg-accent shadow-accent" : "bg-accent shadow-accent hover:bg-accent-darker hover:cursor-pointer";
        }
        return isCheckedState ? "bg-gray shadow-regular" : "bg-primary shadow-cta hover:bg-primary-light hover:cursor-pointer";
    };

    return (
        <button
            className={`${getButtonStyle()} rounded-rounded inline-flex items-center p-2.5 gap-2.5`}
            onClick={handleClick}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="10"
                viewBox="0 0 17 12"
                fill="none"
            >
                <path
                    d="M1 6L6 11L16 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default CheckButton;
