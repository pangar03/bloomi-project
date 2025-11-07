import { useContext, useEffect, useState } from "react";
import NumPad from "../../components/NumPad/NumPad";
import Button from "../../components/buttons/button";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setUser } from "../../store/slices/userSlice";

const SettingsPage = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    const [pinInputValue, setPinInputValue] = useState<string>("");
    const [pinValue, setPinValue] = useState<string>("");
    const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentPage !== "settings") setCurrentPage("settings");
    }, []);

    const handleUnlock = () => {
        if (pinValue === user?.pin) {
            setIsUnlocked(true);
            alert("Access granted to settings");
        }
    };

    const handleLogout = () => {
        dispatch(setUser(null));
        setIsUnlocked(false);
        setPinValue("");
        setPinInputValue("");
        navigate("/login");
    };

    useEffect(() => {
        if (pinValue.length === 4) {
            handleUnlock();
        }
    }, [pinValue]);

    return (
        <>
            <div
                className={`${isUnlocked ? "hidden" : ""} lg:w-[60%] lg:rounded-none w-full h-screen overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center lg:px-16 px-4 py-8 bg-white lg:justify-center justify-start`}
            >
                <div className="flex flex-col items-center space-y-12 max-w-md w-full">
                    <div className="text-center space-y-6">
                        <h1 className="lg:text-l text-m font-bold text-black">
                            Enter your parent pin
                        </h1>
                        <h2 className="text-s text-gray-600 leading-relaxed">
                            To access the{" "}
                            <strong className="text-black">
                                settings view
                            </strong>
                        </h2>
                    </div>
                    <div className="w-full flex justify-center">
                        <NumPad
                            input={pinInputValue}
                            setInput={setPinInputValue}
                            setPin={setPinValue}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${isUnlocked ? "lg:w-[60%] lg:rounded-none w-full h-screen overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center justify-center gap-8 lg:px-16 px-8 py-8 bg-white" : "hidden"} `}
            >
                <div className="text-center mb-4">
                    <h1 className="text-l font-bold text-black">Settings</h1>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <Button
                        variant="white"
                        className="w-full"
                        onClick={() => {
                            navigate("/settings/edit-profile");
                        }}
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
                    onClick={handleLogout}
                >
                    Log Out
                </Button>
            </div>
        </>
    );
};

export default SettingsPage;
