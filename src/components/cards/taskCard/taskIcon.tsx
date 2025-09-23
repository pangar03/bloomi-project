import CircleContainer from "../../RoundedContainer/circleContainer";
import type { IconVariant } from "../../../types/IconVariants";
import Icon from "../../Icon/Icon";

type TaskIconProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: IconVariant;
};

const TaskIcon = ({ variant = "TaskIcon", className, ...props }: TaskIconProps) => {
    return (
        <div className={`w-fit h-fit ${className ?? ""}`} {...props}>
            <CircleContainer variant="blueTask">
                <Icon variant={variant} className="w-8 h-8" />
            </CircleContainer>
        </div>
    );
};

export default TaskIcon;
