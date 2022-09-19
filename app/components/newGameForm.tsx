import { Form } from "@remix-run/react";
import Button from "./button";

type props = {
    gameMode: string;
};

const NewGameForm: React.FC<props> = ({ gameMode }) => {
    return (
        <div className="w-full">
            <h1 className="text-2xl mb-10 font-bold">Enter the players names...</h1>
            <Form method="post">
                <div className="flex flex-col justify-center mb-10">
                    <h1 className="text-2xl text-center">Team One</h1>
                    <label htmlFor="t1p1">P1</label>
                    <input
                        type="text"
                        name="t1p1"
                        id="t1p1"
                        className="bg-transparent border-b-2 border-yellow-400"
                    />
                    {gameMode === "doubles" ? (
                        <>
                            <label htmlFor="t1p2">P2</label>
                            <input
                                type="text"
                                name="t1p2"
                                id="t1p2"
                                className="bg-transparent border-b-2 border-yellow-400"
                            />
                        </>
                    ) : null}
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl text-center">Team Two</h1>
                    <label htmlFor="t2p1">P1</label>
                    <input
                        type="text"
                        name="t2p1"
                        id="t2p1"
                        className="bg-transparent border-b-2 border-yellow-400"
                    />
                    {gameMode === "doubles" ? (
                        <>
                            <label htmlFor="t2p2">P2</label>
                            <input
                                type="text"
                                name="t2p2"
                                id="t2p2"
                                className="bg-transparent border-b-2 border-yellow-400"
                            />
                        </>
                    ) : null}
                </div>
                <div className="flex justify-center mt-10">
                    <Button type="submit">Start Game</Button>
                </div>
            </Form>
        </div>
    );
};

export default NewGameForm;
