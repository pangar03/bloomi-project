import CaraAmarilla from "../../assets/emojis/cara amarilla.svg";
import CaraAzul from "../../assets/emojis/cara azul.svg";
import CaraVerde from "../../assets/emojis/cara verde.svg";
import CaraVioleta from "../../assets/emojis/cara violeta.svg";
import CaraNeutra from "../../assets/emojis/cara neutra.svg";
import type { EmojiVariant } from "../../types/EmojiVariant";

// Props that the Emojis component can receive. variant is the type of emoji to display, className is an optional CSS class to apply to the SVG element.
interface EmojiProps {
    variant?: EmojiVariant;
    className?: string;
}

// What does this do: Record: Maps (as a dictionary, search what a dictionary is in programming for more info) the variant names to the imported SVG Components. Basically allows to use a string to select which SVG to render. React.FC means React Functional Component, and React.SVGProps<SVGSVGElement> means the props that an SVG element can take. All this comes from the vite-env.d.ts file and the vite-plugin-svgr plugin. All this to use SVGs as React components instead of images as before.
const EMOJI: Record<EmojiVariant, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Happier: CaraAmarilla,
    Happy: CaraVerde,
    Neutral: CaraNeutra,
    Sad: CaraAzul,
    Sadder: CaraVioleta,
};

const Emojis: React.FC<EmojiProps> = ({ variant, className }) => {
    const EmojiComponent = EMOJI[variant || "Neutral"];

    return (
        <div className={`emoji-container ${className}`}>
            <EmojiComponent />
        </div>
    );
};

export default Emojis;
