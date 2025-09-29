import Button from "../buttons/button";
import IconButton from "../buttons/iconButton";
import Input from "../Input/input";
import CircleContainer from "../RoundedContainer/circleContainer";
import { useNavigate } from "react-router-dom";

type NumberInputKeys =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "Backspace";

type NumPadProps = {
    setInput: React.Dispatch<React.SetStateAction<string>>;
    setPin: (pin: string) => void;
    input: string;
};

const NumPad = ({ setInput, setPin, input }: NumPadProps) => {
    const navigate = useNavigate();
    
    const handleClick = (key: NumberInputKeys) => {
        if (key === "Backspace") {
            setInput(input.slice(0, -1));
        } else {
            input.length < 4 && setInput(input + key);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.length === 4) setPin(input);
        else alert("Please enter a 4-digit pin");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                type="password"
                pattern="\d{4}"
                maxLength={4}
                required
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="lg:hidden grid grid-cols-3 gap-4 w-fit mx-auto border-2 border-accent shadow-accent rounded-rounded grid-template-rows-[repeat(4,1fr)] p-8">
                {(
                    [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                    ] as NumberInputKeys[]
                ).map((key) => (
                    <CircleContainer
                        key={key}
                        onClick={() => handleClick(key)}
                        variant="blue"
                        className="flex items-center justify-center aspect-square text-m font-bold text-accent cursor-pointer select-none"
                    >
                        {key}
                    </CircleContainer>
                ))}
                <div></div>
                <CircleContainer
                    onClick={() => handleClick("0")}
                    variant="blue"
                    className="flex items-center justify-center aspect-square text-m font-bold text-accent cursor-pointer select-none"
                >
                    0
                </CircleContainer>
                <IconButton
                    variant="BackwardsIcon"
                    className="flex items-center justify-center aspect-square place-self-center cursor-pointer"
                    onClick={() => handleClick("Backspace")}
                />
            </div>
            <Button variant="accent" type="submit">
                Confirm
            </Button>
            <Button variant="white" onClick={() => navigate(-1)}>Back</Button>
        </form>
    );
};

export default NumPad;
