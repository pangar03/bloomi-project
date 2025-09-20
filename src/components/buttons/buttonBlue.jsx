import React from "react";

const ButtonBlue = () => {
  return (
    <button
      className="
        bg-accent
        text-white 
        font-bold 
        px-6 py-2 
        rounded-rounded 
        shadow-accent
        active:bg-accent-darker 
        active:shadow-none 
        transition-all 
        duration-150
      "
    >
      Button
    </button>
  );
};

export default ButtonBlue;
