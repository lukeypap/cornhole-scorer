import Hero from "~/components/hero";
import Leaderboard from "~/components/leaderboard";
import SetupGame from "~/components/setupGame";

export default function Index() {
    return (
        <div>
            <Hero />
            <div className="flex bg-slate-700 h-screen text-white items-center justify-center">
                <div className="w-[75%] flex justify-center">
                    <SetupGame />
                </div>
                <Leaderboard />
            </div>
        </div>
    );
}
