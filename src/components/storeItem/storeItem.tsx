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
        className={`rounded-2xl  bg-transparent p-3 flex flex-col items-center ${className}`}

            style={{ width: 200, height: 280 }} 
        >
            <div
                className="w-full flex justify-center items-center rounded-xl mb-3"
                style={{
                    background: "#F7F2FF", 
                    border: "2px solid #7A59F4", 
                    height: "160px",
                }}
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
                    style={{
                        minWidth: 80,
                        fontSize: "1rem",
                        boxShadow: "0px 3px 0px #7A59F4",
                        borderRadius: "1rem",
                        padding: "8px 16px",
                    }}
                >
                    Buy
                </Button>
            </div>
        </div>
    );
};

export default StoreItem;
