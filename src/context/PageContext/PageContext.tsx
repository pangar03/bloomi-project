import { createContext, useState, useEffect } from "react";
import type {
    PageContextType,
    PageContextProviderType,
} from "../../types/ContextTypes/PageContextType";
import type { Page } from "../../types/Pages";

export const PageContext = createContext<PageContextType | null>(null);

export const PageProvider = ({ children }: PageContextProviderType) => {
    const [currentPage, setCurrentPage] = useState<Page["page"] | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px es el breakpoint md de Tailwind
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const getHomePage = (): Page["page"] => {
        return isMobile ? "start" : "login";
    };

    return (
        <PageContext.Provider value={{ 
            currentPage, 
            setCurrentPage, 
            isMobile, 
            getHomePage 
        }}>
            {children}
        </PageContext.Provider>
    );
};
