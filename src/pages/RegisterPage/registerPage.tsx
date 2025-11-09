import { useContext, useEffect, useState } from "react";
import RegisterForm from "../../components/registerForm/registerForm";
import { PageContext } from "../../context/PageContext/PageContext";
import Logo from "../../components/Logo/logo";
import NumPad from "../../components/NumPad/NumPad";
import { useDispatch } from "react-redux";
import { setPin as setPinInStore } from "../../store/slices/userSlice";
import { CreateUser } from "../../services/authServices";
import { setSession } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext)!;
  const [step, setStep] = useState<"register" | "pin">("register");
  const [pinInputValue, setPinInputValue] = useState<string>("");
  const [pendingEmail, setPendingEmail] = useState<string>("");
  const [pendingPassword, setPendingPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage !== "login") setCurrentPage("login");
  }, [currentPage, setCurrentPage]);

  const handleSetPin = async (pin: string) => {
    if (pin.length !== 4) return;
    try {
      const { session } = await CreateUser(pendingEmail, pendingPassword, pin);
      dispatch(setPinInStore(pin));
      dispatch(setSession(session ?? null));
    } catch (err) {
      console.error("Error creando usuario:", err);
    }
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-cover bg-center flex flex-col bg-white md:bg-[url(/src/assets/background/brackground.jpg)]">
      <div className="hidden md:flex justify-center mt-20 mb-10">
        <Logo variant="white" className="scale-150" />
      </div>
      <div className="mt-[2px] md:mt-auto bg-white rounded-t-4xl shadow-lg p-6 md:p-10 w-full flex-1">
        {step === "register" && (
          <div className="w-full max-w-md mx-auto">
            <RegisterForm
              onRegistered={(email, password) => {
                setPendingEmail(email);
                setPendingPassword(password);
                setStep("pin");
              }}
            />
          </div>
        )}

        {step === "pin" && (
          <>
            <div className="w-64 sm:w-72 md:w-96 mx-auto text-center flex flex-col items-center gap-2 px-4 mt-25">
              <h1 className="w-full text-[24px] sm:text-[28px] md:text-4xl font-bold whitespace-nowrap leading-[30px] sm:leading-[34px]">Create your parent pin</h1>
              <p className="w-full text-[14px] md:text-base text-gray-500 whitespace-nowrap leading-[20px]">
                It will help you access <span className="font-semibold">Parental mode</span>
              </p>
            </div>
            <div className="w-full max-w-md mx-auto mt-6">
              <NumPad input={pinInputValue} setInput={setPinInputValue} setPin={handleSetPin} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
