import { useContext } from "react";
import Icon from "../Icon/Icon";
import SquareContainer from "../RoundedContainer/squareContainer";
import CircleContainer from "../RoundedContainer/circleContainer";
import PetMiniature from "../PetMiniature/petMiniature";
import { PageContext } from "../../context/PageContext/PageContext";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const LateralBar = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    const { currentPage } = useContext(PageContext)!;

    const hidden =
        currentPage === "login" ||
        currentPage === "register" ||
        currentPage === "pin" ||
        currentPage === null;

    return (
        <div
            className={`${hidden ? "hidden" : "flex"} 
      flex-col lg:flex-row-reverse 
      w-full lg:w-[40%] 
      lg:h-screen`}
        >
            {/* Desktop */}
            <div className="hidden lg:flex flex-col w-full h-full bg-accent items-end justify-start pt-8 px-8 relative overflow-hidden">
                {/* Curva divisoria */}
                <svg
                    className="absolute -left-[120px] top-0 h-full w-[200px] pointer-events-none z-0"
                    viewBox="0 0 200 800"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 0 L140 0 C180 80 100 180 150 280 C180 340 100 460 150 560 C180 620 100 740 140 800 L0 800 Z"
                        className="fill-white"
                    />
                </svg>

                {/* Monedas */}
                <SquareContainer
                    variant="coins"
                    className="flex items-center self-end z-10"
                >
                    <h2 className="text-sm text-black font-bold mr-4">
                        {user?.currency}
                    </h2>
                    <Icon variant="CoinIcon" className="w-6 h-6" />
                </SquareContainer>

                {/* Mascota */}
                <div className="relative w-[70%] aspect-square mx-auto my-auto -translate-y-[calc(3%+40px)] flex items-center justify-center z-10">
                    <PetMiniature
                        variant={user?.currentPet}
                        context="lateral"
                        className="w-[95%] h-[95%]"
                    />
                    <CircleContainer
                        variant="blue"
                        className="absolute left-0 top-0 translate-x-[14%] translate-y-[14%] z-20 w-14 h-14"
                    >
                        <Icon variant="HangerIcon" className="w-8 h-8" />
                    </CircleContainer>
                </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex flex-col w-full bg-accent items-center justify-start pt-8 pb-6 px-8 rounded-b-[40px]">
                <div className="w-full flex justify-end mb-2">
                    <SquareContainer
                        variant="coins"
                        className="flex items-center -translate-y-12"
                    >
                        <h2 className="text-sm text-black font-bold mr-3">
                            {user?.currency}
                        </h2>
                        <Icon variant="CoinIcon" className="w-5 h-5" />
                    </SquareContainer>
                </div>

                <div className="relative w-[180px] h-[180px] flex items-center justify-center">
                    <PetMiniature
                        variant={user?.currentPet}
                        context="lateral"
                        className="w-[95%] h-[95%]"
                    />
                    <CircleContainer
                        variant="blue"
                        className="absolute left-0 top-0 translate-x-[14%] translate-y-[14%] z-20 w-12 h-12"
                    >
                        <Icon variant="HangerIcon" className="w-7 h-7" />
                    </CircleContainer>
                </div>
            </div>
        </div>
    );
};

export default LateralBar;

// TODO: El hanger no es circle container, es un IconButton, debe tener la funcionalidad de poder cambiar la mascota.