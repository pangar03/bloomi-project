type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    variant?: keyof typeof styleVariants;
};

// Blue: Light blue background with medium blue border, on hover the border becomes darker blue; Use case: Default
// Red: Light red background with medium red border, on hover the border becomes darker red; Use case: Delete, remove, error actions
const styleVariants = {
    blue: "pr-8 pl-4 py-2.5 rounded-rounded border-4 border-white active:border-accent hover:bg-accent-lighter hover:border-accent-lighter",
    red: "pr-8 pl-4 py-2.5 rounded-rounded border-4 border-white active:border-red hover:bg-red-lighter hover:border-red-lighter",
    coins: "px-4 py-2.5 rounded-default bg-accent-light border-2 border-accent-darker shadow-accent",
};

// Way of using: <SquareContainer variant="blue|red">[IN HERE YOU PUT WHATEVER GOES INSIDE THE CONTAINER, LIKE ICON, H1, P, ETC]</SquareContainer>
const SquareContainer = ({ children, variant, ...props }: ContainerProps) => {
    return (
        <div
            className={`w-fit flex items-center justify-center ${styleVariants[variant || "blue"]}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default SquareContainer;
