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
    <div className={`${hidden ? "hidden" : "flex"} w-full lg:w-[40%] lg:h-screen`}>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col w-full h-full bg-accent items-end justify-start pt-8 px-8">
        <SquareContainer variant="coins" className="flex items-center">
          <h2 className="text-sm text-black font-bold mr-4">{user?.currency}</h2>
          <Icon variant="CoinIcon" className="w-6 h-6" />
        </SquareContainer>

        <CircleContainer
          variant="blue"
          className="relative w-[70%] aspect-square mx-auto mt-8 flex items-center justify-center"
        >
          <PetMiniature variant="BunnyBerry" context="lateral" className="w-[80%] h-[80%]" />

          <div className="absolute top-4 left-4 w-12 h-12 bg-white border-2 border-[#7A59F4] rounded-full shadow-md flex items-center justify-center">
            <Icon variant="HangerIcon" className="w-6 h-6 text-[#7A59F4]" />
          </div>
        </CircleContainer>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col w-full bg-accent items-center justify-start pt-8 px-8">
        <SquareContainer variant="coins" className="flex items-center self-end">
          <h2 className="text-sm text-black font-bold mr-4">{user?.currency}</h2>
          <Icon variant="CoinIcon" className="w-6 h-6" />
        </SquareContainer>

        <CircleContainer
          variant="blue"
          className="relative w-[150px] h-[150px] mt-6 flex items-center justify-center"
        >
          <PetMiniature variant="BunnyBerry" context="lateral" className="w-[85%] h-[85%]" />

          <div className="absolute top-2 left-2 w-10 h-10 bg-white border-2 border-[#7A59F4] rounded-full shadow-md flex items-center justify-center">
            <Icon variant="HangerIcon" className="w-5 h-5 text-[#7A59F4]" />
          </div>
        </CircleContainer>
      </div>
    </div>
  );
};

export default LateralBar;
