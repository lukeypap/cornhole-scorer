import Button from "./button";

const Hero = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-800">
            <div className="space-y-8">
                <h1 className="text-6xl text-white">Corn Hole Scorer</h1>
                <Button text="Start a new game" />
            </div>
        </div>
    );
};

export default Hero;
