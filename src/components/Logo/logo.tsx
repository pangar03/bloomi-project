import LogoSvg from "../../assets/logo/logo.svg";

type LogoProps = {
  className?: string;
};

const Logo = ({ className = "" }: LogoProps) => {
  const baseClasses = "flex justify-center items-center transition-all duration-150";

  return (
    <div className={`${baseClasses} ${className}`}>
      <LogoSvg className="w-50 h-auto" aria-label="Bloomi Logo" />
    </div>
  );
};

export default Logo;
