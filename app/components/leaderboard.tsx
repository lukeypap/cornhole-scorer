import React from "react";
import LeaderboardCard from "./leaderboardCard";

const data = {
    users: [
        { id: 0, name: "Luke", wins: 100, losses: 5, draws: 2 },
        { id: 1, name: "Jenni", wins: 32, losses: 23, draws: 12 },
        { id: 2, name: "Aris", wins: 210, losses: 111, draws: 5 },
        { id: 3, name: "Laura", wins: 12, losses: 12, draws: 10 },
        { id: 4, name: "Lilly", wins: 187, losses: 0, draws: 0 },
    ],
};

const Leaderboard = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="space-y-2">
                <h1 className="text-center text-2xl">Leaderboard</h1>
                {data.users.map((user) => (
                    <LeaderboardCard
                        key={user.id}
                        name={user.name}
                        wins={user.wins}
                        losses={user.losses}
                        draws={user.draws}
                    />
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
