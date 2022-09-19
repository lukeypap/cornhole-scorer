type props = {
    name: string;
    wins: number;
    losses: number;
    draws: number;
};

const LeaderboardCard = ({ name, wins, losses, draws }: props) => {
    return (
        <div className="flex bg-slate-800 rounded-md shadow-md p-2 items-center">
            <p className="min-w-[55px]">{name}</p>
            <p className="min-w-[55px]">{wins}</p>
            <p className="min-w-[55px]">{losses}</p>
            <p className="">{draws}</p>
        </div>
    );
};

export default LeaderboardCard;
