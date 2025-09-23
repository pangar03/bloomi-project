import CoinIcon from "../../assets/icons/coin.svg";
import HomeIcon from "../../assets/icons/home.svg";
import StoreIcon from "../../assets/icons/store.svg";
import JournalIcon from "../../assets/icons/journal.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import HangerIcon from "../../assets/icons/hanger.svg";
import TrashcanIcon from "../../assets/icons/trashcan.svg";
import TargetIcon from "../../assets/icons/target.svg";
import BackwardsIcon from "../../assets/icons/backwards.svg";
import type { IconVariant } from "../../types/IconVariants";

const IconStyles: Record<IconVariant, string> = {

    CoinIcon: "filter drop-shadow-yellow fill-yellow",
    HomeIcon: "stroke-accent hover:cursor-pointer hover:stroke-accent-darker",
    StoreIcon: "stroke-accent hover:cursor-pointer hover:stroke-accent-darker",
    JournalIcon:
        "stroke-accent hover:cursor-pointer hover:stroke-accent-darker",
    SettingsIcon: "fill-accent hover:cursor-pointer hover:fill-accent-darker",
    LogoutIcon: "stroke-red hover:cursor-pointer hover:stroke-red-darker",
    HangerIcon: "stroke-accent hover:cursor-pointer hover:stroke-accent-darker",
    TrashcanIcon: "stroke-red hover:cursor-pointer hover:stroke-red-darker",
    TargetIcon: "stroke-purple",
    BackwardsIcon: "fill-red hover:cursor-pointer hover:fill-red-darker",
};

interface IconProps {
    variant?: IconVariant;
    className?: string;
}

const ICONS: Record<IconVariant, React.FC<React.SVGProps<SVGSVGElement>>> = {
    CoinIcon: CoinIcon,
    HomeIcon: HomeIcon,
    StoreIcon: StoreIcon,
    JournalIcon: JournalIcon,
    SettingsIcon: SettingsIcon,
    LogoutIcon: LogoutIcon,
    HangerIcon: HangerIcon,
    TrashcanIcon: TrashcanIcon,
    TargetIcon: TargetIcon,
    BackwardsIcon: BackwardsIcon,
};

const Icon: React.FC<IconProps> = ({ variant = "CoinIcon", className }) => {
    const IconComponent = ICONS[variant];
    console.log(IconComponent);
    return <IconComponent className={`${className} ${IconStyles[variant]}`} />;
};

export default Icon;
