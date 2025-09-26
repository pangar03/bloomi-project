
export type InputProps = {
    placeholder?: string;
    type?: string;
    label?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, target: string) => void;
    required?: boolean;
};


