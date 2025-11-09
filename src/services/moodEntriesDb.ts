import { supabase } from "./supabaseClient";

export const createMoodEntry = async (
    userId: string,
    mood: string,
    entry: string
) => {
    const { data, error } = await supabase
        .from("mood_entry")
        .insert({
            user_id: userId,
            mood: mood,
            entry: entry,
            date:
                "" +
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate(),
        })
        .select()
        .single();

    if (error) {
        console.error("Error creating mood entry:", error);
        return;
    }

    return data;
};

export const getUserMoodEntries = async (userId: string) => {
    const { data, error } = await supabase
        .from("mood_entry")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: false });

    if (error) {
        console.error("Error fetching user mood entries:", error);
        return;
    }

    return data;
};
