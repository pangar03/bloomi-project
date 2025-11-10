import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import TaskList from "../../components/taskList/taskList";
import type { Task } from "../../types/Task";
import { PageContext } from "../../context/PageContext/PageContext";
import Button from "../../components/buttons/button";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { parseSupabaseDate } from "../../utils/dateUtil";

const TaskReportPage = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPage !== "settings") setCurrentPage("settings");
    }, [currentPage]);

    return (
        <div className="w-full h-full lg:mx-auto  flex flex-col items-center py-8 lg:bg-white bg-accent">
            <h1 className="text-xl lg:text-black text-white font-bold">
                Weekly Report
            </h1>
            <div className="w-full h-full flex flex-col items-center rounded-t-rounded bg-white mt-8 px-4 py-8 custom-scrollbar overflow-y-scroll">
                <Button variant="white" onClick={() => navigate(-1)}>
                    Back
                </Button>
                {Object.keys(user?.taskRegistry || {}).map((date) => {
                    return (
                        <div key={date} className="mb-4 w-full ">
                            <h2 className="text-m font-bold mb-2">
                                {parseSupabaseDate(date)}
                            </h2>
                            <TaskList
                                taskList={
                                    user?.taskRegistry[date].map((task) => ({
                                        ...task,
                                        variant: "basic",
                                    })) || ([] as Task[])
                                }
                                className="w-fullflex flex-col h-full gap-4"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TaskReportPage;
