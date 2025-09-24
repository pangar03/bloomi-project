import CircleContainer from "../../RoundedContainer/circleContainer";
import Icon from "../../Icon/Icon";

type TaskIconVariant = "ToothIcon" | "BookIcon";

type TaskIconProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: TaskIconVariant;
};

const TaskIcon = ({
    variant = "ToothIcon",
    className,
    ...props
}: TaskIconProps) => {
    return (
        <div className={`w-fit h-fit ${className ?? ""}`} {...props}>
            <CircleContainer variant="blueTask">
                <Icon variant={variant} className="w-8 h-8" />
            </CircleContainer>
        </div>
    );
};

export default TaskIcon;
