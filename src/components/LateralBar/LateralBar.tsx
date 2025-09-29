import { useContext } from "react";
import Icon from "../Icon/Icon";
import SquareContainer from "../RoundedContainer/squareContainer";       
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";
import PetMiniature from "../PetMiniature/petMiniature";
import IconButton from "../buttons/iconButton";

const LateralBar = () => {
    const { user } = useContext(UserContext);
    const { currentPage } = useContext(PageContext)!;

    let lateralBarVisibilityClass = "";
    switch (currentPage) {
        case "login":
        case "register":
        case "pin":
            lateralBarVisibilityClass = "hidden";
            break;
        case "dashboard":
        case "store":
            lateralBarVisibilityClass = "flex-col";
            break;
        case "settings":
            lateralBarVisibilityClass = "lg:flex-col lg:flex hidden";
            break;
        case "journal":
            lateralBarVisibilityClass = "flex-col";
            break;
        case null:
            lateralBarVisibilityClass = "hidden";
            break;
        default:
            lateralBarVisibilityClass = "hidden";
            break;
    }

    return (
        <div
            className={`${lateralBarVisibilityClass} lg:w-[40%] w-full h-[40%] lg:h-screen`}
        >
            {/* Versión escritorio */}
            <div
                className="w-full h-full bg-accent hidden lg:flex lg:flex-col items-end justify-start pt-8 px-8"
                style={{
                    clipPath:
                        "polygon(20% 0, 100% 0%, 100% 100%, 20% 100%, 0 50%)",
                }}
            >
                {/* Monedas */}
                <SquareContainer variant="coins" className="flex items-center">
                    <h2 className="text-sm text-black font-bold mr-4">
                        {user?.currency}
                    </h2>
                    <Icon variant="CoinIcon" className="w-6 h-6" />
                </SquareContainer>

                {/* Mascota con hanger */}
                <div className="relative w-[70%] aspect-square bg-[#F47B7B] rounded-full mx-auto mt-30 flex items-center justify-center shadow-md border-4 border-[#F7A6A6]">
                    {/* Mascota */}
                    <PetMiniature
                        variant="BunnyBerry"
                        context="lateral"
                        className="w-[75%] h-[75%]"
                    />
                    {/* Hanger arriba a la izquierda */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white border-2 border-[#7A59F4] rounded-full shadow-md flex items-center justify-center">
                        <Icon variant="HangerIcon" className="w-6 h-6 text-[#7A59F4]" />
                    </div>
                </div>
            </div>

            {/* Versión móvil */}
            <div className="w-full bg-accent lg:hidden flex flex-col items-end justify-start pt-8 px-8">
                {/* Monedas */}
                <SquareContainer variant="coins" className="flex items-center">
                    <h2 className="text-sm text-black font-bold mr-4">
                        {user?.currency}
                    </h2>
                    <Icon variant="CoinIcon" className="w-6 h-6" />
                </SquareContainer>

                {/* Mascota con hanger */}
                <div className="relative w-[60%] md:w-[50%] aspect-square bg-[#F47B7B] rounded-full mx-auto mt-10 flex items-center justify-center shadow-md border-4 border-[#F7A6A6]">
                    <PetMiniature
                        variant="BunnyBerry"
                        context="lateral"
                        className="w-[75%] h-[75%]"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 bg-white border-2 border-[#7A59F4] rounded-full shadow-md flex items-center justify-center">
                        <IconButton
                            variant="HangerIcon"
                            className="w-5 h-5 text-[#7A59F4]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LateralBar;
