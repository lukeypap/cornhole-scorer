type props = {
    text: string;
};

const Button = ({ text }: props) => {
    return (
        <button className="px-6 py-2 text-black bg-yellow-400 rounded-md text-md tracking-tight font-semibold uppercase">
            {text}
        </button>
    );
};

export default Button;
