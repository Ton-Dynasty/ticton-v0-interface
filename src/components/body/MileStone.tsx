import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";
import MilestoneImage from "../../assets/milestone.png";

interface MileStoneItem {
  version: string;
  status: string;
  content: string;
  active: boolean;
}

const Milestone = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    setHeight(ref?.current?.offsetHeight || 0);
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(ref?.current?.offsetHeight || 0);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const milestones: MileStoneItem[] = [
    {
      version: "Beta",
      status: "Testnet",
      content:
        "The Oracle mechanism operates with economic stability, providing reliable price references.",
      active: true,
    },
    {
      version: "V1",
      status: "Release",
      content:
        "We will release the first version of our product, which will be integrated with the DeFi protocol.",
      active: false,
    },
    {
      version: "V2",
      status: "Scheduled",
      content:
        "Implement on demand oracle with merkle proof, significantly reducing the cost or oracle.",
      active: false,
    },
  ];
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 overflow-hidden md:min-h-screen">
      <motion.div
        initial="hidden"
        variants={fadeIn("up", 0.3)}
        whileInView={"show"}
        className=" flex w-full flex-col items-center justify-center gap-9"
      >
        <div className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent">
          MILESTONE
        </div>
      </motion.div>
      <div className=" flex flex-col md:flex-row md:items-end md:justify-center md:gap-5">
        <motion.div
          initial="hidden"
          variants={fadeIn("left", 0.2)}
          whileInView={"show"}
          className="shado mb-3 flex w-40 items-center justify-center overflow-hidden rounded-full shadow-lg md:w-80"
          style={{
            boxShadow:
              "20px 20px 60px 30px rgba(221,180,227,0.4), 0 0 30px 20px rgba(240,171,252,0.4) inset",
          }}
        >
          <img src={MilestoneImage} alt="milestone" />
        </motion.div>
        <motion.div
          initial="hidden"
          variants={fadeIn("right", 0.2)}
          whileInView={"show"}
          className="bg-gradient-to-b from-white via-purple-300 to-fuchsia-400 bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent md:bg-gradient-to-r"
        >
          MONNY
        </motion.div>
      </div>
      <div className="relative flex flex-col gap-5 md:gap-20">
        {milestones.map((milestone, index) => {
          return (
            <div
              className="z-10 flex  items-start justify-start md:flex-nowrap md:gap-10"
              ref={!index ? ref : null}
            >
              <motion.div
                initial="hidden"
                variants={fadeIn("down", 0.2 * (index + 1))}
                whileInView={"show"}
              >
                {/* circle */}
                <motion.div
                  className={`flex h-6 w-6 items-center justify-center rounded-full bg-indigo-300`}
                  animate={{
                    boxShadow: `${milestone.active ? "0 0 20px 10px #F0ABFC" : ""}`,
                    transition: {
                      delay: 0.3,
                      duration: 1.5,
                      ease: "easeIn",
                      repeat: Infinity,
                      repeatType: "mirror",
                    },
                  }}
                >
                  <div className={"h-5 w-5 rounded-full bg-indigo-700"} />
                </motion.div>
              </motion.div>
              <motion.div
                className="flex flex-col items-start justify-center gap-4 md:flex-row md:gap-0"
                initial="hidden"
                variants={fadeIn("down", 0.2 * (index + 1))}
                whileInView={"show"}
              >
                <div className="flex w-full flex-row flex-nowrap items-end justify-between text-nowrap md:w-52 md:-translate-y-1 md:flex-col md:items-start md:justify-start md:gap-4">
                  <div className="translate-x-10 text-start font-doppio text-3xl font-bold text-indigo-300 md:translate-x-0 md:text-center">
                    {milestone.version}
                  </div>
                  <div
                    className={`font-base -translate-x-10 rounded-2xl bg-fuchsia-300 px-2 py-1 text-start font-duru text-base text-fuchsia-300 md:translate-x-0 md:text-center md:text-lg ${milestone.active ? " bg-opacity-40" : " bg-opacity-20"}`}
                  >
                    {milestone.status}
                  </div>
                </div>
                <div className="mx-10 flex items-center justify-center rounded-2xl border border-indigo-300 border-opacity-20 bg-indigo-400 bg-opacity-10 px-6 py-4 md:mx-0 md:w-96">
                  <div className="grow basis-0 font-duru text-sm font-light leading-normal text-zinc-100 text-opacity-80 md:text-base">
                    {milestone.content}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
        <div
          className={`absolute flex w-6  justify-center top-[${height}px] z-0`}
        >
          <motion.div
            initial={{ height: 0 }}
            whileInView={{
              height:
                width < 768
                  ? `calc(${height * milestones.length}px + ${4 * (milestones.length - 1)}rem`
                  : `calc(${height * milestones.length}px + ${5 * (milestones.length - 1)}rem + ${1 * (milestones.length - 1)}rem)`,
              transition: {
                delay: 0.2,
                duration: 1 * (milestones.length + 1),
                ease: "easeInOut",
              },
            }}
            className={`w-1 bg-gradient-to-b from-blue-500 via-indigo-400 to-violet-600`}
          />
        </div>
      </div>
    </section>
  );
};

export default Milestone;
