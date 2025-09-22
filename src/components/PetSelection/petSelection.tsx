import PetMiniature from "../PetMiniature/petMiniature";
import Button from "../buttons/button";

interface Pet {
  name: string;
  img: string;
  bgColor: string;
  locked: boolean;
}

const pets: Pet[] = [
  { name: "Fresa", img: "/assets/fresa.svg", bgColor: "#F08080", locked: false },
  { name: "Frambuesa", img: "/assets/rosa.svg", bgColor: "#F7B2C4", locked: false },
  { name: "Mora", img: "/assets/azul.svg", bgColor: "#6A0DAD", locked: true },
  { name: "Naranja", img: "/assets/naranja.svg", bgColor: "#F9A74F", locked: true },
];

const PetSelectionModal = () => {
  return (
    <div className="bg-blue-100 rounded-xl shadow p-6 w-96 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">Select Your Pet</h2>

      <div className="grid grid-cols-2 gap-4">
        {pets.map((pet) => (
          <div key={pet.name} className="flex flex-col items-center">
            
            <PetMiniature
              name={pet.name}
              img={pet.img}
              bgColor={pet.bgColor}
              locked={pet.locked}
            />

           
            {pet.locked && <Button text="Buy Now" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetSelectionModal;