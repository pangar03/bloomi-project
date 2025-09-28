// src/pages/Login.tsx
import { useContext, useEffect } from "react";
import LoginForm from "../components/LoginForm/loginForm";
import { PageContext } from "../context/PageContext/PageContext";

const Login = () => {
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    useEffect(() => {
        if (currentPage !== "login") setCurrentPage("login");
    }, [currentPage, setCurrentPage]);

    return (
        <div className="min-h-screen w-full bg-cover bg-center flex flex-col">
            <div className="mt-auto bg-white  radius-rounded: 32px shadow-lg p-10 w-full bg-[url(/src/assets/background/background.png)]">
                <div className="w-full max-w-md mx-auto">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
