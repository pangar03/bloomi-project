import LogoSvg from "../../assets/logo/logo.svg";

type LogoProps = {
  variant?: "primary" | "white";
  className?: string;
};

const Logo = ({ variant = "primary", className = "" }: LogoProps) => {
  const baseClasses = "flex justify-center items-center transition-all duration-150";
  const svgVariants = {
    primary: "text-primary fill-current",
    white: "text-white fill-current",
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      <LogoSvg className={`w-50 h-auto ${svgVariants[variant]}`} aria-label="Bloomi Logo" />
    </div>
  );
};

export default Logo;
