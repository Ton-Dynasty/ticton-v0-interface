import { Banknote, UsersRound, Coins } from "lucide-react";

import vibrant3D from "@/assets/vibrant-3D.png";

const Introduction = () => {
  const data = [
    {
      title: "TVL",
      value: "$ 87.5B",
      icon: <Banknote className="w-8 h-8 text-white" />,
    },
    {
      title: "Attendees (24h)",
      value: "+ 78,342",
      icon: <UsersRound className="w-8 h-8 text-white" />,
    },
    {
      title: "Reward (TIC)",
      value: "+ 12.3M",
      icon: <Coins className="w-8 h-8 text-white" />,
    },
  ];
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center gap-9">
        <span className="font-bungee title-gradient text-transparent bg-clip-text py-0 text-lg">
          WHAT IS TICTON?
        </span>
        <span className="w-full text-center text-slate-300 text-xl md:text-5xl font-bold leading-loose">
          Pure Decentralized Oracle on Ton
        </span>
        <span className="w-full text-justify px-6  md:text-center text-slate-300 text-base font-normal font-duru md:leading-loose leading-normal">
          Tic Ton oracle stands as the premier fully decentralized oracle on the
          TON platform. Diverging from market-standard final prices set by price
          providers, it employs Game Theory to craft a decentralized network of
          non-cooperative games. This network ascertains the ultimate price via
          mechanisms of arbitrage and bidirectional options, incorporating the
          chain with random data from decentralized price streams.
        </span>
        <div className="flex flex-col md:flex-row text-white gap-16 md:gap-4 m-4">
          <div className="flex flex-col justify-between items-center w-auto  md:h-auto md:w-1/2 mx-auto">
            {data.map(({ title, value, icon }) => (
              <div className="flex flex-row justify-start items-center w-full gap-4 h-32 md:h-full md:ml-20">
                <div className="bg-zinc-400 bg-opacity-10 rounded-xl w-14 h-14 flex justify-center items-center md:mx-0">
                  {icon}
                </div>
                <div className="flex flex-col">
                  <p className="font-inter text-left">{title}</p>
                  <p className="text-white text-2xl font-bold font-inter uppercase text-left">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-end md:w-1/2 order-first md:order-none">
            <img src={vibrant3D} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
