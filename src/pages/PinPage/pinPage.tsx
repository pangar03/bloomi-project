// import React from 'react'
// import Input from "../../components/Input/input"
import NumPad from "../../components/NumPad/NumPad"
// import Button from "../../components/buttons/button"
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../context/PageContext/PageContext";
import Logo from "../../components/Logo/logo";
import { useDispatch } from "react-redux";
import { setPin as setPinInStore } from "../../store/slices/userSlice";
import { supabase } from "../../services/supabaseClient";
import { useNavigate } from "react-router-dom";

const PinPage= () => {
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const [pinInputValue, setPinInputValue] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (currentPage !== "pin") setCurrentPage("pin");
    }, [currentPage, setCurrentPage]);

    const handleSetPin = async (pin: string) => {
        if (pin.length !== 4) return;
        const { data: userData, error: authError } = await supabase.auth.getUser();
        if (authError) {
            alert(`Error autenticación: ${authError.message ?? authError}`);
            return;
        }
        const user = userData?.user;
        if (!user) {
            alert("No hay usuario autenticado");
            return;
        }

        const { error } = await supabase
            .from("pin")
            .upsert({ user_id: user.id, pin }, { onConflict: "user_id" })
            .select();
        if (error) {
            alert(`Error guardando el PIN: ${error.message ?? error}`);
            // Detenemos el flujo si falla el upsert para evitar
            // actualizar Redux o navegar con un estado inconsistente.
            return;
        }
        dispatch(setPinInStore(pin));
        alert("PIN guardado correctamente");
        navigate("/settings");
    };

    return (
        <div
            className="h-screen w-full overflow-hidden bg-cover bg-center flex flex-col bg-white md:bg-[url(/src/assets/background/brackground.jpg)]"
        >
            <div className="hidden md:flex justify-center mt-20 mb-10">
                <Logo variant="white" className="scale-150" />
            </div>
            <div className="mt-[2px] md:mt-auto bg-white rounded-t-4xl shadow-lg p-6 md:p-10 w-full flex-1">
                <div className="w-64 sm:w-72 md:w-96 mx-auto text-center flex flex-col items-center gap-2 px-4 mt-25">
                    <h1 className="w-full text-[24px] sm:text-[28px] md:text-4xl font-bold whitespace-nowrap leading-[30px] sm:leading-[34px]">Create your parent pin</h1>
                    <p className="w-full text-[14px] md:text-base text-gray-500 whitespace-nowrap leading-[20px]">
                        It will help you access <span className="font-semibold">Parental mode</span>
                    </p>
                </div>
                <div className="w-full max-w-md mx-auto mt-6">
                    <NumPad
                        input={pinInputValue}
                        setInput={setPinInputValue}
                        setPin={handleSetPin} />
                </div>
            </div>
        </div>
    );
};

export default PinPage;
