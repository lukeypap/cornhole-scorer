type game = {
    sessionId: number;
    gameMode: string;
    teamOne: string[];
    teamTwo: string[];
};

let currentGames: game[] = [
    { sessionId: 299, gameMode: "singles", teamOne: ["Luke"], teamTwo: ["Jenni"] },
];

export const initGame = (gameMode: string, teamOne: string[] | any, teamTwo: string[] | any) => {
    const game = { sessionId: 123, gameMode: gameMode, teamOne: teamOne, teamTwo: teamTwo };
    currentGames = [...currentGames, game];
    return game.sessionId;
};

export const getCurrentGames = () => {
    console.log("I'm running now!");
    console.log(JSON.stringify(currentGames));
    return currentGames;
};
