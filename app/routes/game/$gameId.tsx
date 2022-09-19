import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gameInfo } from "~/cookies";

export const loader: LoaderFunction = async ({ params, request }) => {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = (await gameInfo.parse(cookieHeader)) || {};
    return json({ gameMode: cookie.gameMode, teamOne: cookie.teamOne, teamTwo: cookie.teamTwo });
};

const Game = () => {
    const gameData = useLoaderData();
    return (
        <div>
            <h1>{gameData.gameMode}</h1>
            <h1>{gameData.teamOne}</h1>
            <h1>{gameData.teamTwo}</h1>
        </div>
    );
};

export default Game;
