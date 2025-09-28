import type { Goal } from "./Goal";
import type { Task } from "./Task";

export type User = {
    id: string;
    name: string;
    email: string;
    currentPet: string;
    ownedPets: string[];
    currency: number;
    password: string;
    pin: string;
    tasks: Task[];
    dailyTasks: Task[];
    goals: Goal[];
};

// TODO:
