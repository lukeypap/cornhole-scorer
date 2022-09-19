import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import Hero from "~/components/hero";
import Leaderboard from "~/components/leaderboard";
import SetupGame from "~/components/setupGame";
import { gameInfo } from "~/cookies";
import { initGame } from "~/utils/game.server";

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();

    const gameMode = form.get("t1p2") !== null ? "doubles" : "singles";
    let gameId;

    const t1p1 = form.get("t1p1");
    const t2p1 = form.get("t2p1");

    const cookieHeader = request.headers.get("Cookie");
    const cookie = (await gameInfo.parse(cookieHeader)) || {};
    cookie.gameMode = gameMode;

    if (gameMode === "doubles") {
        const t1p2 = form.get("t1p2");
        const t2p2 = form.get("t2p2");
        gameId = initGame(gameMode, [t1p1, t1p2], [t2p1, t2p2]);
        cookie.teamOne = [t1p1, t1p2];
        cookie.teamTwo = [t2p1, t2p2];
    } else {
        gameId = initGame(gameMode, [t1p1], [t2p1]);
        cookie.teamOne = [t1p1];
        cookie.teamTwo = [t2p1];
    }
    return redirect(`/game/${gameId}`, {
        headers: {
            "Set-Cookie": await gameInfo.serialize(cookie),
        },
    });
};

export default function Index() {
    return (
        <div>
            <Hero />
            <div className="flex bg-slate-700 h-screen text-white items-center justify-center">
                <div className="w-[75%] flex justify-center h-screen items-center">
                    <SetupGame />
                </div>
                <div className="flex h-screen items-center justify-center w-1/4 border-l-2 shadow-md">
                    <Leaderboard />
                </div>
            </div>
        </div>
    );
}
