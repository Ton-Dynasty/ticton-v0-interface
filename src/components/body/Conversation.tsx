import { MousePointer2 } from "lucide-react";
import { MessageRow, MessageProps } from "./Message";
import WatchMakerAvatar from "../../assets/avatar/watchmaker.png";
import TimeKeeperAvatar from "../../assets/avatar/timekeeper.png";
import User from "../../assets/avatar/user.png";
import Profile from "./Profile";

const Conversation = () => {
  const handleClickDoc = () => {
    // open documentation in new tab
    window.open("https://github.com/Ton-Dynasty/ticton-doc", "_blank");
  };
  const messages: Array<MessageProps> = [
    {
      avatar: WatchMakerAvatar,
      profile: <Profile name="Jacky" role="Watchmaker" />,
      content: (
        <>
          <div className="font-sora text-base font-normal capitalize text-zinc-100 text-opacity-80">
            I think{" "}
          </div>
          <div className="flex items-center justify-start gap-2.5 rounded-3xl bg-indigo-300 bg-opacity-20 px-3 py-1">
            <div className="font-sora text-base font-normal capitalize text-zinc-100">
              1 Ton = 2 jUSDT
            </div>
          </div>
        </>
      ),
      time: "10:00 AM",
      side: "left",
    },
    {
      avatar: TimeKeeperAvatar,
      profile: <Profile name="Alan" role="Timekeeper" />,
      content: (
        <>
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center justify-start gap-2.5">
              <div className="font-sora text-base font-normal capitalize text-white">
                It’s TOO LOW.{" "}
              </div>
              <div className="flex items-center justify-start gap-2.5 rounded-3xl bg-amber-500 px-3 py-1">
                <div className="font-sora text-base font-normal capitalize text-zinc-100">
                  +2.2 TON
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2.5">
              <div className="font-sora text-base font-normal capitalize text-white">
                I think
              </div>
              <div className="flex items-center justify-start gap-2.5 rounded-3xl bg-indigo-300 bg-opacity-20 px-3 py-1">
                <div className="font-sora text-base font-normal capitalize text-zinc-100">
                  1 Ton = 10 jUSDT
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      time: "11:35 AM",
      side: "right",
    },
    {
      avatar: WatchMakerAvatar,
      profile: <Profile name="Jacky" role="Watchmaker" />,
      content: (
        <>
          <div className="font-sora text-base font-normal capitalize text-zinc-100 text-opacity-80">
            Claim{" "}
          </div>
          <div className="flex items-center justify-start gap-2.5 rounded-3xl bg-blue-500 px-3 py-1">
            <div className="font-sora text-base font-normal capitalize text-zinc-100">
              +2.2 TIC
            </div>
          </div>
        </>
      ),
      time: "12:26 PM",
      side: "left",
    },
    {
      avatar: User,
      profile: <Profile name="Maxey" role="User" />,
      content: (
        <>
          <div className="font-sora max-w-72 shrink grow basis-0 text-base font-normal leading-loose text-white">
            As a lending protocol, I need to get accurate price for liquidation.{" "}
          </div>
        </>
      ),
      time: "13:14 PM",
      side: "right",
    },
  ];
  return (
    <section className="flex w-full flex-col items-center justify-center px-6 py-10">
      <div className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent">
        Let’s make it simple
      </div>
      <div className="my-10">
        <p className="text-center font-duru text-base font-normal text-slate-300">
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
      </div>
      {/* Conversation */}
      {messages.map((msg, index) => (
        <MessageRow key={index} {...msg} />
      ))}
    </section>
  );
};

export default Conversation;
