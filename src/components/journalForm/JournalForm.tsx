import { useState } from "react";
import type { MoodDataType } from "../../types/MoodData";
import Emojis from "../MoodEmojis/emojis";
import Button from "../buttons/button";

const JournalForm = ({
    onSubmit,
}: {
    onSubmit: (data: MoodDataType) => void;
}) => {
    const [formData, setFormData] = useState({
        date: new Date(),
        mood: null,
        entry: "",
    } as MoodDataType);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({ ...formData, date: new Date() });
        onSubmit(formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = e.target.value;
        setFormData((prevData) => ({ ...prevData, entry: value }));
    };

    const handleMoodSelect = (mood: MoodDataType["mood"]) => {
        setFormData((prevData) => ({ ...prevData, mood }));
    };

    return (
        <form
            className="w-[20%] min-w-[380px] flex flex-col items-center p-8 bg-accent-darker rounded-rounded"
            onSubmit={handleSubmit}
        >
            <div className="w-full mb-2">
                <h2 className="text-m text-accent-lighter font-semibold">
                    How are you feeling today?
                </h2>
            </div>
            <div className="w-full mb-4 p-4 border-t-1 border-white">
                <input
                    type="text"
                    className="w-full min-h-32 bg-white p-2 rounded-default resize-none focus:outline-none focus:ring-2 focus:ring-accent overflow-y-auto text-wrap"
                    value={formData.entry}
                    onChange={handleChange}
                />
            </div>
            <div className="w-full flex justify-between mb-8">
                {(
                    [
                        "Sadder",
                        "Sad",
                        "Neutral",
                        "Happy",
                        "Happier",
                    ] as MoodDataType["mood"][]
                ).map((mood) => (
                    <button
                        key={mood}
                        type="button"
                        className="w-fit h-fit"
                        onClick={() => handleMoodSelect(mood)}
                    >
                        <Emojis
                            variant={mood || "Neutral"}
                            className={
                                formData.mood === mood
                                    ? "border-4 border-accent-lighter rounded-full"
                                    : ""
                            }
                        />
                    </button>
                ))}
            </div>
            <Button type="submit" variant="primary" className="w-[60%]">
                Save
            </Button>
        </form>
    );
};

export default JournalForm;
