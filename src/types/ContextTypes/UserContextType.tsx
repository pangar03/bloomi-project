import type React from "react";
import type { User } from "../UserType";

export type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type UserContextProviderType = {
    children: React.ReactNode;
};
