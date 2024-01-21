import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Watch,
  AlarmClockCheck,
  UsersRound,
  Clock,
  BellRing,
  Wind,
  CheckCircle2,
} from "lucide-react";
import WatchMakerImage from "../../assets/carousel/watchmaker.png";
import TimeKeeperImage from "../../assets/carousel/timekeeper.png";
import UserImage from "../../assets/carousel/user.png";

const RolesCarousel = () => {
  const roles = [
    {
      name: "Watchmaker",
      icon: <Watch className="h-full w-full" />,
      override: "text-blue-300",
      selectedStyle:
        "shadow-[0_0_30px_rgba(147,197,253,0.5)] rounded-full border-2 border-[#93c5fd] justify-center items-center inline-flex",
    },
    {
      name: "TimeKeeper",
      icon: <AlarmClockCheck className="h-full w-full" />,
      override: "text-amber-500",
      selectedStyle:
        "shadow-[0_0_30px_rgba(251, 191, 36, 0.5)] rounded-full border-2 border-[#fcd34d] justify-center items-center inline-flex",
    },
    {
      name: "Users",
      icon: <UsersRound className="h-full w-full" />,
      override: "text-teal-400",
      selectedStyle:
        "shadow-[0_0_30px_rgba(45, 212, 191, 0.5)] rounded-full border-2 border-[#2dd4bf] justify-center items-center inline-flex",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      imageUrl: WatchMakerImage,
      descriptions: [
        <div>
          <div className="mb-2 flex items-center justify-start font-doppio text-3xl font-normal text-blue-300">
            <Clock className=" mr-4" />
            <span>Tick</span>
          </div>
          <div className=" text-wrap font-droid text-lg font-normal leading-tight text-slate-300 ">
            Open a trading position with Tick method; if the position is not
            arbitrated, you can receive Tic tokens as a reward by Ring method.
          </div>
        </div>,
        <div>
          <div className="mb-2 flex items-center justify-start font-doppio text-3xl font-normal text-red-400">
            <BellRing className=" mr-4" />
            <span>Ring</span>
          </div>
          <div className=" text-wrap font-droid text-lg font-normal leading-tight text-slate-300">
            Close your Ring positions and withdraw assets and token rewards from
            oracle.
          </div>
        </div>,
      ],
    },
    {
      imageUrl: TimeKeeperImage,
      descriptions: [
        <div>
          <div className="mb-2 flex items-center justify-start font-doppio text-3xl font-normal text-amber-300">
            <Wind className=" mr-4" />
            <span>Wind</span>
          </div>
          <div className=" text-wrap font-droid text-lg font-normal leading-tight text-slate-300">
            If prices in other warehouses are imprecise, TimeKeeper can
            arbitrage through the Wind Method. However, to demonstrate economic
            responsibility, they must collateralize assets to become a new
            Watchmaker.
          </div>
        </div>,
      ],
    },
    {
      imageUrl: UserImage,
      descriptions: [
        <div>
          <div className="mb-2 flex items-center justify-start font-doppio text-3xl font-normal text-teal-300">
            <CheckCircle2 className=" mr-4" />
            <span>Check</span>
          </div>
          <div className=" text-wrap font-droid text-lg font-normal leading-tight text-slate-300">
            Users or other protocols can access our real-time latest prices or
            weighted prices for a small fee.
          </div>
        </div>,
      ],
    },
  ];

  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (activeIndex === 2) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 5000);
    return () => clearInterval(autoPlay);
  });

  return (
    <section className="flex w-full flex-col items-center justify-center px-6 py-10">
      <div className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent">
        Participants
      </div>
      <div className="flex w-full flex-row items-center justify-around py-10 md:gap-20 md:py-20">
        {roles.map(({ name, icon, override, selectedStyle }, index) => {
          return (
            <Button
              className={`inline-flex bg-transparent px-3 py-1 ${override} gap-2 rounded-full ${
                activeIndex === index && selectedStyle
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="md:h-10 md:w-10">{icon}</div>
              <div
                className={`font-doppio  text-2xl font-normal leading-loose transition-all md:block ${
                  activeIndex === index ? "" : "hidden"
                }`}
              >
                {name}
              </div>
            </Button>
          );
        })}
      </div>

      <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden md:h-96">
        <div
          className="relative h-auto whitespace-nowrap transition-transform duration-300 md:h-full"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {carouselItems.map((item) => {
            return (
              <div className="inline-flex h-auto w-full flex-col justify-center gap-10 md:h-full md:flex-row">
                <div className="flex h-auto w-full  items-center justify-center md:h-full md:w-1/2 md:max-w-full">
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    className="h-full w-full max-w-[200px] md:max-w-full"
                  />
                </div>
                <div className="flex h-full w-full flex-col items-center justify-around gap-10 md:mx-0 md:w-1/2 md:gap-0">
                  {item.descriptions.map((description) => description)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RolesCarousel;
