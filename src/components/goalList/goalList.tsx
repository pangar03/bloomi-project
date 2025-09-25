import { useState } from "react"
import GoalCard from "../cards/goalCard/goalCard"


type Goal = {
    id: string;
    taskName: string;
    reward: number;
    variant: "active" | "completed" | "deletable" | "basic";
    iconVariant?: string;
}

const sampleGoals: Goal[] = [];

const goalList = () => {

    const [goal, setGoal] = useState (sampleGoals);

    const handleGoalCheck = (goalId: string) => {
        setGoal(prevGoal => 
            prevGoal.map(goal => 
                goal.id === goalId 
                    ? { ...goal, variant: goal.variant === "completed" ? "active" : "completed" }
                    : goal
            )
        );
    };

  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
            {goal.map((goal) => (
               <GoalCard/
                
               
               
               
               >
            ))}
        </div>
    </div>
  )
}

export default goalList
