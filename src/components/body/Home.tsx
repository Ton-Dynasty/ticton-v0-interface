import { HomeButton } from "../ui/HomeButton";
import "./Home.css";
function Home() {
    return (
        <div className="flex flex-col w-full h-[470px] justify-center items-center gap-9">
            <span className="py-0 text-center baloo-da title">Tick-Tock and Check the price</span>
            <span className="baloo-da title-description w-full max-w-[676px]">Post, arbitrage, and integrate with the leading decentralized oracle on TON.</span>
            <div className="baloo flex justify-center items-center gap-[15px]">
                <HomeButton> <div className="bg-slate-950 w-full rounded-[25px] px-[20px] py-3">Doc</div> </HomeButton>
                <HomeButton> <div className="bg-slate-950 w-full rounded-[25px] px-4 py-3">Mini APP</div> </HomeButton>
                <HomeButton> <div className="bg-slate-950 w-full rounded-[25px] px-4 py-3">Learn more</div> </HomeButton>
            </div>
        </div>
    );
}

export default Home;