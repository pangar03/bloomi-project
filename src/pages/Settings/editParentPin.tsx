import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import NumPad from "../../components/NumPad/NumPad";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setPin } from "../../store/slices/userSlice";

const EditParentPin = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                if (user) {
                    dispatch(setPin(newPin));
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

    const handlePinSet = (pin: string) => {
        if (step === 1) {
            setNewPin(pin);
            setStep(2);
            setPinInputValue("");
        } else {
            setConfirmPin(pin);
        }
    };

    return (
        <div className="w-full flex flex-col gap-16 items-center mx-auto lg:justify-center justify-start h-full bg-white">
            <div></div>
            <div className="flex flex-col gap-4 items-center">
                <h1 className="lg:text-l text-m font-bold text-black">
                    {step === 1
                        ? "Edit your Parent Pin"
                        : "Confirm your Parent Pin"}
                </h1>
                <h2 className="text-s text-black">
                    {step === 1
                        ? "It will help you access Parental mode"
                        : "Please enter your PIN again to confirm"}
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
