export type Goal = {
    id: string;
    trackedTaskId?: string;
    goalName: string;
    reward: number;
    progress?: number;
    goal?: number;
};
