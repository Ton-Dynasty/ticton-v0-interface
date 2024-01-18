const Milestone = () => {
  return (
    <section className="flex flex-col w-full  justify-center items-center py-[90px]">
      <div className="flex flex-col max-w-[885px] w-full justify-center items-center gap-9 pb-[137px]">
        <span className="text-center text-2xl font-normal font-bungee leading-9 title-gradient bg-clip-text text-transparent">
          MILESTONE
        </span>
        <div className="flex gap-9 items-center flex-col md:flex-row">
          <span className="font-droid px-[25px] text-4xl font-bold text-indigo-300">
            t1
          </span>
          <div className="w-44 h-24 flex-col justify-center items-start inline-flex">
            <div className="py-3 rounded-full flex-col justify-center items-center gap-9 flex">
              <div className="text-indigo-300 text-2xl font-bold font-droid">
                Version 1.0
              </div>
            </div>
            <div className="h-9 py-6 rounded-2xl justify-center items-center gap-2 inline-flex">
              <div className="text-fuchsia-300 text-base font-normal font-duru">
                Developing
              </div>
            </div>
          </div>
          <div className=" bg-indigo-400 bg-opacity-10 text-zinc-100 rounded-[20px] px-5 py-6 font-inter text-base text-justify">
            The Oracle mechanism operates with economic stability, providing
            reliable price references.
          </div>
        </div>
        <div className="flex gap-9 items-center flex-col md:flex-row">
          <span className="font-droid px-[25px] text-4xl font-bold text-indigo-300">
            t2
          </span>
          <div className="w-44 h-24 flex-col justify-center items-start inline-flex">
            <div className="py-3 rounded-full flex-col justify-center items-center gap-9 flex">
              <div className="text-indigo-300 text-3xl font-bold font-droid leading-loose">
                Version 2.0
              </div>
            </div>
            <div className="h-9 py-6 rounded-2xl justify-center items-center gap-2 inline-flex">
              <div className="text-fuchsia-300 text-base font-normal font-duru leading-loose">
                Scheduled
              </div>
            </div>
          </div>
          <div className=" bg-indigo-400 bg-opacity-10 text-zinc-100 rounded-[20px] px-5 py-6 font-inter text-base text-justify">
            Implementing On Demand Oracle with Merkle Proof, significantly
            reducing the integration cost of DeFi Protocol with our product.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
