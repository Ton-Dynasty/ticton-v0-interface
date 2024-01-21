import ImageDecentralization from "@/assets/feature/decentralization.png";
import ImageLowLatency from "@/assets/feature/low-latency.png";
import ImageUnrestricted from "@/assets/feature/unrestricted.png";
import ImageSafeGuard from "@/assets/feature/safe-guard.png";
import ImageHighTPS from "@/assets/feature/high-tps.png";
import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";

const Feature = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-10 md:min-h-screen">
      <motion.div
        initial="hidden"
        variants={fadeIn("up", 0.3)}
        whileInView={"show"}
        className="title-gradient bg-clip-text text-center font-bungee text-2xl font-normal leading-9 text-transparent"
      >
        Feature
      </motion.div>
      <motion.div
        initial="hidden"
        variants={fadeIn("up", 0.3)}
        whileInView={"show"}
        className="grid grid-cols-1 gap-6 text-white md:grid-cols-3"
      >
        {/* Decentralization */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-2xl bg-indigo-400 bg-opacity-10 px-2 pt-8 md:h-96"
        >
          <div className="flex h-24 flex-col items-center justify-center gap-6 md:h-36">
            <div className="flex h-24 flex-col items-center justify-center gap-2 self-stretch md:h-36">
              <div className="h-16 self-stretch text-center font-baloo text-2xl font-medium leading-9 text-slate-300">
                Decentralization
              </div>
              <div className="h-16 w-full text-center font-inter text-base font-medium leading-normal text-slate-300 md:text-sm">
                Permissionless quotation
              </div>
            </div>
          </div>
          <div className="relative mt-4 h-56 w-full overflow-hidden">
            <img
              className="absolute top-0 h-auto w-full hover:bg-[url('/src/assets/feature/hover/magic.gif')]"
              src={ImageDecentralization}
            />
          </div>
        </motion.button>
        {/* Low latency */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-2xl bg-indigo-400 bg-opacity-10 px-2 pt-8 md:h-96"
        >
          <div className="flex h-24 flex-col items-center justify-center gap-6 md:h-36">
            <div className="flex h-24 flex-col items-center justify-center gap-2 self-stretch md:h-36">
              <div className="h-16 self-stretch text-center font-baloo text-2xl font-medium leading-9 text-slate-300">
                Low-latency
              </div>
              <div className="h-16 w-full text-center font-inter text-base font-medium leading-normal text-slate-300 md:text-sm">
                Reflect the real market price
              </div>
            </div>
          </div>
          <div className="relative mt-4 h-56 w-full overflow-hidden">
            <img
              className="absolute top-0 h-auto w-full hover:bg-[url('/src/assets/feature/hover/magic.gif')]"
              src={ImageLowLatency}
            />
          </div>
        </motion.button>
        {/* Unrestricted */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-2xl bg-indigo-400 bg-opacity-10 px-2 pt-8 md:h-96"
        >
          <div className="flex h-24 flex-col items-center justify-center gap-6 md:h-36">
            <div className="flex h-24 flex-col items-center justify-center gap-2 self-stretch md:h-36">
              <div className="h-16 self-stretch text-center font-baloo text-2xl font-medium leading-9 text-slate-300">
                Unrestricted
              </div>
              <div className="h-16 w-full text-center font-inter text-base font-medium leading-normal text-slate-300 md:text-sm">
                Any third party with no threshold
              </div>
            </div>
          </div>
          <div className="relative mt-4 h-56 w-full overflow-hidden">
            <img
              className="absolute top-0 h-auto w-full hover:bg-[url('/src/assets/feature/hover/magic.gif')]"
              src={ImageUnrestricted}
            />
          </div>
        </motion.button>
        {/* Safe guarding */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full  items-center rounded-2xl bg-indigo-400 bg-opacity-10 px-2 pt-8 md:col-span-3 md:flex md:h-52 md:justify-evenly md:gap-6 md:px-0 md:pt-0"
        >
          <div className="flex h-24 flex-col items-center justify-center gap-6 md:order-last md:h-36 md:flex-row">
            <div className="flex h-24 flex-col items-center justify-center gap-2 self-stretch md:h-36">
              <div className="h-16 self-stretch text-center font-baloo text-2xl font-medium leading-9 text-slate-300">
                Stable and Safe-guarding
              </div>
              <div className="h-16 w-full text-center font-inter text-base font-medium leading-normal text-slate-300 md:flex md:h-2 md:items-center md:justify-center md:text-sm">
                Stablelized price informations reduce risks
              </div>
            </div>
          </div>
          <div className="relative mt-4 h-56 w-full overflow-hidden md:order-first md:mt-0 md:flex md:h-44 md:w-44 md:items-center md:justify-center">
            <img
              className="absolute top-0 h-auto w-full hover:bg-[url('/src/assets/feature/hover/magic.gif')] md:top-auto md:block"
              src={ImageSafeGuard}
            />
          </div>
        </motion.button>
        {/* High TPS */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full items-center rounded-2xl bg-indigo-400 bg-opacity-10 px-2 pt-8 md:col-span-3 md:flex md:h-52 md:justify-evenly md:gap-6 md:px-0 md:pt-0"
        >
          <div className="flex h-24 flex-col items-center justify-center gap-6 md:order-first md:h-36 md:flex-row">
            <div className="flex h-24 flex-col items-center justify-center gap-2 self-stretch md:h-36">
              <div className="h-16 self-stretch text-center font-baloo text-2xl font-medium leading-9 text-slate-300">
                High TPS in TON
              </div>
              <div className="h-16 w-full text-center font-inter text-base font-normal leading-normal text-slate-300 md:flex md:h-2 md:items-center md:justify-center">
                TON's high TPS boosts the quotation
              </div>
            </div>
          </div>
          <div className="relative mt-4 h-56 w-full overflow-hidden md:order-last md:mt-0 md:flex md:h-44 md:w-44 md:items-center md:justify-center">
            <img
              className="absolute top-0 h-auto w-full hover:bg-[url('/src/assets/feature/hover/magic.gif')] md:top-auto md:block"
              src={ImageHighTPS}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Feature;
