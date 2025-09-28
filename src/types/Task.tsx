export type Task = {
    id: string;
    taskName: string;
    reward: number;
    variant: "active" | "completed" | "deletable" | "basic";
    iconVariant?: string;
};
