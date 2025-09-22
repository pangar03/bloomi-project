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