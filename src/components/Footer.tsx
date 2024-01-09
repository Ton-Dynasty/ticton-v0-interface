import mdTwitter from "../assets/md_twitter.svg";
import mdTelegram from "../assets/md_telegram.svg";
import mdDiscord from "../assets/md_discord.svg";

function Footer() {
    return (
        <div className=" flex w-full px-[12px] py-[11.25px] justify-center items-center mt-[86px]">
            <div className="w-full lg:w-[70%] flex flex-col gap-[36px]">
                <div className="w-full flex justify-end gap-[10px]">
                    <img src={mdDiscord}></img>
                    <img src={mdTelegram}></img>
                    <img src={mdTwitter}></img>
                </div>
                <div className="w-full h-[1px] bg-slate-400">

                </div>
                <div className="w-full flex justify-between">
                    <div className="duru text-[16px] leading-[30px] text-white">Based on TON</div>
                    <div className="duru text-[16px] leading-[30px] text-white">@2024 TON Dynasty</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;