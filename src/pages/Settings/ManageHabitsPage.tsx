import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import TaskList from "../../components/taskList/taskList";
import type { Task } from "../../types/Task";
import { PageContext } from "../../context/PageContext/PageContext";
import Button from "../../components/buttons/button";
import { useNavigate } from "react-router-dom";
import AddHabitButton from "../../components/buttons/addHabitButton";

const TaskReportPage = () => {
    const { user } = useContext(UserContext);
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPage !== "settings") setCurrentPage("settings");
    }, [currentPage]);

    return (
        <div className="w-full h-full lg:mx-auto  flex flex-col items-center py-8 lg:bg-white bg-accent">
            <h1 className="text-xl lg:text-black text-white font-bold">
                Edit Habits
            </h1>
            <div className="w-full h-full flex flex-col items-center rounded-t-rounded bg-white mt-8 px-4 py-8 custom-scrollbar overflow-y-scroll">
                <AddHabitButton className="mb-4" />
                <TaskList
                    taskList={
                        user?.tasks.map((task) => ({
                            ...task,
                            variant: "deletable",
                        })) || ([] as Task[])
                    }
                    className="w-full flex flex-col h-full gap-4"
                />
                <Button variant="white" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default TaskReportPage;
