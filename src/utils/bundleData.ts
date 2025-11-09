import { useDispatch } from "react-redux";
import { getGoals } from "../services/goalsDb";
import { getUserMoodEntries } from "../services/moodEntriesDb";
import { getUserPets } from "../services/petsDb";
import { supabase } from "../services/supabaseClient";
import { getRegisteredTasks, getTasks } from "../services/tasksDb";
import { getUserByAuthId } from "../services/userDb";
import type { PetVariant } from "../types/PetVariant";
import type { Task } from "../types/Task";
import { setUser, type User } from "../store/slices/userSlice";
import type { MoodDataType } from "../types/MoodData";
import type { Goal } from "../types/Goal";
import { setDailyTasks, setTasks } from "../store/slices/taskListSlice";
import { setDailyMood } from "../store/slices/moodSlice";
import { setGoals } from "../store/slices/goalListSlice";
import type { Dispatch } from "@reduxjs/toolkit";

export const bundleData = async (dispatch: Dispatch) => {
    const authUser = (await supabase.auth.getUser()).data.user?.id;

    const userData = await getUserByAuthId(authUser!);
    const dailyTasks = await getTasks(userData!.id);
    const taskRegistry = await getRegisteredTasks(userData!.id);
    const goals = await getGoals(userData!.id);
    const moodEntries = await getUserMoodEntries(userData!.id);
    const userPets = await getUserPets(userData!.id);

    let formattedTaskRegistry = {} as { [key: string]: Task[] };

    taskRegistry.forEach((task) => {
        const date = task.date_completed;

        formattedTaskRegistry[date] = [
            ...(formattedTaskRegistry[date] || []),
            {
                id: task.id,
                taskName: task.description,
                reward: task.reward,
                variant: task.is_completed ? "completed" : "active",
                iconVariant: task.icon,
            } as Task,
        ];
    });

    const userBundle = {
        name: "Default Name",
        currentPet: userData?.currentPet || ("BunnyBerry" as PetVariant),
        ownedPets: userPets?.map((pet) => pet.name) || [],
        currency: userData?.coins || 0,
        pin: userData?.pin || "",
        taskRegistry: formattedTaskRegistry,
        journalEntries: moodEntries || [],
    } as User;

    const taskBundle = {
        tasks: dailyTasks.map((task) => {
            return {
                id: task.id,
                taskName: task.description,
                reward: task.reward,
                variant: "basic",
                iconVariant: task.icon,
            } as Task;
        }),

        dailyTasks: dailyTasks.map((task) => {
            return {
                id: task.id,
                taskName: task.description,
                reward: task.reward,
                variant: task.is_completed ? "completed" : "active",
                iconVariant: task.icon,
            } as Task;
        }),
    };

    const moodBundle =
        (moodEntries?.find((entry) => {
            const today =
                "" +
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate();
            return entry.date === today;
        }) as MoodDataType) || null;

    const goalsBundle = goals.map((goal) => ({
        id: goal.id,
        trackedTaskId: goal.task_id,
        goalName: goal.description,
        reward: goal.reward,
        progress: goal.progress || 0,
        goal: goal.goal || 0,
    })) as Goal[];

    console.log("TASKKKKS BUNDLE:", taskBundle);

    dispatch(setUser(userBundle));
    dispatch(setTasks(taskBundle.tasks));
    dispatch(setDailyTasks(taskBundle.dailyTasks));
    dispatch(setDailyMood(moodBundle));
    dispatch(setGoals(goalsBundle));

    alert("Data uploaded to the store successfully!");

    return;
};
