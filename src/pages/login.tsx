// src/pages/Login.tsx
import { useContext, useEffect } from "react";
import BackGround from "../assets/background/background.png"; // ajusta ruta según archivo
import LoginForm from "../components/LoginForm/loginForm";
import { PageContext } from "../context/PageContext/PageContext";

const Login = () => {
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    useEffect(() => {
        if (currentPage !== "login") setCurrentPage("login");
    }, [currentPage, setCurrentPage]);

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex flex-col"
            style={{ backgroundImage: `url(${BackGround})` }}
        >
            <div className="mt-auto bg-white  radius-rounded: 32px shadow-lg p-10 w-full">
                <div className="w-full max-w-md mx-auto">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
