import { createContext, useState } from "react";
import type {
    PageContextType,
    PageContextProviderType,
} from "../../types/ContextTypes/PageContextType";
import type { Page } from "../../types/Pages";

export const PageContext = createContext<PageContextType | null>(null);

export const PageProvider = ({ children }: PageContextProviderType) => {
    const [currentPage, setCurrentPage] = useState<Page["page"] | null>(null);
    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
};
