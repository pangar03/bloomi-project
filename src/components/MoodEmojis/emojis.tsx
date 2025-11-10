import CaraAmarilla from "../../assets/emojis/cara amarilla.svg";
import CaraAzul from "../../assets/emojis/cara azul.svg";
import CaraVerde from "../../assets/emojis/cara verde.svg";
import CaraVioleta from "../../assets/emojis/cara violeta.svg";
import CaraNeutra from "../../assets/emojis/cara neutra.svg";
import type { EmojiVariant } from "../../types/EmojiVariant";


interface EmojiProps {
    variant?: EmojiVariant;
    className?: string;
}


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
