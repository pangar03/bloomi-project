import Fallxie from "../../assets/pets/naranja.svg";
import FloraBunny from "../../assets/pets/frambuesa.svg";
import CatMora from "../../assets/pets/mora.svg";
import BunnyBerry from "../../assets/pets/fresa.svg";

// Edit: Added a dictionary to map pet variants to background colors using the idea from the pets object in the original code.
const petsBackground = {
    Fallxie: "bg-primary-light",
    FloraBunny: "bg-red-light",
    CatMora: "bg-purple-lighter",
    BunnyBerry: "bg-red-light",
};

type PetVariant = "BunnyBerry" | "FloraBunny" | "CatMora" | "Fallxie";

// Props that the PetMiniature component can receive. variant is the type of pet to display, className is an optional CSS class to apply to the SVG element.
interface PetMiniatureProps {
    variant?: PetVariant;
    className?: string;
    context?: "store" | "lateral" | "default"; // New prop to handle different display contexts
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
}) => {
    const PetComponent = PETS[variant];

    // Different styling based on context
    if (context === "lateral") {
        // Simplified styling for lateral bar - just the SVG without background container
        return (
            <div className={`flex items-center justify-center ${className}`}>
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
