const Button = ({ variant = "primary", children, ...props }) => {
  const baseClasses = `
    font-bold px-6 py-2 rounded-full transition-all duration-150
  `;

  const variants = {
    primary:
      "bg-[#fd8b18] text-white shadow-cta active:bg-[#703800] active:shadow-none",
      accent:
          "bg-[#3aaffe] text-white shadow-accent active:bg-accent-darker",
      red:
          "bg-[#da4447] text-white shadow-red active:bg-[#b12c2e] active:shadow-none",
    white:
      "bg-white text-black border-2 border-black shadow-regular active:bg-[#424242] active:text-white active:shadow-none",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
