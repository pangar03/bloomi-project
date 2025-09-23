import AddHabitIcon from "../../assets/icons/addhabit.svg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
};

const ICON: React.FC<React.SVGProps<SVGSVGElement>> = AddHabitIcon;

const AddHabitButton: React.FC<ButtonProps> = ({
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`bg-none border-none w-fit h-fit`}
            onClick={onClick}
            {...props}
        >
            <ICON />
        </button>
    );
};

export default AddHabitButton;
