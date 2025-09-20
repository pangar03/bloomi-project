import React from "react";
import "./App.css";
import "./index.css";
import Button from "./components/buttons/button";


function App() {
    return <>
        <Button variant="primary">Primary Button</Button>
        <Button variant="accent">Accent Button</Button>
        <Button variant="red">Red Button</Button>
        <Button variant="white">White Button</Button>
    </>
        
}

export default App;
