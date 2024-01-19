import mdTwitter from "../assets/md_twitter.svg";
import mdTelegram from "../assets/md_telegram.svg";
import mdDiscord from "../assets/md_discord.svg";
import { Button } from "@/components/ui/button";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const handleDCClick = () => {
    console.error("not implemented");
  };
  const handleTGClick = () => {
    console.error("not implemented");
  };
  const handleTwitterClick = () => {
    console.error("not implemented");
  };
  return (
    <footer className=" flex w-full px-[12px] py-[11.25px] justify-center items-center mt-[86px]">
      <div className="w-full lg:w-[70%] flex flex-col gap-[36px]">
        <div className="w-full flex justify-end gap-[10px]">
          <Button variant={"link"} onClick={handleDCClick}>
            <img src={mdDiscord} className="hover:fill-indigo-500"></img>
          </Button>
          <Button variant={"link"} onClick={handleTGClick}>
            <img src={mdTelegram}></img>
          </Button>
          <Button variant={"link"} onClick={handleTwitterClick}>
            <img src={mdTwitter}></img>
          </Button>
        </div>
        <div className="w-full h-[1px] bg-slate-400"></div>
        <div className="w-full flex justify-between">
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
