import { useContext, useEffect } from "react";
import RegisterForm from "../../components/registerForm/registerForm";
import { PageContext } from "../../context/PageContext/PageContext";
import Logo from "../../components/Logo/logo";

const Register = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext)!;
  useEffect(() => {
    if (currentPage !== "login") setCurrentPage("login");
  }, [currentPage, setCurrentPage]);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col
    bg-[url(/src/assets/background/fondo.jpg)] md:bg-[url(/src/assets/background/brackground.jpg)]"
    >
      <div className="flex justify-center mt-20 mb-10">
        <Logo variant="primary" className="scale-150" />
      </div>
      <div className="mt-auto bg-white rounded-t-4xl shadow-lg p-6 md:p-10 w-full min-h-[60vh] md:min-h-[70vh]">
        <div className="w-full max-w-md mx-auto">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
