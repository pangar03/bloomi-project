import { useContext, useEffect } from "react";
import LoginForm from "../../components/LoginForm/loginForm";
import { PageContext } from "../../context/PageContext/PageContext";
import Logo from "../../components/Logo/logo";

const Login = () => {
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    useEffect(() => {
        if (currentPage !== "login") setCurrentPage("login");
    }, [currentPage, setCurrentPage]);

    return (
      <div
        className="min-h-screen w-full bg-cover bg-center flex flex-col
    bg-[url(/src/assets/background/fondo.jpg)] md:bg-[url(/src/assets/background/brackground.jpg)]"
      >
        <div className="flex justify-center mt-20 mb-10 ">
          <Logo variant="primary" />
        </div>
        <div className="mt-auto bg-white rounded-t-4xl shadow-lg p-6 md:p-10 w-full min-h-[60vh] md:min-h-[70vh]">
          <div className="w-full max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    );
};

export default Login;

