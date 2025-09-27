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
    const sizeClasses = {
        small: "w-16 h-16",
        medium: "w-24 h-24", 
        large: "w-32 h-32"
    };

    return (
        <div className={`relative ${className}`}>
            
            <CircleContainer 
                variant="blue" 
                className={`${sizeClasses[size]} relative overflow-hidden`}
            >
                
                <div className="relative w-full h-full flex items-center justify-center">
                    
                    <div className="absolute bottom-2 w-8 h-6 bg-cream rounded-full"></div>
                    
                   
                    <div className="relative w-12 h-12">
                        
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-red-500 rounded-full">
                            
                            <div className="absolute top-1 left-1 w-1 h-1 bg-pink-200 rounded-full"></div>
                            <div className="absolute top-2 left-3 w-1 h-1 bg-pink-200 rounded-full"></div>
                            <div className="absolute top-1 left-5 w-1 h-1 bg-pink-200 rounded-full"></div>
                            <div className="absolute top-3 left-2 w-1 h-1 bg-pink-200 rounded-full"></div>
                            <div className="absolute top-3 left-4 w-1 h-1 bg-pink-200 rounded-full"></div>
                        </div>
                        
                        
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                            <div className="w-1 h-2 bg-green-600"></div>
                            <div className="absolute -top-1 -left-1 w-2 h-1 bg-green-500 rounded-full transform rotate-45"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-1 bg-green-500 rounded-full transform -rotate-45"></div>
                        </div>
                        
                       
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                            
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-black rounded-full relative">
                                    <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                                </div>
                                <div className="w-2 h-2 bg-black rounded-full relative">
                                    <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                                </div>
                            </div>
                            
                           
                            <div className="w-1 h-1 bg-black transform rotate-45 mx-auto mt-1"></div>
                            
                            
                            <div className="w-2 h-0.5 bg-black rounded-full mx-auto mt-1"></div>
                            
                            
                            <div className="absolute -left-2 top-2 w-1 h-1 bg-pink-300 rounded-full"></div>
                            <div className="absolute -right-2 top-2 w-1 h-1 bg-pink-300 rounded-full"></div>
                            
                            
                            <div className="absolute top-1 left-0 w-0.5 h-0.5 bg-brown-600 rounded-full"></div>
                            <div className="absolute top-2 left-1 w-0.5 h-0.5 bg-brown-600 rounded-full"></div>
                            <div className="absolute top-1 right-0 w-0.5 h-0.5 bg-brown-600 rounded-full"></div>
                        </div>
                        
                        
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-cream rounded-full border border-gray-300">
                            <div className="absolute top-1 left-0.5 w-1 h-1 bg-pink-300 rounded-full transform rotate-45"></div>
                        </div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-cream rounded-full border border-gray-300">
                            <div className="absolute top-1 right-0.5 w-1 h-1 bg-pink-300 rounded-full transform rotate-45"></div>
                        </div>
                    </div>
                </div>
            </CircleContainer>
            
            
            <div className="absolute -top-2 -left-2">
                <CircleContainer variant="blue" className="w-8 h-8">
                    <Icon variant="HangerIcon" className="w-4 h-4" />
                </CircleContainer>
            </div>
        </div>
    );
};

export default PetDisplay;
