import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import PetMiniature from "../PetMiniature/petMiniature";
import Button from "../buttons/button";
import { setCurrentPet } from "../../store/slices/userSlice";
import { getUserPets } from "../../services/petsDb";
import { updateUserDisplayedPet } from "../../services/userDb";
import type { SetStateAction } from "react";

type PetVariant = "BunnyBerry" | "FloraBunny" | "CatMora" | "Fallxie";

interface Pet {
    name: string;
    variant: PetVariant;
}

const pets: Pet[] = [
    { name: "Fresa", variant: "BunnyBerry" },
    { name: "Frambuesa", variant: "FloraBunny" },
    { name: "Mora", variant: "CatMora" },
    { name: "Naranja", variant: "Fallxie" },
];

interface PetSelectionModalProps {
    className?: string;
    setModalClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const PetSelectionModal: React.FC<PetSelectionModalProps> = ({
    className,
    setModalClose,
}) => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    const dispatch = useDispatch();

    const handleSelectPet = async (petVariant: PetVariant) => {
        alert(`You have selected ${petVariant} as your pet!`);
        const userPets = await getUserPets(user!.id);
        const pet = userPets?.find((pet) => pet.name === petVariant);
        await updateUserDisplayedPet(user!.id, pet.id);
        dispatch(setCurrentPet(petVariant));
        setModalClose(false);
    };

    return (
        <div
            className={`bg-accent-lighter rounded-xl flex flex-col m-5 shadow p-8 w-90 h-126  mx-auto ${className}`}
        >
            <h2 className="text-center lg:text-xl text-m font-bold mb-4">
                Select Your Pet
            </h2>

            <div className="grid grid-cols-2 gap-4 aspect-square w-[80%] p-8  mx-auto">
                {pets.map((pet) => (
                    <div
                        key={pet.variant}
                        className="flex flex-col items-center"
                    >
                        <PetMiniature variant={pet.variant} />

                        {user?.ownedPets.includes(pet.variant) ? (
                            <Button
                                onClick={() => handleSelectPet(pet.variant)}
                                variant="accent"
                            >
                                Select
                            </Button>
                        ) : (
                            <p>Locked</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetSelectionModal;
