import indicator from "../../assets/indicator.svg";
import user_avatar from "../../assets/user_avatar.svg";
import "./Conversation.css";
function Conversation() {
  return (
    <div className="flex flex-col w-full  justify-center items-center pt-[90px]">
      <div className="flex flex-col w-full max-w-[798px] justify-center items-center gap-9 pb-[137px]">
        <div className="flex flex-col items-center">
          <span className="bungee title bg-clip-text py-0 text-[24px] text-transparent">
            LET'S MAKE IT SIMPLE
          </span>
          <p className="duru text-[16px] text-white text-center leading-[30px] relative self-stretch tracking-[0] flex flex-col gap-[25px] items-center justify-center">
            <span>
              We simulate smart contracts into message transmission for
              explanation purposes.
            </span>
            <div className="flex">
              <span>Please refer to the </span>
              <span className="text-blue-400 flex">
                &nbsp;documentation&nbsp; <img src={indicator}></img>
              </span>
              <span>&nbsp;&nbsp;for more detailed processes.</span>
            </div>
          </p>
        </div>
        <div className="w-full flex flex-col chat-hisotry gap-2 inter">
          <div className="flex items-start gap-2 w-full">
            <img src={user_avatar}></img>
            <div className="bg-[#0F172ACC] flex flex-col gap-1  p-2 relative">
              <div className="conversation-arrow-left"></div>
              <div className="flex gap-2">
                <span className="text-slate-200 text-sm">Jacky</span>
                <span className="text-blue-300 text-sm">watchmaker</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-slate-200 text-sm">I think</span>
                <span className="text-slate-200 text-lg bg-[#A5B4FC33] rounded-[25px] px-[7px] py-[4px]">
                  1 Ton = 2jUSDT
                </span>
              </div>
              <div className="w-full flex justify-end text-slate-500 text-[10px]">
                11:35 AM
              </div>
            </div>
          </div>
          <div className="flex inter items-start gap-2 flex-row-reverse">
            <img src={user_avatar}></img>
            <div className="bg-[#0F172ACC] flex flex-col gap-1  p-2 relative">
              <div className="conversation-arrow-right"></div>
              <div className="flex gap-3 justify-end">
                <span className="text-slate-200 text-sm">Alan</span>
                <span className=" text-amber-400 text-sm">timekeepr</span>
              </div>
              <span className="text-slate-200 text-sm">It's too LOW</span>
              <div className="flex gap-3 items-center flex-row justify-center">
                <span className="text-slate-200 text-sm">I think</span>
                <span className="text-slate-200 text-lg bg-[#A5B4FC33] rounded-[25px] px-[7px] py-[4px]">
                  1 Ton = 2jUSDT
                </span>
              </div>
              <div className="w-full flex justify-end text-slate-500 text-[10px]">
                11:35 AM
              </div>
            </div>
          </div>
          <div className="flex inter items-start gap-2">
            <img src={user_avatar}></img>
            <div className="bg-[#0F172ACC] flex flex-col gap-1  p-2 relative">
              <div className="conversation-arrow-left"></div>
              <div className="flex gap-2">
                <span className="text-slate-200 text-sm">Jacky</span>
                <span className="text-blue-300 text-sm">watchmaker</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-slate-200 text-sm">Claim</span>
                <span className="text-slate-200 text-sm bg-teal-500 rounded-[25px] px-[7px] py-[4px]">
                  1 Ton = 2jUSDT
                </span>
              </div>
              <div className="w-full flex justify-end text-slate-500 text-[10px]">
                11:35 AM
              </div>
            </div>
          </div>
          <div className="flex inter items-start gap-2 flex-row-reverse">
            <img src={user_avatar}></img>
            <div className="bg-[#0F172ACC] flex flex-col gap-1  p-2 relative w-[235px]">
              <div className="conversation-arrow-right"></div>
              <div className="flex gap-2 justify-end">
                <span className="text-slate-200 text-sm">Maxey</span>
                <span className="text-teal-300 text-sm">User</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-slate-200 text-sm">
                  As a lending protocol, I need to get accurate price for
                  liquidation.{" "}
                </span>
              </div>
              <div className="w-full flex justify-end text-slate-500 text-[10px]">
                11:35 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
