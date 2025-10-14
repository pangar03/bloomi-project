import { useContext } from "react";
import Icon from "../Icon/Icon";
import SquareContainer from "../RoundedContainer/squareContainer";
import CircleContainer from "../RoundedContainer/circleContainer";
import PetMiniature from "../PetMiniature/petMiniature";
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";

const LateralBar = () => {
  const { user } = useContext(UserContext);
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
      <div className="hidden lg:flex flex-col w-full h-full bg-accent items-end justify-start pt-8 px-8">
        <SquareContainer variant="coins" className="flex items-center self-end">
          <h2 className="text-sm text-black font-bold mr-4">{user?.currency}</h2>
          <Icon variant="CoinIcon" className="w-6 h-6" />
        </SquareContainer>

        <div className="relative w-[70%] aspect-square mx-auto mt-8 flex items-center justify-center">
          <PetMiniature variant="BunnyBerry" context="lateral" className="w-[95%] h-[95%]" />
          <CircleContainer variant="blue" className="absolute left-0 top-0 translate-x-[-20%] translate-y-[-20%] z-20 w-12 h-12">
            <Icon variant="HangerIcon" className="w-6 h-6" />
          </CircleContainer>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col w-full bg-accent items-center justify-start pt-8 pb-6 px-8 rounded-b-[40px]">
        <div className="w-full flex justify-end mb-2">
          <SquareContainer variant="coins" className="flex items-center">
            <h2 className="text-sm text-black font-bold mr-3">{user?.currency}</h2>
            <Icon variant="CoinIcon" className="w-5 h-5" />
          </SquareContainer>
        </div>

        <div className="relative w-[180px] h-[180px] flex items-center justify-center">
          <PetMiniature variant="BunnyBerry" context="lateral" className="w-[95%] h-[95%]" />
          <CircleContainer variant="blue" className="absolute left-0 top-0 translate-x-[-20%] translate-y-[-20%] z-20 w-10 h-10">
            <Icon variant="HangerIcon" className="w-5 h-5" />
          </CircleContainer>
        </div>
      </div>
    </div>
  );
};

export default LateralBar;
