type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    variant?: keyof typeof styleVariants;
};

// Blue: Light blue background with medium blue border, on hover the border becomes darker blue; Use case: Default
// Red: Light red background with medium red border, on hover the border becomes darker red; Use case: Delete, remove, error actions
const styleVariants = {
    blue: "lg:pr-8 lg:pl-4 lg:py-2.5 lg:rounded-rounded lg:border-4 lg:border-white lg:active:border-accent lg:hover:bg-accent-lighter lg:hover:border-accent-lighter",
    red: "lg:pr-8 lg:pl-4 lg:py-2.5 lg:rounded-rounded lg:border-4 lg:border-white lg:active:border-red lg:hover:bg-red-lighter lg:hover:border-red-lighter",
    coins: "px-4 py-2.5 rounded-default bg-accent-light border-2 border-accent-darker shadow-accent",
};

// Way of using: <SquareContainer variant="blue|red">[IN HERE YOU PUT WHATEVER GOES INSIDE THE CONTAINER, LIKE ICON, H1, P, ETC]</SquareContainer>
const SquareContainer = ({
    children,
    variant,
    className,
    ...props
}: ContainerProps) => {
    return (
        <div
            className={`w-fit h-fit lg:w-fit lg:flex lg:items-center lg:justify-center ${styleVariants[variant || "blue"]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default SquareContainer;
