import TaskCard from "../cards/taskCard/taskCard";
import { useDispatch, useSelector } from "react-redux";
import { setDailyTasks, setTasks } from "../../store/slices/taskListSlice";
import type { RootState } from "../../store/store";
import { progressGoal, removeGoal } from "../../store/slices/goalListSlice";
import { addTaskToRegistry, setCurrency } from "../../store/slices/userSlice";
import type { Task } from "../../types/Task";
import { deleteTask, markTaskAsCompleted } from "../../services/tasksDb";
import { toSupabaseDate } from "../../utils/dateUtil";
import type { IconVariant } from "../../types/IconVariants";

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
    const goals = useSelector((state: RootState) => state.goalListSlice.goals);

    const dispatch = useDispatch();

    const handleTaskCheck = async (taskId: string) => {
        await markTaskAsCompleted(taskId, user!.id);

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

        dispatch(
            addTaskToRegistry({
                date: toSupabaseDate(new Date()),
                task: basic.find((task) => task.id === taskId)!,
            })
        );

        dispatch(progressGoal(taskId));

        dispatch(
            setCurrency(
                (user?.currency || 0) +
                    basic.find((task) => task.id === taskId)?.reward! || 0
            )
        );
    };

    const handleTaskDelete = async (taskId: string) => {
        const tempBasic = basic.filter((task) => task.id !== taskId);
        const tempDaily = daily.filter((task) => task.id !== taskId);

        await deleteTask(taskId, user!.id);
        dispatch(setDailyTasks(tempDaily));
        dispatch(setTasks(tempBasic));

        const designatedGoal = goals.find(
            (goal) => goal.trackedTaskId === taskId
        );
        if (designatedGoal) {
            dispatch(removeGoal(designatedGoal.id));
        }
    };

    return (
        <div className={`flex flex-col gap-4 p-4 ${className}`}>
            {taskList &&
                taskList.map((task) => (
                    <TaskCard
                        icon={task.iconVariant as IconVariant}
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
