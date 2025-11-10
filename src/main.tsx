import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext/UserContext";
import { PageProvider } from "./context/PageContext/PageContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
// Carga del cliente de Supabase para ejecutar comprobaciones de .env
import "./services/supabaseClient";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <UserProvider>
            <PageProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </PageProvider>
        </UserProvider>
    </StrictMode>
);
