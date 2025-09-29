import Fallxie from "../../assets/pets/naranja.svg";
import FloraBunny from "../../assets/pets/frambuesa.svg";
import CatMora from "../../assets/pets/mora.svg";
import BunnyBerry from "../../assets/pets/fresa.svg";
import CircleContainer from "../RoundedContainer/circleContainer";


const petsBackground = {
    Fallxie: "bg-primary-light",
    FloraBunny: "bg-red-light",
    CatMora: "bg-purple-lighter",
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
        return (
            <div className={`${petsBackground[variant]} ${className} flex items-center justify-center rounded-full shadow-md p-2`}>
                <PetComponent className="w-full h-full" />
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
