import { Banknote, UsersRound, Coins } from "lucide-react";
// import { fadeIn } from "../animation/fade";
import { motion } from "framer-motion";
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
    <motion.section className="bg-star flex w-full flex-col items-center justify-center md:min-h-screen">
      <div className="flex w-full flex-col items-center justify-center gap-9">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 1,
              delay: 0.1,
            },
          }}
          className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent"
        >
          WHAT IS TICTON?
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 1,
              delay: 0.3,
            },
          }}
          className="w-full text-center text-xl font-bold leading-loose text-slate-300 md:text-5xl"
        >
          Pure Decentralized Oracle on Ton
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { ease: "easeIn", duration: 1, delay: 0.3 },
          }}
          className="w-full text-pretty px-6 font-duru text-base font-normal leading-normal text-slate-300 md:text-center md:leading-loose"
        >
          Tic Ton oracle stands as the premier fully decentralized oracle on the
          TON platform. Diverging from market-standard final prices set by price
          providers, it employs Game Theory to craft a decentralized network of
          non-cooperative games. This network ascertains the ultimate price via
          mechanisms of arbitrage and bidirectional options, incorporating the
          chain with random data from decentralized price streams.
        </motion.span>
        <div className="m-4 flex flex-col gap-2 text-white md:flex-row md:gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { ease: "easeIn", duration: 1, delay: 0.3 },
            }}
            className="mx-auto flex w-auto flex-col items-center  justify-between md:h-auto md:w-1/2"
          >
            {data.map(({ title, value, icon }) => (
              <div
                className="flex h-32 w-full flex-row items-center justify-start gap-4 md:ml-20 md:h-full"
                key={`intro-${title}`}
              >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { ease: "easeIn", duration: 1, delay: 0.3 },
            }}
            className="order-first flex justify-center md:order-none md:w-1/2 md:justify-end"
          >
            <img src={vibrant3D} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Introduction;
