import React from "react";
import TaskCard from "../cards/taskCard/taskCard";
import type { Task } from "../../types/Task";
import type { Goal } from "../../types/Goal";

// React.Dispatch<React.SetStateAction<Task[]>> is the type for the setState function on React useState hook
type TaskListProps = React.HTMLAttributes<HTMLDivElement> & {
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
    setGoalList?: React.Dispatch<React.SetStateAction<Goal[]>>;
    setCoins?: React.Dispatch<React.SetStateAction<number>>;
};

const TaskList: React.FC<TaskListProps> = ({
    taskList,
    setTaskList,
    setGoalList,
    setCoins,
    className,
}) => {
    const handleTaskCheck = (taskId: string) => {
        setTaskList((previous) =>
            previous.map((task) =>
                task.id === taskId
                    ? {
                          ...task,
                          variant:
                              task.variant === "completed"
                                  ? "active"
                                  : "completed",
                      }
                    : task
            )
        );
        setGoalList?.((previous) =>
            previous.map((goal) =>
                goal.trackedTaskId === taskId
                    ? {
                          ...goal,
                          progress: goal.progress ? goal.progress + 1 : 1,
                      }
                    : goal
            )
        );
        setCoins?.((previous) => {
            const task = taskList.find((task) => task.id === taskId);
            return task ? previous + task.reward : previous;
        });
    };

    const handleTaskDelete = (taskId: string) => {
        setTaskList((previous) =>
            previous.filter((task) => task.id !== taskId)
        );
    };

    return (
        <div className={`flex flex-col gap-4 p-4 ${className}`}>
            {taskList.map((task) => (
                <TaskCard
                    key={task.id}
                    variant={task.variant}
                    taskName={task.taskName}
                    reward={task.reward}
                    onCheck={() => handleTaskCheck(task.id)}
                    onDelete={() => handleTaskDelete(task.id)}
                />
            ))}
        </div>
    );
};

export default TaskList;
