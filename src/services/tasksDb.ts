import { toSupabaseDate } from "../utils/dateUtil";
import { createGoal, deleteGoalsByTaskId, progressGoal } from "./goalsDb";
import { supabase } from "./supabaseClient";
import { incrementUserCoins } from "./userDb";

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
        return { error };
    }

    const { goal: goal, error: goalError } = await createGoal(
        description,
        data.id,
        userId
    );

    if (goalError) {
        console.error("Error creating goal for task:", goalError);
        return { error: goalError };
    }

    return { task: data, goal: goal };
};

export const getTaskById = async (taskId: string) => {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", taskId)
        .single();

    if (error) {
        console.error("Error fetching task by ID:", error);
        return null;
    }

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
        .update({ user_id: null })
        .eq("id", taskId)
        .eq("user_id", userId);

    const deleteError = await deleteGoalsByTaskId(taskId);

    if (deleteError) {
        console.error(
            "Error deleting goals associated with task:",
            deleteError
        );
        return deleteError;
    }

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
        .neq("date_completed", toSupabaseDate(new Date()));

    if (error) {
        console.error("Error resetting daily tasks:", error);
        return error;
    }

    return data;
};

export const markTaskAsCompleted = async (taskId: string, userId: string) => {
    const { data: reward, error: rewardError } = await supabase
        .from("tasks")
        .select("reward")
        .eq("id", taskId)
        .eq("user_id", userId)
        .single();

    if (rewardError) {
        console.error("Error fetching task reward:", rewardError);
        return rewardError;
    }

    const { data, error } = await supabase
        .from("tasks")
        .update({
            is_completed: true,
            date_completed: toSupabaseDate(new Date()),
        })
        .eq("id", taskId)
        .eq("user_id", userId)
        .eq("is_completed", false);

    if (error) {
        console.error("Error marking task as completed:", error);
        return error;
    }

    await incrementUserCoins(userId, reward!.reward);
    await registerInJournal(taskId, userId);
    await progressGoal(taskId);

    return data;
};

const registerInJournal = async (taskId: string, userId: string) => {
    const { error } = await supabase.from("task_journal").insert({
        task_id: taskId,
        user_id: userId,
        date: toSupabaseDate(new Date()),
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
