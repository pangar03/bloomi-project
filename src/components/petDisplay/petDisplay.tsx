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
    const containerSizeClasses: Record<typeof size, string> = {
        small: "w-[60px] h-[60px]",
        medium: "w-[120px] h-[120px]",
        large: "w-[180px] h-[180px]",
    };

    const petSizeClasses: Record<typeof size, string> = {
        small: "w-[42px] h-[42px]",
        medium: "w-[84px] h-[84px]",
        large: "w-[126px] h-[126px]",
    };


    
    if (usePetSVG) {
        const PetComponent = PETS[petVariant];
        return (
            <div className={`relative ${className}`}>
                
                <CircleContainer 
                    variant="blue" 
                    className={`flex items-center justify-center ${containerSizeClasses[size]}`}
                >
                    <PetComponent className={`${petSizeClasses[size]}`} />
                    
                    
                    <div className="absolute top-2 right-2">
                        <Icon variant="HangerIcon" className="w-6 h-6" />
                    </div>
                </CircleContainer>
            </div>
        );
    }
};

export default PetDisplay;
