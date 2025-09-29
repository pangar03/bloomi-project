import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import IconButton from "../../components/buttons/iconButton";
import Input from "../../components/Input/input";
import CircleContainer from "../../components/RoundedContainer/circleContainer";

const EditParentPin = () => {
  const { user, setUser } = useContext(UserContext);
  const { currentPage, setCurrentPage } = useContext(PageContext)!;
  const navigate = useNavigate();
  
  const [newPin, setNewPin] = useState<string>(""); 
  const [pinInputValue, setPinInputValue] = useState<string>("");
  const [confirmPin, setConfirmPin] = useState<string>(""); 
  const [step, setStep] = useState<number>(1); 

  useEffect(() => {
    if (currentPage !== "settings") setCurrentPage("settings");
  }, [currentPage, setCurrentPage]);

 //se comparan los pins
  useEffect(() => {
    if (step === 2 && confirmPin.length === 4) {
      if (newPin === confirmPin) {
        // Update user PIN
        if (user && setUser) {
          setUser({ ...user, pin: newPin });
        }
        alert("PIN actualizado exitosamente");
        navigate("/settings/edit-profile");
      } else {
        alert("Los PINs no coinciden. Inténtalo de nuevo.");
        setStep(1);
        setNewPin("");
        setConfirmPin("");
        setPinInputValue("");
      }
    }
  }, [confirmPin, newPin, step, user, setUser, navigate]);

  const handleClick = (key: string) => {
    if (key === "Backspace") {
      setPinInputValue(pinInputValue.slice(0, -1));
    } else {
      pinInputValue.length < 4 && setPinInputValue(pinInputValue + key);
    }
  };

  const handleConfirm = (): void => {
    if (pinInputValue.length === 4) {
      if (step === 1) {
        // Guardar el primer PIN y pasar al paso 2
        setNewPin(pinInputValue);
        setStep(2);
        setPinInputValue("");
      } else {
        // Guardar el PIN de confirmación (la comparación se hace en useEffect)
        setConfirmPin(pinInputValue);
      }
    } else {
      alert("Please enter a 4-digit pin");
    }
  };

  const handleBack = (): void => {
    if (step === 2) {
      setStep(1);
      setConfirmPin("");
      setPinInputValue("");
    } else {
      navigate("/settings/edit-profile");
    }
  };

  return (
    <div className="w-full h-full lg:mx-auto flex flex-col items-center py-8 lg:bg-white bg-accent">
      <h1 className="text-xl lg:text-black text-white font-bold">
        {step === 1 ? "Edit your parent pin" : "Confirm your parent pin"}
      </h1>
      <div className="w-full h-full flex flex-col items-center rounded-t-rounded bg-white mt-8 px-4 py-8 custom-scrollbar overflow-y-scroll">
        <div className="flex flex-col gap-4 items-center lg:w-[40%] w-full max-w-md">
          <p className="text-sm text-gray-600 text-center">
            {step === 1 ? "It will help you access Parental mode" : "Enter the PIN again to confirm"}
          </p>
          
          <div className="flex flex-col gap-4">
            <Input
              type="password"
              pattern="\d{4}"
              maxLength={4}
              required
              value={pinInputValue}
              onChange={(e) => setPinInputValue(e.target.value)}
              placeholder="PIN Input"
            />
            <div className="lg:hidden grid grid-cols-3 gap-4 w-fit mx-auto border-2 border-accent shadow-accent rounded-rounded grid-template-rows-[repeat(4,1fr)] p-8">
              {[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
              ].map((key) => (
                <CircleContainer
                  key={key}
                  onClick={() => handleClick(key)}
                  variant="blue"
                  className="flex items-center justify-center aspect-square text-m font-bold text-accent cursor-pointer select-none"
                >
                  {key}
                </CircleContainer>
              ))}
              <div></div>
              <CircleContainer
                onClick={() => handleClick("0")}
                variant="blue"
                className="flex items-center justify-center aspect-square text-m font-bold text-accent cursor-pointer select-none"
              >
                0
              </CircleContainer>
              <IconButton
                variant="BackwardsIcon"
                className="flex items-center justify-center aspect-square place-self-center cursor-pointer"
                onClick={() => handleClick("Backspace")}
              />
            </div>
            <Button variant="accent" onClick={handleConfirm}>
              Confirm
            </Button>
            <Button variant="white" onClick={handleBack}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditParentPin;
