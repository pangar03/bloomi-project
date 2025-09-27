import CheckButton from "../../checkButton/checkButton";
import type { Goal } from "../../../types/Goal";
import Icon from "../../Icon/Icon";

type GoalCardProps = React.HTMLAttributes<HTMLDivElement> &
    Goal & {
        onClick: () => void;
    };

const GoalCard = ({
    goalName = "Goal",
    trackedTaskId,
    reward = 100,
    progress = 0,
    goal = 15,
    onClick,
    ...props
}: GoalCardProps) => {
    const variant =
        progress && goal && progress >= goal ? "completed" : "progress";

    return (
        <div
            className="bg-purple-lighter rounded-default p-4 flex items-center max-w-sm justify-between shadow-purple"
            {...props}
        >
            <div className="flex items-center gap-4">
                <Icon variant="TargetIcon" />
                <h3 className="text-base font-medium text-black">{goalName}</h3>
            </div>

            <div className="flex flex-col items-center gap-1">
                {variant === "completed" ? (
                    <CheckButton
                        variant="blue"
                        isChecked={true}
                        onClick={() => {
                            onClick();
                        }}
                    />
                ) : (
                    <span className="text-sm font-medium text-gray-dark">
                        ({`${progress}/${goal}`})
                    </span>
                )}
                <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{reward}</span>
                    <Icon variant="CoinIcon" className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default GoalCard;
