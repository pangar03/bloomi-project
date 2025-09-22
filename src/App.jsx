/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CheckButton from "./components/checkButton/checkButton";
import Button from "./components/buttons/button";

    
function App() {
    return (
        <>
            <CheckButton />
            <Button variant="primary">Login</Button>
            <Button variant="white">Register</Button>
            <Button variant="accent">Continuar</Button>
            <Button variant="red">Eliminar</Button>

        </>
    );
}

export default App;
