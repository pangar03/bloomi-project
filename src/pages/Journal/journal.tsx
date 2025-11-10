import { useContext, useEffect } from "react";
import JournalForm from "../../components/journalForm/JournalForm";
import MoodEntry from "../../components/moodEntry/MoodEntry";
import { PageContext } from "../../context/PageContext/PageContext";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

function Journal() {
    const dailyMood = useSelector(
        (state: RootState) => state.moodSlice.dailyMood
    );
    const { currentPage, setCurrentPage } = useContext(PageContext)!;

    useEffect(() => {
        if (currentPage !== "journal") setCurrentPage("journal");
    }, [currentPage, setCurrentPage]);

    return (
        <div className="lg:w-[60%] lg:rounded-none w-full lg:h-screen h-full overflow-y-scroll mx-auto custom-scrollbar flex flex-col items-center lg:px-16 px-4 py-8 mt-8 rounded-t-rounded bg-white">
            <h1 className="lg:text-xl text-lg font-bold text-black mb-6">
                Mood Journal
            </h1>

            <div className="w-full flex justify-center mb-20 lg:mb-0">
                {!dailyMood && <JournalForm />}
                {dailyMood && <MoodEntry {...dailyMood} />}
            </div>
        </div>
    );
}

export default Journal;
