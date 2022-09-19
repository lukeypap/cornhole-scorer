import Button from "./button";

type props = {
    gameMode: string;
};

const NewGameForm: React.FC<props> = ({ gameMode }) => {
    return (
        <div>
            <form method="POST">
                <div>
                    <h1>Team One</h1>
                    <label htmlFor="playerOne">P1</label>
                    <input
                        type="text"
                        name="playerOne"
                        id="playerOne"
                        className="bg-transparent border-b-4 border-yellow-400"
                    />
                    {gameMode === "doubles" ? (
                        <>
                            <label htmlFor="playerOne">P2</label>
                            <input
                                type="text"
                                name="playerOne"
                                id="playerOne"
                                className="bg-transparent border-b-4 border-yellow-400"
                            />
                        </>
                    ) : null}
                </div>
                <div>
                    <h1>Team Two</h1>
                    <label htmlFor="playerTwo">P1</label>
                    <input
                        type="text"
                        name="playerTwo"
                        id="playerTwo"
                        className="bg-transparent border-b-4 border-yellow-400"
                    />
                    {gameMode === "doubles" ? (
                        <>
                            <label htmlFor="playerOne">P2</label>
                            <input
                                type="text"
                                name="playerOne"
                                id="playerOne"
                                className="bg-transparent border-b-4 border-yellow-400"
                            />
                        </>
                    ) : null}
                </div>
                <Button>Start Game</Button>
            </form>
        </div>
    );
};

export default NewGameForm;
