import LogoSvg from "../../assets/logo/logo.svg";

type LogoProps = {
  variant?: "primary" | "white";
  className?: string;
};

const Logo = ({ variant = "primary", className = "" }: LogoProps) => {
  const baseClasses = "flex justify-center items-center transition-all duration-150";
  const variants = {
    primary: "bg-primary p-4 rounded-full",
    white: "bg-white p-4 rounded-full",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <LogoSvg className="w-32 h-auto" aria-label="Bloomi Logo" />
    </div>
  );
};

export default Logo;
