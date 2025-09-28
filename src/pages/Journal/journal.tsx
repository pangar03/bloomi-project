import { useContext, useEffect } from "react";
import JournalForm from "../../components/journalForm/JournalForm";
import MoodEntry from "../../components/moodEntry/MoodEntry";
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";

function Journal() {
  const { user } = useContext(UserContext);
  const { currentPage, setCurrentPage } = useContext(PageContext)!;

  useEffect(() => {
    if (currentPage !== "journal") setCurrentPage("journal");
  }, [currentPage, setCurrentPage]);

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full mt-8">
        <h1 className="lg:text-l text-m font-bold text-black">Mood Journal</h1>
      </div>
      <div className="w-full mt-10 flex justify-center">
        {!user?.dailyMood && <JournalForm />}
        {user?.dailyMood && <MoodEntry {...user.dailyMood} />}
      </div>
    </>
  );
}

export default Journal;
