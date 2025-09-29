export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  type?: string;
  label?: string;
  className?: string;
  value?: string;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, target: string) => void;
  required?: boolean;
};