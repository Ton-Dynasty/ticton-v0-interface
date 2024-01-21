import { MousePointer2 } from "lucide-react";
import { MessageRow, MessageProps } from "./Message";
import WatchMakerAvatar from "../../assets/avatar/watchmaker.png";
import TimeKeeperAvatar from "../../assets/avatar/timekeeper.png";
import User from "../../assets/avatar/user.png";
import Profile from "./Profile";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";

const Conversation = () => {
  const handleClickDoc = () => {
    // open documentation in new tab
    window.open("https://ton-dynasty.github.io/ticton-doc/", "_blank");
  };
  const messages: Array<MessageProps> = [
    {
      avatar: WatchMakerAvatar,
      profile: <Profile name="Jacky" role="Watchmaker" />,
      content: (
        <div className="flex-wrap md:inline-flex md:items-center md:justify-center">
          <div className="font-sora text-sm font-normal text-zinc-100 text-opacity-80 md:text-base">
            I think{" "}
          </div>
          <div className="flex items-center justify-start gap-2.5 rounded-3xl bg-indigo-300 bg-opacity-20 px-3 py-1 md:mx-2">
            <div className="font-sora text-sm font-normal text-zinc-100 md:text-base">
              1 Ton = 2 jUSDT
            </div>
          </div>
        </div>
      ),
      time: "10:00 AM",
      side: "left",
      delay: 0.6,
    },
    {
      avatar: TimeKeeperAvatar,
      profile: <Profile name="Alan" role="Timekeeper" />,
      content: (
        <>
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center justify-start gap-2.5">
              <div className="font-sora text-sm font-normal text-white md:text-base">
                Underestimate !{" "}
              </div>
              <div className="hidden items-center justify-start gap-2.5 rounded-3xl bg-amber-500 px-3 py-1 md:flex">
                <div className=" text-zinc-10 font-sora text-sm font-normal md:text-base">
                  + 2 TON
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-2.5 md:flex-row md:items-center">
              <div className="hidden font-sora text-sm font-normal text-white md:block md:text-base">
                I think
              </div>
              <div className="flex items-center justify-start gap-2.5 rounded-3xl bg-indigo-300 bg-opacity-20 px-3 py-1">
                <div className="font-sora text-sm font-normal text-zinc-100 md:text-base">
                  1 TON = 10 jUSDT
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      time: "11:35 AM",
      side: "right",
      delay: 1.6,
    },
    {
      avatar: WatchMakerAvatar,
      profile: <Profile name="Jacky" role="Watchmaker" />,
      content: (
        <>
          <div className="font-sora text-base font-normal text-zinc-100 text-opacity-80">
            Claim{" "}
          </div>
          <div className="flex items-center justify-start gap-2.5 rounded-3xl bg-blue-500 px-3 py-1">
            <div className="font-sora text-base font-normal text-zinc-100">
              +2.2 TIC
            </div>
          </div>
        </>
      ),
      time: "12:26 PM",
      side: "left",
      delay: 2.6,
    },
    {
      avatar: User,
      profile: <Profile name="Maxey" role="User" />,
      content: (
        <>
          <div className="max-w-72 shrink grow basis-0 font-sora text-base font-normal leading-loose text-white">
            As a lending protocol, I need to get accurate price for liquidation.{" "}
          </div>
        </>
      ),
      time: "13:14 PM",
      side: "right",
      delay: 3.6,
    },
  ];
  return (
    <section className="flex w-full flex-col items-center justify-center px-6 py-10 md:min-h-screen">
      <motion.div
        initial="hidden"
        variants={fadeIn("up", 0.3)}
        whileInView={"show"}
        className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent"
      >
        Let’s make it simple
      </motion.div>
      <motion.div
        initial="hidden"
        variants={fadeIn("up", 0.3)}
        whileInView={"show"}
        className="my-10"
      >
        <p className="text-pretty text-center font-duru text-base font-normal text-slate-300">
          We simulate smart contracts into message transmission for explanation
          purposes. Please refer to the{" "}
          <button
            className="inline-flex items-center font-duru text-base font-normal leading-3 text-blue-400"
            onClick={handleClickDoc}
          >
            documentation <MousePointer2 fill="rgb(96 165 250)" />
          </button>{" "}
          for more detailed processes.
        </p>
      </motion.div>
      {/* Conversation */}
      {messages.map((msg, index) => (
        <MessageRow key={index} {...msg} />
      ))}
    </section>
  );
};

export default Conversation;
