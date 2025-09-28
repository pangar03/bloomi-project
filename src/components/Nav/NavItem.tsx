import { useNavigate } from "react-router-dom";
import type { IconVariant } from "../../types/IconVariants";
import IconButton from "../buttons/iconButton";
import SquareContainer from "../RoundedContainer/squareContainer";

type NavAttributes = React.HTMLAttributes<HTMLDivElement> & {
    label?: string;
    navTo?: string;
};

const NavItem = ({ label = "Dashboard", navTo, ...props }: NavAttributes) => {
    const navigate = useNavigate();
    let iconVariant;
    switch (navTo) {
        case "dashboard":
            iconVariant = "HomeIcon" as IconVariant;
            break;
        case "store":
            iconVariant = "StoreIcon" as IconVariant;
            break;
        case "journal":
            iconVariant = "JournalIcon" as IconVariant;
            break;
        case "settings":
            iconVariant = "SettingsIcon" as IconVariant;
            break;
        case "logout":
            iconVariant = "LogoutIcon" as IconVariant;
            break;
        default:
            iconVariant = "HomeIcon" as IconVariant;
            break;
    }

    const handleNavigate = () => {
        if (navTo === "logout") {
            // Implement logout logic here
            console.log("Logging out...");
            navigate("/login");
        } else if (navTo) {
            navigate(`/${navTo}`);
        }
    };

    return (
        <SquareContainer
            variant={iconVariant !== "LogoutIcon" ? "blue" : "red"}
            onClick={handleNavigate}
            className="lg:w-full lg:pl-4 lg:pr-8 lg:py-2.5 lg:justify-start lg:hover:cursor-pointer"
            {...props}
        >
            <IconButton variant={iconVariant} />
            <span
                className={`lg:block hidden ${iconVariant === "LogoutIcon" ? "text-red-dark" : "text-black"} text-lg font-bold ml-2.5`}
            >
                {label}
            </span>
        </SquareContainer>
    );
};

export default NavItem;
