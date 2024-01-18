import running from "../../assets/running.svg";
import schedule from "../../assets/schedule.svg";

function Milestone() {
  return (
    <section className="flex flex-col w-full  justify-center items-center py-[90px]">
      <div className="flex flex-col max-w-[885px] w-full justify-center items-center gap-9 pb-[137px]">
        <span className="bungee title text-transparent bg-clip-text py-0 text-[24px]">
          MILESTONE
        </span>
        <div className="flex gap-[36px] items-center flex-col md:flex-row">
          <span className="droid px-[25px] text-[40px] font-bold text-[#A5B4FC]">
            V1
          </span>
          <div className="flex justify-center items-center px-[20px] gap-[10px]">
            <img src={running} />
            <span className="duru text-[16px] font-normal text-teal-500">
              Developing
            </span>
          </div>
          <div className=" bg-[#8f96e6]/[12%] text-[#f2f2f2] rounded-[20px] px-[20px] py-[24px] inter text-[16px]">
            The Oracle mechanism operates with economic stability, providing
            reliable price references.
          </div>
        </div>
        <div className="flex gap-[36px] items-center flex-col md:flex-row">
          <span className="droid px-[25px] text-[40px] font-bold text-[#A5B4FC]">
            V2
          </span>
          <div className="flex justify-center items-center px-[20px] gap-[10px]">
            <img src={schedule} />
            <span className="duru text-[16px] font-normal text-amber-500">
              Scheduled
            </span>
          </div>
          <div className=" bg-[#8f96e6]/[12%] text-[#f2f2f2] rounded-[20px] px-[20px] py-[24px] inter text-[16px]">
            Implementing On Demand Oracle with Merkle Proof, significantly
            reducing the integration cost of DeFi Protocol with our product.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Milestone;
