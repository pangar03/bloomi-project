type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    variant?: keyof typeof styleVariants;
};

// Blue: Light blue background with medium blue border, on hover the border becomes darker blue; Use case: Default
// Red: Light red background with medium red border, on hover the border becomes darker red; Use case: Delete, remove, error actions
const styleVariants = {
    blue: "bg-accent-lighter border-[3.5px] border-accent shadow-accent hover:border-accent-darker",
    red: "bg-red-lighter border-[3.5px] border-red shadow-red hover:border-red-darker",
    blueTask: "bg-accent-lighter border-[3.5px] border-accent",
};

// Way of using: <CircleContainer variant="blue|red">[IN HERE YOU PUT WHATEVER GOES INSIDE THE CONTAINER, LIKE ICON, H1, P, ETC]</CircleContainer>
const CircleContainer = ({
    children,
    variant,
    className,
    ...props
}: ContainerProps) => {
    return (
        <div
            className={`p-2 w-fit rounded-full flex items-center justify-center ${styleVariants[variant || "blue"]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default CircleContainer;
