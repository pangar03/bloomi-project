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
        const pinNumber = Number(pin);
        const { data: userData } = await supabase.auth.getUser();
        const user = userData?.user;

        if (!user) {
            // Sin sesión: guardamos en Redux y navegamos sin bloquear al usuario.
            dispatch(setPinInStore(pin));
            navigate("/dashboard");
            return;
        }

        // La tabla public.pin está vinculada a public.user (id entero).
        // Buscamos el id de public.user por el email del usuario autenticado.
        // Preferimos vincular por id_uuid (auth.users.id)
        const authId = user.id;
        let dbUserId: number | null = null;

        const { data: dbUserByUuid, error: userFetchByUuidError } = await supabase
            .from("user")
            .select("id, id_uuid")
            .eq("id_uuid", authId)
            .limit(1)
            .maybeSingle();

        if (userFetchByUuidError) {
            console.warn("Error buscando usuario por id_uuid en public.user:", userFetchByUuidError.message);
        }

        if (dbUserByUuid?.id) {
            dbUserId = dbUserByUuid.id as number;
        } else {
            const email = user.email;
            if (!email) {
                console.warn("Usuario autenticado sin email; no se puede vincular a public.user");
                dispatch(setPinInStore(pin));
                navigate("/dashboard");
                return;
            }
            const { data: dbUserByEmail, error: userFetchByEmailError } = await supabase
                .from("user")
                .select("id")
                .eq("email", email)
                .limit(1)
                .maybeSingle();
            if (userFetchByEmailError) {
                console.warn("Error buscando usuario por email en public.user:", userFetchByEmailError.message);
            }
            if (dbUserByEmail?.id) {
                dbUserId = dbUserByEmail.id as number;
            }
        }

        if (!dbUserId) {
            console.warn("No se encontró fila en public.user para vincular el PIN");
            dispatch(setPinInStore(pin));
            navigate("/dashboard");
            return;
        }

        // Intento de actualización/insert usando el id entero de public.user
        const { data: existing, error: fetchError } = await supabase
            .from("pin")
            .select("id")
            .eq("user_id", dbUserId)
            .limit(1)
            .maybeSingle();

        if (fetchError) {
            console.warn("Error buscando registro de PIN:", fetchError.message);
        }

        let persistError = null as unknown as Error | null;
        if (existing?.id) {
            const { error: updateError } = await supabase
                .from("pin")
                .update({ pin: pinNumber })
                .eq("user_id", dbUserId);
            persistError = updateError as Error | null;
        } else {
            const { error: insertError } = await supabase
                .from("pin")
                .insert({ user_id: dbUserId, pin: pinNumber });
            persistError = insertError as Error | null;
        }

        if (persistError) {
            console.error("Error guardando el PIN:", persistError);
        }
        dispatch(setPinInStore(pin));
        navigate("/dashboard");
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
