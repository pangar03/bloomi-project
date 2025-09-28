import type { Page } from "../Pages";

export type PageContextType = {
    currentPage: Page["page"] | null;
    setCurrentPage: React.Dispatch<React.SetStateAction<Page["page"] | null>>;
};

export type PageContextProviderType = {
    children: React.ReactNode;
};
