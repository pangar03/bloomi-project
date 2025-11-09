import { createGoal, progressGoal } from "./goalsDb";
import { supabase } from "./supabaseClient";

export const createTask = async (
    description: string,
    icon: string,
    userId: string
) => {
    const { data, error } = await supabase
        .from("tasks")
        .insert({
            description,
            icon,
            user_id: userId,
        })
        .select()
        .single();

    if (error) {
        console.error("Error creating task:", error);
        return error;
    }

    createGoal(description, data.id, userId);

    return data;
};

export const getTasks = async (userId: string) => {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", userId);

    if (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }

    return data;
};

export const deleteTask = async (taskId: string, userId: string) => {
    const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", taskId)
        .eq("user_id", userId);

    if (error) {
        console.error("Error deleting task:", error);
        return error;
    }

    return data;
};

export const resetDailyTasks = async (userId: string) => {
    const { data, error } = await supabase
        .from("tasks")
        .update({ is_completed: false, date_completed: null })
        .eq("user_id", userId)
        .eq("is_completed", true)
        .neq(
            "date_completed",
            "" +
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate()
        );

    if (error) {
        console.error("Error resetting daily tasks:", error);
        return error;
    }

    return data;
};

export const markTaskAsCompleted = async (taskId: string, userId: string) => {
    const { data, error } = await supabase
        .from("tasks")
        .update({
            is_completed: true,
            date_completed:
                "" +
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate(),
        })
        .eq("id", taskId)
        .eq("user_id", userId)
        .eq("is_completed", false);

    if (error) {
        console.error("Error marking task as completed:", error);
        return error;
    }

    await registerInJournal(taskId, userId);
    await progressGoal(taskId);

    return data;
};

const registerInJournal = async (taskId: string, userId: string) => {
    const { error } = await supabase.from("task_journal").insert({
        task_id: taskId,
        user_id: userId,
        date:
            "" +
            new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate(),
    });

    if (error) {
        console.error("Error registering task in journal:", error);
    }
};

export const getRegisteredTasks = async (userId: string) => {
    const { data, error } = await supabase
        .from("task_journal")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: false });

    if (error) {
        console.error("Error fetching registered tasks:", error);
        return [];
    }

    return data;
};

// TODO: Integrate with auth slice
