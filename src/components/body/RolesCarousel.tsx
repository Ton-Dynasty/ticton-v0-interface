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
import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
        "shadow-[0_0_30px_rgba(251,191,36,0.5)] rounded-full border-2 border-[#fcd34d] justify-center items-center inline-flex",
    },
    {
      name: "Users",
      icon: <UsersRound className="h-full w-full" />,
      override: "text-teal-400",
      selectedStyle:
        "shadow-[0_0_30px_rgba(45,212,191,0.5)] rounded-full border-2 border-[#2dd4bf] justify-center items-center inline-flex",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const carouselItems = [
    {
      imageUrl: WatchMakerImage,
      descriptions: [
        <div>
          <div className="mb-2 flex w-full items-center justify-start font-doppio text-3xl font-normal text-blue-300">
            <Clock />
            <span className=" translate-x-4">Tick</span>
          </div>
          <div className="w-full text-pretty font-droid text-base font-normal leading-tight text-slate-300">
            Open a trading position with Tick method; if the position is not
            arbitrated, you can receive Tic tokens as a reward by Ring method.
          </div>
        </div>,
        <div>
          <div className="mb-2 flex w-full items-center justify-start font-doppio text-3xl font-normal text-red-400">
            <BellRing />
            <span className=" translate-x-4">Ring</span>
          </div>
          <div className="text-pretty font-droid text-base font-normal leading-tight text-slate-300">
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
            <Wind className="" />
            <span className=" translate-x-4">Wind</span>
          </div>
          <div className=" text-pretty font-droid text-lg font-normal leading-tight text-slate-300">
            If prices in other alerts are imprecise, TimeKeeper can arbitrage
            through the Wind Method. However, to demonstrate economic
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
            <CheckCircle2 />
            <span className=" translate-x-4">Check</span>
          </div>
          <div className=" text-pretty font-droid text-lg font-normal leading-tight text-slate-300">
            Users or other protocols can access our real-time latest prices or
            weighted prices for a small fee.
          </div>
        </div>,
      ],
    },
  ];

  useEffect(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="backdrop-blur-lg">
      <div className="bg-star-center">
        <motion.section className="flex w-full flex-col items-center justify-center px-6 py-10 md:h-screen">
          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.3)}
            whileInView={"show"}
            className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent"
          >
            Participants
          </motion.div>
          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.3)}
            whileInView={"show"}
            className="flex w-full flex-row items-center justify-around py-10 md:gap-20 md:py-20"
          >
            {roles.map(({ name, icon, override, selectedStyle }, index) => {
              return (
                <Button
                  key={`roles-${name}`}
                  className={`inline-flex bg-transparent px-3 py-1 ${override} gap-2 rounded-full ${
                    activeIndex === index && selectedStyle
                  }`}
                  onClick={() => api?.scrollTo(index)}
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
          </motion.div>

          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.3)}
            whileInView={"show"}
            className="w-full"
          >
            <Carousel
              className="w-full"
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {carouselItems.map(({ imageUrl, descriptions }) => {
                  return (
                    <CarouselItem className="flex flex-col items-center justify-center gap-4 px-6 text-white md:flex-row">
                      <div className="flex w-48 items-center justify-center md:w-full">
                        <img src={imageUrl} className="h-full w-full" />
                      </div>
                      <div className="flex h-full w-full flex-col gap-5 md:gap-0">
                        {descriptions.map((desc) => {
                          return (
                            <div className="flex h-full w-full flex-col justify-around">
                              {desc}
                            </div>
                          );
                        })}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default RolesCarousel;
