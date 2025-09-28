import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext/UserContext";
import { PageProvider } from "./context/PageContext/PageContext";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <UserProvider>
            <PageProvider>
                <App />
            </PageProvider>
        </UserProvider>
    </StrictMode>
);
