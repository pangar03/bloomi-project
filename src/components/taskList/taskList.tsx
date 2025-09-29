import React, { useContext } from "react";
import TaskCard from "../cards/taskCard/taskCard";
import type { Task } from "../../types/Task";
import { UserContext } from "../../context/UserContext/UserContext";

// React.Dispatch<React.SetStateAction<Task[]>> is the type for the setState function on React useState hook
type TaskListProps = React.HTMLAttributes<HTMLDivElement> & {
    taskList: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ taskList, className }) => {
    const { setUser } = useContext(UserContext);

    const handleTaskCheck = (taskId: string) => {
        setUser((previous) => {
            if (!previous) return previous;
            return {
                ...previous,
                dailyTasks: previous.dailyTasks.map((task) =>
                    task.id === taskId
                        ? {
                              ...task,
                              variant:
                                  task.variant === "completed"
                                      ? "active"
                                      : "completed",
                          }
                        : task
                ),
            };
        });
        setUser?.((previous) => {
            if (!previous) return previous;
            return {
                ...previous,
                goals: previous.goals.map((goal) =>
                    goal.trackedTaskId === taskId
                        ? {
                              ...goal,
                              progress: goal.progress ? goal.progress + 1 : 1,
                          }
                        : goal
                ),
            };
        });
        setUser?.((previous) => {
            if (!previous) return previous;
            const task = taskList.find((task) => task.id === taskId);
            return task
                ? {
                      ...previous,
                      currency: (previous.currency || 0) + task.reward,
                  }
                : previous;
        });
    };

    const handleTaskDelete = (taskId: string) => {
        setUser?.((previous) =>
            previous
                ? {
                      ...previous,
                      tasks: previous.tasks.filter(
                          (task) => task.id !== taskId
                      ),
                      dailyTasks: previous.dailyTasks.filter(
                          (task) => task.id !== taskId
                      ),
                  }
                : previous
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
