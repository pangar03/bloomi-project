import Fallxie from "../../assets/pets/naranja.svg";
import FloraBunny from "../../assets/pets/frambuesa.svg";
import CatMora from "../../assets/pets/mora.svg";
import BunnyBerry from "../../assets/pets/fresa.svg";
// URL imports for robust rendering via <img> on mobile
import FallxieUrl from "../../assets/pets/naranja.svg?url";
import FloraBunnyUrl from "../../assets/pets/frambuesa.svg?url";
import CatMoraUrl from "../../assets/pets/mora.svg?url";
import BunnyBerryUrl from "../../assets/pets/fresa.svg?url";
import CircleContainer from "../RoundedContainer/circleContainer";


const petsBackground = {
    Fallxie: "bg-primary-light",
    FloraBunny: "bg-red-light",
    CatMora: "bg-purple-lighter",
    // Fondo central vuelve al rojo original
    BunnyBerry: "bg-red-light",
};

type PetVariant = "BunnyBerry" | "FloraBunny" | "CatMora" | "Fallxie";

interface PetMiniatureProps {
    variant?: PetVariant;
    className?: string;
    context?: "lateral" | "default" | "store";
    usePetSVG?: boolean;       
    petVariant?: PetVariant;    
}


const PETS: Record<PetVariant, React.FC<React.SVGProps<SVGSVGElement>>> = {
    BunnyBerry: BunnyBerry,
    FloraBunny: FloraBunny,
    CatMora: CatMora,
    Fallxie: Fallxie,
};

const PET_URLS: Record<PetVariant, string> = {
    BunnyBerry: BunnyBerryUrl,
    FloraBunny: FloraBunnyUrl,
    CatMora: CatMoraUrl,
    Fallxie: FallxieUrl,
};

const PetMiniature: React.FC<PetMiniatureProps> = ({ 
    variant = "BunnyBerry", 
    className, 
    context = "default",
    usePetSVG = false,
    petVariant = "BunnyBerry"
}) => { 
    const PetComponent = PETS[variant]; 

    console.log("PetMiniature rendering:", { variant, petVariant, usePetSVG, PetComponent: !!PetComponent });

    
    if (usePetSVG) { 
        const PetSVGComponent = PETS[petVariant]; 
        return ( 
            <CircleContainer variant="blue" className={className}>
                <PetSVGComponent width={80} height={80} /> 
            </CircleContainer> 
        ); 
    }

    
    if (context === "lateral") {
        console.log("Lateral context - variant:", variant, "PetComponent exists:", !!PetComponent);
        console.log("Background class:", petsBackground[variant]);
        console.log("Final className:", `${petsBackground[variant]} ${className}`);
        const petUrl = PET_URLS[variant];
        return (
            <div
                className={`${petsBackground[variant]} ${className} relative flex items-center justify-center rounded-full shadow-md min-w-[80px] min-h-[80px] border-[6px] border-red overflow-hidden aspect-square`}
            >
                {/* Anillo interno rojo claro, sin afectar el centro */}
                {variant === "BunnyBerry" && (
                    <span className="absolute inset-[8%] rounded-full border-[12px] border-red-lighter z-0 pointer-events-none"></span>
                )}

                {petUrl ? (
                    <img
                        src={petUrl}
                        alt={variant}
                        className="relative z-10 block w-full h-full object-contain p-[6%]"
                        draggable={false}
                    />
                ) : PetComponent ? (
                    <PetComponent
                        className="relative z-10 block w-full h-full max-w-full max-h-full p-[6%]"
                        preserveAspectRatio="xMidYMid meet"
                    />
                ) : (
                    <div className="relative z-10 w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs text-black font-bold">PET</span>
                    </div>
                )}
            </div>
        );
    }

    

    
    return (
        <div
            className={`${petsBackground[variant]} ${className} flex items-center justify-center rounded-lg shadow-md p-4 border-2 border-accent-darker w-full h-full`}
        >
            <PetComponent className="w-full h-full" />
        </div>
    );
};

export default PetMiniature;
