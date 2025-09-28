import { useState } from "react";
import type { Task } from "../../types/Task";
import TaskList from "../../components/taskList/taskList";
import type { Goal } from "../../types/Goal";
import GoalList from "../../components/goalList/goalList";
import Icon from "../../components/Icon/Icon";
import SquareContainer from "../../components/RoundedContainer/squareContainer";
import IconButton from "../../components/buttons/iconButton";
import NavBar from "../../components/Nav/NavBar";
import Button from "../../components/buttons/button";

function Dashboard() {
    const [taskShown, setTaskShown] = useState<boolean>(true);
    const [coins, setCoins] = useState<number>(0);
    const [taskList, setTaskList] = useState<Task[]>([
        { id: "1", taskName: "Task 1", reward: 10, variant: "active" },
        { id: "2", taskName: "Task 2", reward: 20, variant: "active" },
        { id: "3", taskName: "Task 3", reward: 15, variant: "active" },
        { id: "4", taskName: "Task 4", reward: 5, variant: "active" },
    ]);
    const [goalList, setGoalList] = useState<Goal[]>([]);

    const initialGoals: Goal[] = taskList.map((task) => ({
        trackedTaskId: task.id,
        id: task.id + "goal",
        goalName: `Complete ${task.taskName} 5 times`,
        reward: task.reward * 5,
        goal: 1,
        progress: 0,
    }));

    // Initialize goalList only once
    if (goalList.length === 0) {
        setGoalList(initialGoals);
    }

    return (
        <div className="h-screen w-full flex bg-accent lg:bg-white">
            <NavBar />
            <div className="lg:w-[80%] w-[100%] flex flex-col justify-center lg:flex-row-reverse lg:justify-between items-center ml-auto lg:pl-8">
                <div
                    className="w-[40%] h-screen bg-accent hidden lg:flex lg:flex-col items-end justify-start pt-8 p-32"
                    style={{
                        clipPath:
                            "polygon(20% 0, 100% 0%, 100% 100%, 20% 100%, 0 50%)",
                    }}
                >
                    <SquareContainer
                        variant="coins"
                        className="flex items-center"
                    >
                        <h2 className="text-s text-black font-bold mr-4">
                            {coins}
                        </h2>
                        <Icon variant="CoinIcon" className="w-8  h-8" />
                    </SquareContainer>
                    <div className="h-[40%] aspect-square bg-white rounded-full mx-auto my-auto">
                        <IconButton
                            variant="HangerIcon"
                            className="w-[15%] aspect-square"
                        />
                    </div>
                </div>
                <div className="w-full h-[40%] bg-accent lg:hidden flex flex-col items-end justify-start pt-8 p-8">
                    <SquareContainer
                        variant="coins"
                        className="flex items-center"
                    >
                        <h2 className="text-s text-black font-bold mr-4">
                            {coins}
                        </h2>
                        <Icon variant="CoinIcon" className="w-8  h-8" />
                    </SquareContainer>
                    <div className="w-[60%] aspect-square bg-white rounded-full mx-auto my-auto">
                        <IconButton
                            variant="HangerIcon"
                            className="w-[15%] aspect-square"
                        />
                    </div>
                </div>
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
                            setTaskList={setTaskList}
                            setGoalList={setGoalList}
                            setCoins={setCoins}
                            className="w-full mx-auto mt-10 items-center"
                        />
                    )}
                    {!taskShown && (
                        <GoalList
                            goalList={goalList}
                            setGoalList={setGoalList}
                            setCoins={setCoins}
                            className="w-full mt-10"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
