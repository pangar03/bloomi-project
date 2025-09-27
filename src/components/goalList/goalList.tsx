import GoalCard from "../cards/goalCard/goalCard";
import type { Goal } from "../../types/Goal";

type GoalListProps = React.HTMLAttributes<HTMLDivElement> & {
    goalList: Goal[];
    setGoalList: React.Dispatch<React.SetStateAction<Goal[]>>;
    setCoins?: React.Dispatch<React.SetStateAction<number>>;
};
const GoalList: React.FC<GoalListProps> = ({
    goalList,
    setGoalList,
    setCoins,
    className,
}) => {
    const handleGoalCheck = (goalId: string) => {
        setGoalList((previous) =>
            previous.filter((goal) => goal.id !== goalId)
        );
        setCoins?.((previous) => {
            const goal = goalList.find((goal) => goal.id === goalId);
            return goal ? previous + goal.reward : previous;
        });
    };

    return (
        <div className={`flex flex-col gap-4 p-4 ${className}`}>
            {goalList.map((goal) => (
                <GoalCard
                    key={goal.id}
                    id={goal.id}
                    trackedTaskId={goal.trackedTaskId}
                    goalName={goal.goalName}
                    reward={goal.reward}
                    progress={goal.progress}
                    goal={goal.goal}
                    onClick={() => handleGoalCheck(goal.id)}
                />
            ))}
        </div>
    );
};

export default GoalList;
