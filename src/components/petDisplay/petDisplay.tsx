import React from "react";
import CircleContainer from "../RoundedContainer/circleContainer";
import Icon from "../Icon/Icon";

interface PetDisplayProps {
    className?: string;
    size?: "small" | "medium" | "large";
}

const PetDisplay: React.FC<PetDisplayProps> = ({ 
    className = "", 
    size = "medium" 
}) => {
    // Tamaños más simples
    const sizes = {
        small: 60,
        medium: 80, 
        large: 100
    };

    const currentSize = sizes[size];

    return (
        <div className={`relative ${className}`}>
            {/* Marco circular principal */}
            <CircleContainer 
                variant="blue" 
                className="relative"
                style={{ width: currentSize, height: currentSize }}
            >
                {/* Personaje de fresa usando SVG - mucho más simple */}
                <svg 
                    width={currentSize * 0.8} 
                    height={currentSize * 0.8} 
                    viewBox="0 0 100 100"
                    className="absolute inset-0 m-auto"
                >
                    {/* Cuerpo del personaje */}
                    <circle cx="50" cy="70" r="15" fill="#F5F5DC" />
                    
                    {/* Cabeza */}
                    <circle cx="50" cy="45" r="20" fill="#F5F5DC" />
                    
                    {/* Cabello de fresa */}
                    <ellipse cx="50" cy="35" rx="18" ry="12" fill="#FF6B6B" />
                    
                    {/* Semillas de fresa */}
                    <circle cx="42" cy="30" r="1.5" fill="#FFB3BA" />
                    <circle cx="50" cy="28" r="1.5" fill="#FFB3BA" />
                    <circle cx="58" cy="30" r="1.5" fill="#FFB3BA" />
                    <circle cx="45" cy="35" r="1.5" fill="#FFB3BA" />
                    <circle cx="55" cy="35" r="1.5" fill="#FFB3BA" />
                    
                    {/* Tallo y hojas */}
                    <rect x="49" y="20" width="2" height="8" fill="#4CAF50" />
                    <ellipse cx="45" cy="22" rx="4" ry="2" fill="#4CAF50" transform="rotate(-30 45 22)" />
                    <ellipse cx="55" cy="22" rx="4" ry="2" fill="#4CAF50" transform="rotate(30 55 22)" />
                    
                    {/* Ojos */}
                    <circle cx="45" cy="40" r="3" fill="black" />
                    <circle cx="55" cy="40" r="3" fill="black" />
                    <circle cx="46" cy="39" r="1" fill="white" />
                    <circle cx="56" cy="39" r="1" fill="white" />
                    
                    {/* Nariz */}
                    <polygon points="50,45 48,48 52,48" fill="black" />
                    
                    {/* Boca */}
                    <path d="M 45 52 Q 50 55 55 52" stroke="black" strokeWidth="1" fill="none" />
                    
                    {/* Mejillas */}
                    <circle cx="40" cy="48" r="2" fill="#FFB3BA" />
                    <circle cx="60" cy="48" r="2" fill="#FFB3BA" />
                    
                    {/* Orejas */}
                    <circle cx="35" cy="35" r="6" fill="#F5F5DC" stroke="#DDD" strokeWidth="1" />
                    <circle cx="65" cy="35" r="6" fill="#F5F5DC" stroke="#DDD" strokeWidth="1" />
                    <circle cx="36" cy="36" r="2" fill="#FFB3BA" />
                    <circle cx="64" cy="36" r="2" fill="#FFB3BA" />
                </svg>
            </CircleContainer>
            
            {/* Ícono de colgador */}
            <div className="absolute -top-2 -left-2">
                <CircleContainer variant="blue" className="w-8 h-8">
                    <Icon variant="HangerIcon" className="w-4 h-4" />
                </CircleContainer>
            </div>
        </div>
    );
};

export default PetDisplay;
