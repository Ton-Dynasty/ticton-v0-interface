import { Banknote, UsersRound, Coins } from "lucide-react";

import vibrant3D from "@/assets/vibrant-3D.png";

const Introduction = () => {
  const data = [
    {
      title: "TVL",
      value: "$ 87.5B",
      icon: <Banknote className="h-8 w-8 text-white" />,
    },
    {
      title: "Attendees (24h)",
      value: "+ 78,342",
      icon: <UsersRound className="h-8 w-8 text-white" />,
    },
    {
      title: "Reward (TIC)",
      value: "+ 12.3M",
      icon: <Coins className="h-8 w-8 text-white" />,
    },
  ];
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-9">
        <div className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent">
          WHAT IS TICTON?
        </div>
        <span className="w-full text-center text-xl font-bold leading-loose text-slate-300 md:text-5xl">
          Pure Decentralized Oracle on Ton
        </span>
        <span className="w-full px-6 font-duru text-base font-normal leading-normal text-slate-300 md:text-center md:leading-loose">
          Tic Ton oracle stands as the premier fully decentralized oracle on the
          TON platform. Diverging from market-standard final prices set by price
          providers, it employs Game Theory to craft a decentralized network of
          non-cooperative games. This network ascertains the ultimate price via
          mechanisms of arbitrage and bidirectional options, incorporating the
          chain with random data from decentralized price streams.
        </span>
        <div className="m-4 flex flex-col gap-16 text-white md:flex-row md:gap-4">
          <div className="mx-auto flex w-auto flex-col items-center  justify-between md:h-auto md:w-1/2">
            {data.map(({ title, value, icon }) => (
              <div className="flex h-32 w-full flex-row items-center justify-start gap-4 md:ml-20 md:h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-400 bg-opacity-10 md:mx-0">
                  {icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-left font-inter">{title}</p>
                  <p className="text-left font-inter text-2xl font-bold uppercase text-white">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-first flex justify-center md:order-none md:w-1/2 md:justify-end">
            <img src={vibrant3D} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
