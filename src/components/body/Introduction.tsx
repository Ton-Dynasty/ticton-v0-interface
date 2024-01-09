import moneys from "../../assets/moneys.svg";
import chart from "../../assets/chart-square.svg";
import wallet from "../../assets/wallet-money.svg";
function Introduction() {
    return (

        <div className="flex flex-col w-full justify-center items-center pt-[90px]">
            <div className="flex flex-col max-w-[798px] w-full justify-center items-center gap-9 pb-[137px]">
                <span className="bungee title py-0 text-[24px]">WHAT IS TICTON?</span>
                <span className="droid title-description text-[48px]">Pure Decentralized Oracle on Ton</span>
                <span className="duru text-[16px] text-white text-center leading-[30px]">Tic Ton oracle stands as the premier fully decentralized oracle on the TON platform. Diverging from market-standard final prices set by price providers, it employs Game Theory to craft a decentralized network of non-cooperative games. This network ascertains the ultimate price via mechanisms of arbitrage and bidirectional options, incorporating the chain with random data from decentralized price streams.</span>
            </div>
            <div className="flex w-full justify-center gap-10 md:gap-[76px] flex-col md:flex-row max-w-[200px] md:max-w-none">
                <div className="flex gap-[9px]">
                    <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#B0B0B0]/10 rounded-[13.8px]">
                        <img src={moneys} />
                    </div>
                    <div className="flex flex-col inter py-[5px]">
                        <span className="text-white text-[14px]">TVL</span>
                        <span className="text-white text-[24px] font-bold uppercase ">$ 87.5B</span>
                    </div>
                </div>
                <div className="flex gap-[9px]">
                    <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#B0B0B0]/10 rounded-[13.8px]">
                        <img src={wallet} />
                    </div>
                    <div className="flex flex-col inter py-[5px]">
                        <span className="text-white text-[14px]">Attendees (24h)</span>
                        <span className="text-white text-[24px] font-bold uppercase ">+ 78,342</span>
                    </div>
                </div>
                <div className="flex gap-[9px]">
                    <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#B0B0B0]/10 rounded-[13.8px]">
                        <img src={chart} />
                    </div>
                    <div className="flex flex-col inter py-[5px]">
                        <span className="text-white text-[14px]">Reward (TIC)</span>
                        <span className="text-white text-[24px] font-bold uppercase ">+ 12.3M</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;