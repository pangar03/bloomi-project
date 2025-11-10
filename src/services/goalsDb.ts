import { supabase } from "./supabaseClient";
import { incrementUserCoins } from "./userDb";

export const createGoal = async (
    description: string,
    taskId: string,
    userId: string
) => {
    const goal = Math.floor(Math.random() * 25) + 10; // Random goal between 10 and 35
    const reward = Math.floor((goal / 2) * 10); // Reward is half the goal times 10

    const composedDescription = `Complete the task: ${description} ${goal} times to earn ${reward} coins.`;

    const { data, error } = await supabase
        .from("goals")
        .insert({
            description: composedDescription,
            goal,
            reward,
            task_id: taskId,
            user_id: userId,
        })
        .select()
        .single();

    if (error) {
        console.error("Error creating goal:", error);
        return { error };
    }

    return { goal: data };
};

export const getGoals = async (userId: string) => {
    const { data, error } = await supabase
        .from("goals")
        .select("*")
        .eq("user_id", userId);

    if (error) {
        console.error("Error fetching goals:", error);
        return [];
    }

    return data;
};

export const completeGoal = async (goalId: string, userId: string) => {
    const reward = await supabase
        .from("goals")
        .select("reward")
        .eq("id", goalId)
        .single();

    if (reward.error) {
        console.error("Error fetching reward:", reward.error);
        return;
    }

    await incrementUserCoins(userId, reward.data.reward);

    const { error } = await supabase.from("goals").delete().eq("id", goalId);

    if (error) {
        console.error("Error completing goal:", error);
        return;
    }
};

export const progressGoal = async (taskId: string) => {
    const previousProgress = await supabase
        .from("goals")
        .select("progress")
        .eq("task_id", taskId)
        .single();

    const goalData = await supabase
        .from("goals")
        .select("goal")
        .eq("task_id", taskId)
        .single();

    const { error } = await supabase
        .from("goals")
        .update({
            progress: previousProgress?.data?.progress + 1,
        })
        .eq("task_id", taskId)
        .lt("progress", goalData?.data?.goal);

    if (error) {
        console.error("Error progressing goal:", error);
        return error;
    }
};

export const deleteGoalsByTaskId = async (taskId: string) => {
    const { error } = await supabase
        .from("goals")
        .delete()
        .eq("task_id", taskId);

    if (error) {
        console.error("Error deleting goals by task ID:", error);
    }

    return error;
};
