import Fallxie from "../../assets/pets/naranja.svg";
import FloraBunny from "../../assets/pets/frambuesa.svg";
import CatMora from "../../assets/pets/mora.svg";
import BunnyBerry from "../../assets/pets/fresa.svg";
import CircleContainer from "../RoundedContainer/circleContainer";

// Edit: Added a dictionary to map pet variants to background colors using the idea from the pets object in the original code.
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
    usePetSVG?: boolean;        // Nueva: activa el modo SVG de mascota
    petVariant?: PetVariant;    // Nueva: especifica qué mascota mostrar
}

// What does this do: Record: Maps (as a dictionary, search what a dictionary is in programming for more info) the variant names to the imported SVG Components. Basically allows to use a string to select which SVG to render. React.FC means React Functional Component, and React.SVGProps<SVGSVGElement> means the props that an SVG element can take. All this comes from the vite-env.d.ts file and the vite-plugin-svgr plugin. All this to use SVGs as React components instead of images as before.
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

    // If usePetSVG is true, render with CircleContainer
    if (usePetSVG) { 
        const PetSVGComponent = PETS[petVariant]; 
        return ( 
            <CircleContainer variant="blue" className={className}>
                <PetSVGComponent width={80} height={80} /> 
            </CircleContainer> 
        ); 
    }

    // Default rendering for store and other contexts
    if (context === "lateral") {
        return (
            <div className={`${petsBackground[variant]} ${className} flex items-center justify-center rounded-full shadow-md p-2`}>
                <PetComponent className="w-full h-full" />
            </div>
        );
    }

    // Default styling for store and other contexts
    return (
        <div
            className={`${petsBackground[variant]} ${className} flex items-center justify-center rounded-lg shadow-md p-4 border-2 border-accent-darker w-full h-full`}
        >
            <PetComponent className="w-full h-full" />
        </div>
    );
};

export default PetMiniature;
