const Button = ({ variant = "primary", children, onClick }) => {
    //estilo base del boton.
    const baseClasses = `
    font-bold px-6 py-2 rounded-full transition-all duration-150
  `;

    const variants = {
        primary:
            "bg-primary text-white shadow-cta active:bg-primary-darker active:shadow-none",
        accent: "bg-accent text-white shadow-accent active:bg-accent-darker",
        red: "bg-red text-white shadow-red active:bg-red-darker active:shadow-none",
        white: "bg-white text-black border-2 border-black shadow-regular active:bg-gray-dark active:text-white active:shadow-none",
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

//children = lo que va dentro del boton <Button>children</Button>
//<button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}> en esta linea le digo a react: que aplique todas las clases de baseClasses y además las clases que correspondan a la variante seleccionada.
