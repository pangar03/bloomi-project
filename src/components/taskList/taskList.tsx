import TaskCard from "../cards/taskCard/taskCard";
import { useDispatch, useSelector } from "react-redux";
import { setDailyTasks, setTasks } from "../../store/slices/taskListSlice";
import type { RootState } from "../../store/store";
import { progressGoal } from "../../store/slices/goalListSlice";
import { addCurrency } from "../../store/slices/userSlice";
import type { Task } from "../../types/Task";

// React.Dispatch<React.SetStateAction<Task[]>> is the type for the setState function on React useState hook
type TaskListProps = React.HTMLAttributes<HTMLDivElement> & {
    taskList: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ taskList, className }) => {
    const daily = useSelector(
        (state: RootState) => state.taskListSlice.dailyTasks
    );
    const basic = useSelector((state: RootState) => state.taskListSlice.tasks);
    const user = useSelector((state: RootState) => state.userSlice.user);

    const dispatch = useDispatch();

    const handleTaskCheck = (taskId: string) => {
        const current = daily.find((t) => t.id === taskId);
        const togglingToCompleted = current?.variant !== "completed";

        const nextDaily = daily.map((task) =>
            task.id === taskId
                ? {
                      ...task,
                      variant:
                          task.variant === "completed"
                              ? "active"
                              : "completed",
                  }
                : task
        );

        dispatch(setDailyTasks(nextDaily));
        dispatch(progressGoal(taskId));

        if (togglingToCompleted) {
            const reward = basic.find((task) => task.id === taskId)?.reward || 0;
            if (reward > 0) dispatch(addCurrency(reward));
        }
    };

    const handleTaskDelete = (taskId: string) => {
        const tempBasic = basic.filter((task) => task.id !== taskId);
        const tempDaily = daily.filter((task) => task.id !== taskId);

        dispatch(setDailyTasks(tempDaily));
        dispatch(setTasks(tempBasic));
    };

    return (
        <div className={`flex flex-col gap-4 p-4 ${className}`}>
            {taskList &&
                taskList.map((task) => (
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
