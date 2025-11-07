// import React from 'react'
// import Input from "../../components/Input/input"
import NumPad from "../../components/NumPad/NumPad"
// import Button from "../../components/buttons/button"
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../context/PageContext/PageContext";
import Logo from "../../components/Logo/logo";

const PinPage= () => {
    const { currentPage, setCurrentPage } = useContext(PageContext)!;
    const [pinInputValue, setPinInputValue] = useState<string>("");
    useEffect(() => {
        if (currentPage !== "pin") setCurrentPage("pin");
    }, [currentPage, setCurrentPage]);

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex flex-col
            bg-[url(/src/assets/background/fondo.jpg)] md:bg-[url(/src/assets/background/brackground.jpg)]"
        >
            <div className="flex justify-center mt-20 mb-10">
                <Logo variant="white" className="scale-150" />
            </div>
            <div className="mt-auto bg-white rounded-t-4xl shadow-lg p-6 md:p-10 w-full min-h-[60vh] md:min-h-[70vh]">
                <div className="w-full max-w-md mx-auto">
                    <NumPad
                        input={pinInputValue}
                        setInput={setPinInputValue}
                        setPin={() => { /* confirmed PIN; hook action here if needed */ }} />
                </div>
            </div>
        </div>
    );
};

export default PinPage;
