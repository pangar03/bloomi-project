import { supabase } from "./supabaseClient";

export const createGoal = async (description: string, taskId: string) => {
    const goal = Math.floor(Math.random() * 25) + 10; // Random goal between 10 and 35
    const reward = Math.floor((goal / 2) * 10); // Reward is half the goal times 10

    const composedDescription = `Complete the task: ${description} ${goal} times to earn ${reward} coins.`;

    const { error } = await supabase.from("goals").insert({
        description: composedDescription,
        goal,
        reward,
        task_id: taskId,
        user_id: "21d6600b-8b9e-4f9e-894e-06ced9951871",
    });

    if (error) {
        console.error("Error creating goal:", error);
        return error;
    }
};

export const getGoals = async () => {
    const { data, error } = await supabase
        .from("goals")
        .select("*")
        .eq("user_id", "21d6600b-8b9e-4f9e-894e-06ced9951871");

    if (error) {
        console.error("Error fetching goals:", error);
        return [];
    }

    return data;
};

export const completeGoal = async (goalId: string) => {}; // Placeholder for future implementation when having user db

export const progressGoal = async (taskId: string) => {
    const previousProgress = await supabase
        .from("goals")
        .select("progress")
        .eq("task_id", taskId)
        .eq("user_id", "21d6600b-8b9e-4f9e-894e-06ced9951871")
        .single();

    const goalData = await supabase
        .from("goals")
        .select("goal")
        .eq("task_id", taskId)
        .eq("user_id", "21d6600b-8b9e-4f9e-894e-06ced9951871")
        .single();

    const { error } = await supabase
        .from("goals")
        .update({
            progress: previousProgress?.data?.progress + 1,
        })
        .eq("task_id", taskId)
        .eq("user_id", "21d6600b-8b9e-4f9e-894e-06ced9951871")
        .lt("progress", goalData?.data?.goal);

    if (error) {
        console.error("Error progressing goal:", error);
        return error;
    }
};
