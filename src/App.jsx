/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import CheckButton from "./components/checkButton/checkButton";
import ButtonOrange from "./components/buttons/buttonOrange";
import ButtonBlue from "./components/buttons/buttonBlue";
import WhiteButton from "./components/buttons/whiteButton";
import RedButton from "./components/buttons/redButton";


    
function App() {
    return (
        <>
            <ButtonOrange />
            <ButtonBlue />
            <CheckButton />
            <WhiteButton />
            <RedButton />
            </>
    );
}

export default App;
