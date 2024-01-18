import ImageDecentralization from "@/assets/feature/decentralization.png";
import ImageLowLatency from "@/assets/feature/low-latency.png";
import ImageUnrestricted from "@/assets/feature/unrestricted.png";
import ImageSafeGuard from "@/assets/feature/safe-guard.png";
import ImageHighTPS from "@/assets/feature/high-tps.png";

const Feature = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-16 py-10">
      <div className="text-center text-2xl font-normal font-bungee leading-9 title-gradient bg-clip-text text-transparent">
        Feature
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {/* Decentralization */}
        <div className="w-full md:h-96 px-2 pt-8 bg-indigo-400 bg-opacity-10 rounded-2xl flex-col justify-start items-center gap-6 inline-flex">
          <div className="h-24 md:h-36 flex-col justify-center items-center gap-6 flex">
            <div className="self-stretch h-24 md:h-36 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch h-16 text-center text-slate-300 text-2xl font-medium font-baloo leading-9">
                Decentralization
              </div>
              <div className="w-full h-16 text-center text-slate-300 text-base font-medium font-inter leading-normal md:text-sm">
                Permissionless quotation
              </div>
            </div>
          </div>
          <div className="w-full mt-4 h-56 relative overflow-hidden">
            <img
              className="w-full h-auto top-0 absolute"
              src={ImageDecentralization}
            />
          </div>
        </div>
        {/* Low latency */}
        <div className="w-full md:h-96 px-2 pt-8 bg-indigo-400 bg-opacity-10 rounded-2xl flex-col justify-start items-center gap-6 inline-flex">
          <div className="h-24 md:h-36 flex-col justify-center items-center gap-6 flex">
            <div className="self-stretch h-24 md:h-36 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch h-16 text-center text-slate-300 text-2xl font-medium font-baloo leading-9">
                Low-latency
              </div>
              <div className="w-full h-16 text-center text-slate-300 text-base font-medium font-inter leading-normal md:text-sm">
                Reflect the real market price
              </div>
            </div>
          </div>
          <div className="w-full mt-4 h-56 relative overflow-hidden">
            <img
              className="w-full h-auto top-0 absolute"
              src={ImageLowLatency}
            />
          </div>
        </div>
        {/* Unrestricted */}
        <div className="w-full md:h-96 px-2 pt-8 bg-indigo-400 bg-opacity-10 rounded-2xl flex-col justify-start items-center gap-6 inline-flex">
          <div className="h-24 md:h-36 flex-col justify-center items-center gap-6 flex">
            <div className="self-stretch h-24 md:h-36 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch h-16 text-center text-slate-300 text-2xl font-medium font-baloo leading-9">
                Unrestricted
              </div>
              <div className="w-full h-16 text-center text-slate-300 text-base font-medium font-inter leading-normal md:text-sm">
                Any third party with no threshold
              </div>
            </div>
          </div>
          <div className="w-full mt-4 h-56 relative overflow-hidden">
            <img
              className="w-full h-auto top-0 absolute"
              src={ImageUnrestricted}
            />
          </div>
        </div>
        {/* Safe guarding */}
        <div className="md:col-span-3  w-full px-2 pt-8 md:px-0 md:pt-0 md:h-52 bg-indigo-400 bg-opacity-10 rounded-2xl md:flex md:justify-evenly items-center md:gap-6">
          <div className="h-24 md:h-36 flex-col md:flex-row justify-center items-center gap-6 flex md:order-last">
            <div className="self-stretch h-24 md:h-36 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch h-16 text-center text-slate-300 text-2xl font-medium font-baloo leading-9">
                Stable and Safe-guarding
              </div>
              <div className="w-full h-16 text-center text-slate-300 text-base font-medium font-inter leading-normal md:flex md:items-center md:justify-center md:h-2 md:text-sm">
                Stablelized price informations reduce risks
              </div>
            </div>
          </div>
          <div className="w-full mt-4 h-56 relative overflow-hidden md:h-44 md:mt-0 md:w-44 md:order-first md:flex md:justify-center md:items-center">
            <img
              className="w-full h-auto top-0 absolute md:top-auto md:block"
              src={ImageSafeGuard}
            />
          </div>
        </div>
        {/* High TPS */}
        <div className="md:col-span-3 px-2 pt-8 md:px-0 md:pt-0 w-full md:h-52 bg-indigo-400 bg-opacity-10 rounded-2xl md:flex md:justify-evenly items-center md:gap-6">
          <div className="h-24 md:h-36 flex-col md:flex-row justify-center items-center gap-6 flex md:order-first">
            <div className="self-stretch h-24 md:h-36 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch h-16 text-center text-slate-300 text-2xl font-medium font-baloo leading-9">
                High TPS in TON
              </div>
              <div className="w-full h-16 text-center text-slate-300 text-base font-normal font-inter leading-normal md:flex md:items-center md:justify-center md:h-2">
                TON's high TPS boosts the quotation
              </div>
            </div>
          </div>
          <div className="w-full mt-4 h-56 relative overflow-hidden md:h-44 md:mt-0 md:w-44 md:order-last md:flex md:justify-center md:items-center">
            <img
              className="w-full h-auto top-0 absolute md:top-auto md:block"
              src={ImageHighTPS}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
