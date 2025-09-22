import { useState } from "react";

const CheckButton = ({ isChecked, onClick }) => {
    const [isCheckedState, setIsCheckedState] = useState(isChecked);

    const handleClick = () => {
        setIsCheckedState(!isCheckedState);
        onClick();
    };

    return (
        <button
            className={`${isCheckedState ? "bg-gray shadow-regular" : "bg-primary shadow-cta hover:bg-primary-light hover:cursor-pointer"} rounded-rounded inline-flex items-center p-2.5 gap-2.5`}
            onClick={handleClick}
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
