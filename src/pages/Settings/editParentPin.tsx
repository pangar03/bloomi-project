import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import NumPad from "../../components/NumPad/NumPad";

const EditParentPin = () => {
  const { user, setUser } = useContext(UserContext);
  const { currentPage, setCurrentPage } = useContext(PageContext)!;
  const navigate = useNavigate();
  
  const [newPin, setNewPin] = useState<string>(""); // estado del PIN que se está creando
  const [pinInputValue, setPinInputValue] = useState<string>(""); // Valor actual del input
  const [confirmPin, setConfirmPin] = useState<string>(""); // PIN de confirmación
  const [step, setStep] = useState<number>(1); //pasos de confirmacion del pin

  useEffect(() => {
    if (currentPage !== "settings") setCurrentPage("settings");
  }, [currentPage, setCurrentPage]);

  // Efecto para comparar PINs cuando confirmPin se actualiza
  useEffect(() => {
    if (step === 2 && confirmPin.length === 4 && newPin.length === 4) {
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
  }, [confirmPin, newPin, step]);

  // Función para manejar cuando NumPad establece el PIN
  const handlePinSet = (pin: string) => {
    if (step === 1) {
      // Guardar el primer PIN y pasar al paso 2
      setNewPin(pin);
      setStep(2);
      setPinInputValue("");
    } else {
      // Guardar el PIN de confirmación (la comparación se hace en useEffect)
      setConfirmPin(pin);
    }
  };


  return (
    <div className="w-full flex flex-col gap-16 items-center mx-auto lg:justify-center justify-start h-full bg-white">
      <div></div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="lg:text-l text-m font-bold text-black">
          {step === 1 ? "Edit your Parent Pin" : "Confirm your Parent Pin"}
        </h1>
        <h2 className="text-s text-black">
          {step === 1 
            ? "It will help you access Parental mode" 
            : "Please enter your PIN again to confirm"
          }
        </h2>
        <NumPad
          input={pinInputValue}
          setInput={setPinInputValue}
          setPin={handlePinSet}
        />

      </div>
    </div>
  );
};

export default EditParentPin;
