import PetMiniature from "../PetMiniature/petMiniature";
import Button from "../buttons/button";

type PetVariant = "BunnyBerry" | "FloraBunny" | "CatMora" | "Fallxie";

interface Pet {
  name: string;
  variant: PetVariant;
  locked: boolean;
}

const pets: Pet[] = [
  { name: "Fresa", variant: "BunnyBerry", locked: false },
  { name: "Frambuesa", variant: "FloraBunny", locked: false },
  { name: "Mora", variant: "CatMora", locked: true },
  { name: "Naranja", variant: "Fallxie", locked: true },
];

const PetSelectionModal: React.FC = () => {
  return (
    <div className="bg-blue-100 rounded-xl shadow p-6 w-96 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">Select Your Pet</h2>

      <div className="grid grid-cols-2 gap-4">
        {pets.map((pet) => (
          <div key={pet.name} className="flex flex-col items-center">
            
            <PetMiniature variant={pet.variant} />

            {pet.locked && <Button>Buy Now</Button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetSelectionModal;
