import PetDisplay from "../../components/petDisplay/petDisplay";

const TestPetDisplay = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center gap-8 p-8">
            <h1 className="text-2xl font-bold text-black mb-8">PetDisplay Test Page</h1>
            
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-lg font-semibold">BunnyBerry - Small</h2>
                    <PetDisplay 
                        size="small" 
                        usePetSVG={true} 
                        petVariant="BunnyBerry" 
                    />
                </div>
                
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-lg font-semibold">FloraBunny - Medium</h2>
                    <PetDisplay 
                        size="medium" 
                        usePetSVG={true} 
                        petVariant="FloraBunny" 
                    />
                </div>
                
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-lg font-semibold">CatMora - Large</h2>
                    <PetDisplay 
                        size="large" 
                        usePetSVG={true} 
                        petVariant="CatMora" 
                    />
                </div>
                
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-lg font-semibold">Fallxie - Medium</h2>
                    <PetDisplay 
                        size="medium" 
                        usePetSVG={true} 
                        petVariant="Fallxie" 
                    />
                </div>
            </div>
        </div>
    );
};

export default TestPetDisplay;