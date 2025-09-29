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
    
    const sizes = {
        small: 60,
        medium: 120, 
        large: 180
    };

    const currentSize = sizes[size];


    
    if (usePetSVG) {
        const PetComponent = PETS[petVariant];
        return (
            <div className={`relative ${className}`}>
                
                <CircleContainer 
                    variant="blue" 
                    className="flex items-center justify-center"
                    style={{ width: currentSize, height: currentSize }}
                >
                    <PetComponent 
                        width={currentSize * 0.7} 
                        height={currentSize * 0.7}
                    />
                    
                   
                    <div className="absolute top-2 right-2">
                        <Icon variant="HangerIcon" className="w-6 h-6" />
                    </div>
                </CircleContainer>
            </div>
        );
    }
};

export default PetDisplay;
