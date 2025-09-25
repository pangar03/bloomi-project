import { useState } from "react";
import TaskCard from "../cards/taskCard/taskCard";

// Definir el tipo de datos para las tareas
type Task = {
    id: string;
    taskName: string;
    reward: number;
    variant: "active" | "completed" | "deletable" | "basic";
    iconVariant?: string;
}


const sampleTasks: Task[] = [];

const TaskList = () => {

    const [tasks, setTasks] = useState(sampleTasks);

    const handleTaskCheck = (taskId: string) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId 
                    ? { ...task, variant: task.variant === "completed" ? "active" : "completed" }
                    : task
            )
        );
    };

    const handleTaskDelete = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            {tasks.map((task) => (
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
