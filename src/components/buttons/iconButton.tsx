import Icon from "../Icon/Icon";
import CircleContainer from "../RoundedContainer/circleContainer";
import type { IconVariant } from "../../types/IconVariants";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: IconVariant;
    onClick?: () => void;
};

const IconButton = ({ variant, onClick, className, ...props }: ButtonProps) => {
    return (
        <button
            className={`bg-none border-none w-fit h-fit`}
            onClick={onClick}
            {...props}
        >
            <CircleContainer
                variant={
                    variant === "LogoutIcon" || variant === "TrashcanIcon"
                        ? "red"
                        : "blue"
                }
            >
                {/* Adjust for responsiveness */}
                <Icon variant={variant} className={` ${className}`} />
            </CircleContainer>
        </button>
    );
};

export default IconButton;
