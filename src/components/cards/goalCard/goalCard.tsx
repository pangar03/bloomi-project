import CheckButton from "../../checkButton/checkButton";
import Icon from "../../Icon/Icon";

type GoalCardProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: "completed" | "progress";
    goalName?: string;
    reward?: number;
    progress?: string;
};

const GoalCard = ({
    variant = "completed",
    goalName = "Goal",
    reward = 100,
    progress = "0/15",
    ...props
}: GoalCardProps) => {
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
                        onClick={() => {}}
                    />
                ) : (
                    <span className="text-sm font-medium text-gray-dark">
                        ({progress})
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
