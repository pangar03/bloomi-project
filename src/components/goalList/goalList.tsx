import GoalCard from "../cards/goalCard/goalCard";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";

type GoalListProps = React.HTMLAttributes<HTMLDivElement>;
const GoalList: React.FC<GoalListProps> = ({ className }) => {
    const { user, setUser } = useContext(UserContext);

    const handleGoalCheck = (goalId: string) => {
        setUser((previous) =>
            previous
                ? {
                      ...previous,
                      goals: previous.goals.filter(
                          (goal) => goal.id !== goalId
                      ),
                  }
                : previous
        );

        setUser((previous) => {
            const goal = user?.goals.find((goal) => goal.id === goalId);
            if (!previous) return previous;
            return goal
                ? { ...previous, currency: previous.currency + goal.reward }
                : previous;
        });
    };

    return (
        <div className={`flex flex-col gap-4 p-4 ${className}`}>
            {user?.goals.map((goal) => (
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
