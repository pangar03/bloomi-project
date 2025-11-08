import TaskCard from "../cards/taskCard/taskCard";
import { useDispatch, useSelector } from "react-redux";
import { setDailyTasks, setTasks } from "../../store/slices/taskListSlice";
import type { RootState } from "../../store/store";
import { progressGoal } from "../../store/slices/goalListSlice";
import { setCurrency } from "../../store/slices/userSlice";
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
        dispatch(
            setDailyTasks(
                daily.map((task) =>
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
            )
        );

        dispatch(progressGoal(taskId));

        dispatch(
            setCurrency(
                (user?.currency || 0) +
                    basic.find((task) => task.id === taskId)?.reward! || 0
            )
        );
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
