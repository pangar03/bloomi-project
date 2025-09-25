import PetMiniature from "../PetMiniature/petMiniature";
import Button from "../buttons/button";
import CoinIcon from '../../assets/icons/coin.svg'; // si tu config lo permite

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
            className={`rounded-2xl border-2 border-accent-darker bg-purple-lighter p-4 flex flex-col items-center ${className}`}
            style={{ width: 320 }} // Puedes ajustar el width según tu diseño
        >
            <div
                className="w-full flex justify-center items-center rounded-xl mb-4"
                style={{
                    background: "#F7F2FF", // fondo lila claro
                    border: "2px solid #7A59F4", // acento morado
                    minHeight: "220px",
                }}
            >
                <PetMiniature variant={petVariant} className="w-48 h-48" />
            </div>
            <div className="w-full flex items-center justify-between mt-2 px-2">
                <div className="flex items-center gap-1">
                    <span className="text-black text-3xl font-bold">{price}</span>
                    <span
                        className="rounded-full bg-yellow-200 flex items-center justify-center"
                        style={{ width: 35, height: 35 }}
                    >
                        {/* Usando CoinIcon como componente SVG */}
                        <CoinIcon width={22} height={22} />
                    </span>
                </div>
                <Button
                    variant="accent"
                    onClick={onBuy}
                    style={{
                        minWidth: 120,
                        fontSize: "1.35rem",
                        boxShadow: "0px 4px 0px #7A59F4",
                        borderRadius: "1.5rem",
                    }}
                >
                    Buy
                </Button>
            </div>
        </div>
    );
};

export default StoreItem;
