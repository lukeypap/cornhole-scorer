import Hero from "~/components/hero";
import Leaderboard from "~/components/leaderboard";
import SetupGame from "~/components/setupGame";

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
