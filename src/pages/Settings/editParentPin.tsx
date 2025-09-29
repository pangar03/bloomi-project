import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import NumPad from "../../components/NumPad/NumPad";
import Button from "../../components/buttons/button";
import Input from "../../components/Input/input";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";


const EditParentPin = () => {
  return (
<>

        <div className={`${isUnlocked ? "hidden" : ""} pin-unlock-display w-full flex flex-col gap-16 items-center mx-auto lg:justify-center justify-start h-full bg-white`}>
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="lg:text-l text-m font-bold text-black">
                        Enter your parent pin
                    </h1>
                    <h2 className="text-s text-black">
                        To access the <strong>settings view</strong>
                    </h2>
                    <NumPad
                        input={pinInputValue}
                        setInput={setPinInputValue}
                        setPin={setPinValue}
                    />
                </div>
            </div>
          <div
          
    </div>

</>
  )
}


export default EditParentPin
