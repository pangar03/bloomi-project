import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import NumPad from "../../components/NumPad/NumPad";
import Button from "../../components/buttons/button";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
    const { user } = useContext(UserContext); //For now we will be using context
    const [pinInputValue, setPinInputValue] = useState<string>("");
    const [pinValue, setPinValue] = useState<string>("");
    const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPage !== "settings") setCurrentPage("settings");
    }, []);

    const handleUnlock = () => {
        if (pinValue === user?.pin) {
            setIsUnlocked(true);
            alert("Access granted to settings");
        }
    };

    useEffect(() => {
        if (pinValue.length === 4) {
            handleUnlock();
        }
    }, [pinValue]);

    return (
        <>
            <div
                className={`${isUnlocked ? "hidden" : ""} pin-unlock-display w-full flex flex-col gap-16 items-center mx-auto lg:justify-center justify-start h-full bg-white`}
            >
                <div></div>
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="lg:text-l text-m font-bold text-black">
                        Enter your parent pin
                    </h1>
                    <h2 className="text-s text-black">
                        To access the <strong>settings view</strong>
                    </h2>
                    <NumPad
                        input={pinInputValue}
                        setInput={setPinInputValue}
                        setPin={setPinValue}
                    />
                </div>
            </div>
            <div
                className={`${isUnlocked ? "flex flex-col items-center justify-center h-full gap-4 lg:w-[40%] w-full bg-white px-8 mx-auto" : "hidden"} `}
            >
                <div>
                    <div></div>
                    <h1 className="text-l text-center font-bold text-black">
                        Settings
                    </h1>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <Button
                        variant="white"
                        className="w-full"
                        onClick={() => {}}
                    >
                        Edit Account
                    </Button>
                    <Button
                        variant="white"
                        className="w-full"
                        onClick={() => {
                            navigate("/settings/manage-habits");
                        }}
                    >
                        Edit Habits
                    </Button>
                    <Button
                        variant="accent"
                        className="w-full"
                        onClick={() => {
                            navigate("/settings/reports/tasks");
                        }}
                    >
                        Weekly Habits Report
                    </Button>
                    <Button
                        variant="accent"
                        className="w-full"
                        onClick={() => {
                            navigate("/settings/reports/journal");
                        }}
                    >
                        Mood Journal
                    </Button>
                </div>
                <Button
                    variant="red"
                    className="w-full mt-16"
                    onClick={() => {}}
                >
                    Log Out
                </Button>
            </div>
        </>
    );
};

export default SettingsPage;
