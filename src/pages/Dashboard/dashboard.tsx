import { useContext, useEffect, useState } from "react";
import TaskList from "../../components/taskList/taskList";
import GoalList from "../../components/goalList/goalList";
import Button from "../../components/buttons/button";
import { PageContext } from "../../context/PageContext/PageContext";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function Dashboard() {
    const taskList = useSelector(
        (state: RootState) => state.taskListSlice.dailyTasks
    );
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const [taskShown, setTaskShown] = useState<boolean>(true);

    useEffect(() => {
        if (currentPage !== "dashboard") setCurrentPage("dashboard");
    }, [currentPage, setCurrentPage]);

    return (
        <>
            <div className="lg:w-[60%] lg:rounded-none w-full lg:h-screen overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center lg:px-16 px-4 py-8 rounded-t-rounded bg-white">
                <div className="flex flex-row items-center justify-between w-full mt-8">
                    <h1 className="lg:text-l text-m font-bold text-black">
                        Today
                    </h1>
                    <div className="flex flex-row items-center gap-2">
                        <Button
                            variant={taskShown ? "accent" : "white"}
                            onClick={() => setTaskShown(true)}
                        >
                            Tasks
                        </Button>
                        <Button
                            variant={!taskShown ? "accent" : "white"}
                            onClick={() => setTaskShown(false)}
                        >
                            Goals
                        </Button>
                    </div>
                </div>
                {taskShown && (
                    <TaskList
                        taskList={taskList}
                        className="w-full mx-auto mt-10 items-center mb-20 lg:mb-0"
                    />
                )}
                {!taskShown && (
                    <GoalList className="w-full mt-10 mb-20 lg:mb-0" />
                )}
            </div>
        </>
    );
}

export default Dashboard;
