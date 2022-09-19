type props = {
    children: string;
    onClick?: any;
    type?: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<props> = ({ children, onClick, type }) => {
    return (
        <button
            className="px-6 py-2 text-black bg-yellow-400 rounded-md text-md tracking-tight font-semibold uppercase"
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
