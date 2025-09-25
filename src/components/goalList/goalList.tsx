import { useState } from "react";
import GoalCard from "../cards/goalCard/goalCard";

type Goal = {
    id: string;
    goalName: string;
    reward: number;
    variant: "completed" | "progress";
    progress?: string;
};

const sampleGoals: Goal[] = [];

const GoalList = () => {
    const [goals, setGoals] = useState(sampleGoals);

    const handleGoalCheck = (goalId: string) => {
        setGoals(goals => 
            goals.map(goal => 
                goal.id === goalId 
                    ? { ...goal, variant: goal.variant === "completed" ? "progress" : "completed" }
                    : goal
            )
        );
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            {goals.map((goal) => (
                <GoalCard
                    key={goal.id}
                    variant={goal.variant}
                    goalName={goal.goalName}
                    reward={goal.reward}
                    progress={goal.progress}
                    onClick={() => handleGoalCheck(goal.id)}
                />
            ))}
        </div>
    );
};

export default GoalList;
