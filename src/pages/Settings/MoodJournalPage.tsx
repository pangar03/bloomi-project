import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";
import MoodEntry from "../../components/moodEntry/MoodEntry";
import Button from "../../components/buttons/button";
import { useNavigate } from "react-router-dom";

const MoodJournalReportPage = () => {
    const { user } = useContext(UserContext);
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPage !== "settings") setCurrentPage("settings");
    }, [currentPage]);

    return (
        <div className="w-full h-full lg:mx-auto  flex flex-col items-center py-8 lg:bg-white bg-accent">
            <h1 className="text-xl lg:text-black text-white font-bold">
                Mood Journal
            </h1>
            <div className="w-full h-full flex flex-col items-center rounded-t-rounded bg-white mt-8 px-4 py-8 custom-scrollbar overflow-y-scroll">
                {user?.journalEntries.map((entry) => {
                    return <MoodEntry {...entry} />;
                })}
                <Button variant="white" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default MoodJournalReportPage;
