import { useContext } from "react";
import IconButton from "../buttons/iconButton";
import Icon from "../Icon/Icon";
import SquareContainer from "../RoundedContainer/squareContainer";
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";

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
            <div
                className="w-full h-full bg-accent hidden lg:flex lg:flex-col items-end justify-start pt-8 p-32 md:p-8"
                style={{
                    clipPath:
                        "polygon(20% 0, 100% 0%, 100% 100%, 20% 100%, 0 50%)",
                }}
            >
                <SquareContainer variant="coins" className="flex items-center">
                    <h2 className="text-s text-black font-bold mr-4">
                        {user?.currency}
                    </h2>
                    <Icon variant="CoinIcon" className="w-8  h-8" />
                </SquareContainer>
                <div className="h-[40%] aspect-square bg-white rounded-full mx-auto my-auto">
                    <IconButton
                        variant="HangerIcon"
                        className="w-[15%] aspect-square"
                    />
                </div>
            </div>
            <div className="w-full bg-accent lg:hidden flex flex-col items-end justify-start pt-8 p-8">
                <SquareContainer variant="coins" className="flex items-center">
                    <h2 className="text-s text-black font-bold mr-4">
                        {user?.currency}
                    </h2>
                    <Icon variant="CoinIcon" className="w-8  h-8" />
                </SquareContainer>
                <div className="w-[60%] md:w-[20%] aspect-square bg-white rounded-full mx-auto my-auto">
                    <IconButton
                        variant="HangerIcon"
                        className="w-[15%] aspect-square"
                    />
                </div>
            </div>
        </div>
    );
};

export default LateralBar;

// TODO: Add pet display with displayed pet
