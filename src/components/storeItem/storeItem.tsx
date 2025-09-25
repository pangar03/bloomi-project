import PetMiniature from "../PetMiniature/petMiniature";
import Button from "../buttons/button";
import '../../assets/icons/coin.svg'

interface StoreItemProps {
    petVariant?: "BunnyBerry" | "FloraBunny" | "CatMora" | "Fallxie";
    price: number;
    onBuy?: () => void;
    className?: string;
}

const StoreItem: React.FC<StoreItemProps> = ({
    petVariant = "CatMora",
    price,
    onBuy,
    className,
})