import GoalCard from "../cards/goalCard/goalCard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { addCurrency } from "../../store/slices/userSlice";
import { removeGoal } from "../../store/slices/goalListSlice";

type GoalListProps = React.HTMLAttributes<HTMLDivElement>;
const GoalList: React.FC<GoalListProps> = ({ className }) => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    const goals = useSelector((state: RootState) => state.goalListSlice.goals);

    const dispatch = useDispatch();

    const handleGoalCheck = (goalId: string) => {
        const reward = goals.find((goal) => goal.id === goalId)?.reward || 0;
        if (reward > 0) dispatch(addCurrency(reward));
        dispatch(removeGoal(goalId));
    };

    return (
        <div className={`flex flex-col gap-4 p-4 ${className}`}>
            {goals.map((goal) => (
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

// TODO: Integrar con DB
