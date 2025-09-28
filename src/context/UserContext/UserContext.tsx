import { createContext, useState } from "react";
import type {
    UserContextType,
    UserContextProviderType,
} from "../../types/ContextTypes/UserContextType";
import type { User } from "../../types/UserType";

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
});

export const UserProvider = ({ children }: UserContextProviderType) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
