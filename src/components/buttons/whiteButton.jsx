import React from "react";

const WhiteButton = () => {
  return (
    <button
      className="
        bg-white
        text-black
        font-bold
        px-6 py-2
        rounded-rounded
        shadow-regular
        active:bg-gray-dark
         active:text-white
        border-1 border-black 
        transition-all
        duration-150
      "
    >
      Button
    </button>
  );
};

export default WhiteButton;
