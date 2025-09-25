import type { MoodDataType } from "../../types/MoodData";
import Emojis from "../MoodEmojis/emojis";

const MoodEntry = ({ date, mood = "Neutral", entry }: MoodDataType) => {
    return (
        <>
            <div className="w-[20%] min-w-[305px] flex-col mb-4">
                <div className="w-[100%] align-text-left">
                    <h2 className="text-m font-bold">{date.toDateString()}</h2>
                </div>
                <div className="flex-col items-center border-t-2 border-solid border-gray p-4">
                    <Emojis
                        variant={mood ?? undefined}
                        className="flex justify-center"
                    />
                    <div className="text-left text-s mt-4 min-h-[100px] rounded-rounded bg-accent-lighter p-4 text-black">
                        <p>{entry}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoodEntry;
