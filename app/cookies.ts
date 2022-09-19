import { createCookie } from "@remix-run/node";

export const gameInfo = createCookie("game-info", {
    maxAge: 604_800,
});
