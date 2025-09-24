import Icon from "../Icon/Icon";
import CircleContainer from "../RoundedContainer/circleContainer";
import type { IconVariant } from "../../types/IconVariants";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: IconVariant;
    onClick?: () => void;
};

const IconButton = ({ variant, onClick, ...props }: ButtonProps) => {
    return (
        <button
            className={`bg-none border-none w-fit h-fit`}
            onClick={onClick}
            {...props}
        >
            <CircleContainer>
                {/* Adjust for responsiveness */}
                <Icon variant={variant} className="w-4 h-4" />
            </CircleContainer>
        </button>
    );
};

export default IconButton;
