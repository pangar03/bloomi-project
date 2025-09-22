import CaraAmarilla from "../../assets/emojis/cara amarilla.svg";
import CaraAzul from "../../assets/emojis/cara azul.svg";
import CaraVerde from "../../assets/emojis/cara verde.svg";
import CaraVioleta from "../../assets/emojis/cara violeta.svg";
import CaraNeutra from "../../assets/emojis/cara neutra.svg";

const Emojis = () => {
    return (
        <div className="mood-emojis">
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <img
                    src={CaraVioleta}
                    alt="Cara violeta"
                    width="50"
                    height="50"
                />
                <img src={CaraAzul} alt="Cara azul" width="50" height="50" />
                <img
                    src={CaraNeutra}
                    alt="Cara neutra"
                    width="50"
                    height="50"
                />
                <img src={CaraVerde} alt="Cara verde" width="50" height="50" />
                <img
                    src={CaraAmarilla}
                    alt="Cara amarilla"
                    width="50"
                    height="50"
                />
            </div>
        </div>
    );
};

export default Emojis;
