import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";

interface MileStoneItem {
  version: string;
  status: string;
  content: string;
  active: boolean;
}

const Milestone = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref?.current?.offsetHeight || 0);
    const handleResize = () => {
      setHeight(ref?.current?.offsetHeight || 0);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const circle = (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-300 shadow">
      <div className="h-5 w-5 rounded-full bg-indigo-700 shadow" />
    </div>
  );
  const milestones: MileStoneItem[] = [
    {
      version: "Version 1.0",
      status: "Testnet",
      content:
        "The Oracle mechanism operates with economic stability, providing reliable price references.",
      active: true,
    },
    {
      version: "Version 2.0",
      status: "Scheduled",
      content:
        "Implementing On-Demand Oracle with Merkle Proof, significantly reducing the integration cost of DeFi Protocol with our product.",
      active: false,
    },
  ];
  return (
    <section className="flex w-full flex-col  items-center justify-center py-[90px]">
      <div className="flex w-full max-w-[885px] flex-col items-center justify-center gap-9 pb-[137px]">
        <div className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent">
          MILESTONE
        </div>
      </div>
      <div className="relative flex flex-col gap-32 md:gap-60">
        {milestones.map((milestone, index) => {
          return (
            <div
              className="z-10 flex flex-wrap items-center justify-start md:flex-nowrap md:gap-20"
              ref={!index ? ref : null}
            >
              <div>{circle}</div>
              <motion.div
                className="flex flex-col items-center justify-center gap-10 md:flex-row"
                initial="hidden"
                variants={fadeIn("right", 0.3 * (index + 1))}
                whileInView={"show"}
              >
                <div className="flex flex-grow flex-col flex-nowrap items-center justify-start text-nowrap">
                  <div className="text-center font-droid text-2xl font-bold text-indigo-300">
                    {milestone.version}
                  </div>
                  <div className="text-center font-duru text-sm font-normal text-fuchsia-300">
                    {milestone.status}
                  </div>
                </div>
                <div className="mx-10 flex  items-center justify-center rounded-2xl border border-indigo-300 border-opacity-20 bg-indigo-400 bg-opacity-10 px-5 py-8 md:mx-0 md:h-28 md:w-auto">
                  <div className="grow basis-0 font-inter text-base font-medium leading-normal text-zinc-100 text-opacity-80">
                    {milestone.content}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
        <div
          className={`absolute flex w-6  justify-center top-[${height / 2}px] z-0`}
        >
          <div
            className={` w-1 bg-gradient-to-b from-blue-500 via-indigo-400 to-violet-600`}
            style={{
              height: `calc(${height * milestones.length}px + ${15 * (milestones.length - 1)}rem)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Milestone;
