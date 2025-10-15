import PetMiniature from "../PetMiniature/petMiniature";
import Button from "../buttons/button";
import Icon from "../Icon/Icon"; 

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
}) => {
    return (
        <div
            className={`rounded-2xl bg-transparent p-3 flex flex-col items-center w-[200px] h-[280px] ${className}`}
        >
            <div
                className="w-full flex justify-center items-center rounded-xl mb-3 bg-[#F7F2FF] border-2 border-[#004D81] h-[160px]"
            >
                <PetMiniature variant={petVariant} className="w-32 h-32" />
            </div>
            <div className="w-full flex items-center justify-between px-2">
                <div className="flex items-center gap-1">
                    <span className="text-black text-lg font-bold">{price}</span>
                    <Icon variant="CoinIcon" className="w-6 h-6" />
                </div>
                <Button
                    variant="accent"
                    onClick={onBuy}
                    className="min-w-[80px] text-base shadow-[0_3px_0_#7A59F4] !rounded-2xl !px-4 !py-2"
                >
                    Buy
                </Button>
            </div>
        </div>
    );
};

export default StoreItem;
