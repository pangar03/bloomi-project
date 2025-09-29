import React from "react";
import CircleContainer from "../RoundedContainer/circleContainer";
import Icon from "../Icon/Icon";
import Fallxie from "../../assets/pets/naranja.svg";
import FloraBunny from "../../assets/pets/frambuesa.svg";
import CatMora from "../../assets/pets/mora.svg";
import BunnyBerry from "../../assets/pets/fresa.svg";

type PetVariant = "BunnyBerry" | "FloraBunny" | "CatMora" | "Fallxie";

interface PetDisplayProps {
    className?: string;
    size?: "small" | "medium" | "large";
    usePetSVG?: boolean;
    petVariant?: PetVariant;
}

// Mapeo de mascotas a sus SVGs
const PETS: Record<PetVariant, React.FC<React.SVGProps<SVGSVGElement>>> = {
    BunnyBerry: BunnyBerry,
    FloraBunny: FloraBunny,
    CatMora: CatMora,
    Fallxie: Fallxie,
};

const PetDisplay: React.FC<PetDisplayProps> = ({ 
    className = "", 
    size = "medium",
    usePetSVG = false,
    petVariant = "BunnyBerry"
}) => {
    // Escalas con Tailwind (más grandes que antes)
    const sizes = {
        small: 60,
        medium: 120, // lo agrandé un poco para que se note más
        large: 180
    };

    const currentSize = sizes[size];


    // Si usePetSVG es true, usar el SVG de la mascota
    if (usePetSVG) {
        const PetComponent = PETS[petVariant];
        return (
            <div className={`relative ${className}`}>
                {/* Círculo principal */}
                <CircleContainer 
                    variant="blue" 
                    className="flex items-center justify-center"
                    style={{ width: currentSize, height: currentSize }}
                >
                    <PetComponent 
                        width={currentSize * 0.7} 
                        height={currentSize * 0.7}
                    />
                    
                    {/* Icono de gancho superpuesto */}
                    <div className="absolute top-2 right-2">
                        <Icon variant="HangerIcon" className="w-6 h-6" />
                    </div>
                </CircleContainer>
            </div>
        );
    }
};

export default PetDisplay;
