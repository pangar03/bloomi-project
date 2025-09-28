import type { MoodDataType } from "../../types/MoodData";
import Emojis from "../MoodEmojis/emojis";

const MoodEntry = ({ date, mood = "Neutral", entry }: MoodDataType) => {
    return (
        <>
            <div className="min-w-[30%] flex flex-col items-center lg:ml-16">
                <div className="w-[60%] align-text-left">
                    <h2 className="text-m font-bold">{date.toDateString()}</h2>
                </div>
                <div className="w-[60%] flex-col items-center border-t-2 border-solid border-gray p-4">
                    <Emojis
                        variant={mood ?? undefined}
                        className="flex justify-center"
                    />
                    <div className="text-left text-s mt-4 min-h-[100px] rounded-rounded bg-accent-lighter p-4 text-black">
                        <p className="text-balance break-words p-4">{entry}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoodEntry;
