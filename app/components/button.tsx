type props = {
    children: string;
    onClick?: any;
};

const Button: React.FC<props> = ({ children, onClick }: props) => {
    return (
        <button
            className="px-6 py-2 text-black bg-yellow-400 rounded-md text-md tracking-tight font-semibold uppercase"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
