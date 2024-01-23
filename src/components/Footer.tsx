import mdTwitter from "../assets/md_twitter.svg";
import mdTelegram from "../assets/md_telegram.svg";
import mdGithub from "../assets/md_github.svg";
import { Button } from "@/components/ui/button";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const handleDCClick = () => {
    window.open("https://github.com/Ton-Dynasty/ticton-v0", "_blank");
  };
  const handleTGClick = () => {
    window.open("https://t.me/tictonchat", "_blank");
  };
  const handleTwitterClick = () => {
    window.open("https://x.com/TicTonOracle", "_blank");
  };
  return (
    <footer className=" mt-[86px] flex w-full items-center justify-center px-[12px] py-[11.25px]">
      <div className="flex w-full flex-col gap-[36px] lg:w-[70%]">
        <div className="flex w-full justify-end gap-[10px]">
          <Button variant={"link"} onClick={handleDCClick}>
            <img src={mdGithub} className="hover:fill-red-100"></img>
          </Button>
          <Button variant={"link"} onClick={handleTGClick}>
            <img src={mdTelegram}></img>
          </Button>
          <Button variant={"link"} onClick={handleTwitterClick}>
            <img src={mdTwitter}></img>
          </Button>
        </div>
        {/* Seperator */}
        <div className="h-[1px] w-full bg-slate-400"></div>
        {/* Seperator */}
        <div className="flex w-full justify-between">
          <div className="font-duru text-sm leading-[30px] text-white">
            Based on TON
          </div>
          <div className="font-duru text-sm leading-[30px] text-white">
            {`@${getCurrentYear()} TON Dynasty`}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
