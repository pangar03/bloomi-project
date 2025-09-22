import naranja from '../../assets/pets/naranja.svg'
import frambuesa from '../../assets/pets/frambuesa.svg'
import mora from '../../assets/pets/mora.svg'
import fresa from '../../assets/pets/fresa.svg'



const pets = [
    { name: 'Naranja', img: naranja, bgColor: "#F9A74F" },
    { name: 'Frambuesa', img: frambuesa, bgColor: "#F7B2C4" },
    { name: 'Mora', img: mora, bgColor: "#E6CFFD" },
    { name: 'Fresa', img: fresa, bgColor: "#F08080" },
];

const PetMiniature = () => {
    return (
        <div className="pet-miniature">
            {pets.map((pet, index) => (
                <div
          key={index}
          className="flex items-center justify-center rounded-lg shadow-md p-4"
          style={{ backgroundColor: pet.bgColor }}
        >
          <img src={pet.img} alt={pet.name} className="w-24 h-24 object-contain" />
        </div>
            ))}
        </div>
    )
}

export default PetMiniature