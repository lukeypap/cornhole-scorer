import { redirect } from "@remix-run/node";
import { useState } from "react";
import Button from "./button";
import NewGameForm from "./newGameForm";

const SetupGame = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gameMode, setGameMode] = useState("");

    const startGame = () => {
        setGameStarted(true);
    };

    return (
        <div className="space-x-6 p-10 w-full lg:w-1/2 justify-center flex">
            {gameStarted && gameMode === "" ? (
                <>
                    <button
                        className="px-6 py-2 text-black bg-yellow-400 rounded-md text-md tracking-tight font-semibold uppercase"
                        onClick={() => setGameMode("singles")}
                    >
                        Singles
                    </button>
                    <button
                        className="px-6 py-2 text-black bg-yellow-400 rounded-md text-md tracking-tight font-semibold uppercase"
                        onClick={() => setGameMode("doubles")}
                    >
                        Doubles
                    </button>
                </>
            ) : gameStarted && gameMode === "singles" ? (
                <NewGameForm gameMode="singles" />
            ) : gameStarted && gameMode === "doubles" ? (
                <NewGameForm gameMode="doubles" />
            ) : (
                <Button onClick={startGame}>New Game</Button>
            )}
        </div>
    );
};

export default SetupGame;
