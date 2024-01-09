import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import discord from "../../assets/discord.svg";

function Contact() {
    return (

        <div className="flex flex-col w-full  justify-center items-center bg-[#93C5FD] rounded-[24px] py-[77px]">
            <div className="max-w-[1100px] w-full px-[30px]">
                <div className="w-full gap-[50px] flex justify-between flex-col lg:flex-row">
                    <div className="max-w-[719px] w-full text-[#172554] text-[36px] font-bold droid leading-[46px]">
                        We invent and use the latest technologies that enable the open, free, decentralized exchange of value, information and ideas. Technologies that are designed to protect the freedom, privacy and rights of all people, to make this world a more balanced and self-governing place.
                    </div>
                    <div className="flex gap-[10px] items-center w-full justify-center lg:w-auto">
                        <img src={twitter}/>
                        <img src={telegram}/>
                        <img src={discord}/>
                    </div>
                </div>
                <div className="mt-12 gap-[50px] flex justify-between flex-col lg:flex-row">
                    <div className="flex flex-col items-center w-full">
                        <div className="text-blue-900 text-[24px] leading-[46px] dohyon">
                            Total community member
                        </div>
                        <div className="flex mt-2 gap-7">
                            <div className="flex text-[32px] leading-[46px] gap-[5px]">
                                <div className="h-[64px] bg-blue-900 text-white px-[19px] py-[10px] rounded-[20px]">0</div>
                                <div className="h-[64px] bg-blue-900 text-white px-[19px] py-[10px] rounded-[20px]">0</div>
                                <div className="h-[64px] bg-blue-900 text-white px-[19px] py-[10px] rounded-[20px]">2</div>
                            </div>
                            <div className="flex text-[32px] leading-[46px] gap-[5px]">
                                <div className="h-[64px] bg-blue-900 text-white px-[19px] py-[10px] rounded-[20px]">0</div>
                                <div className="h-[64px] bg-blue-900 text-white px-[19px] py-[10px] rounded-[20px]">2</div>
                                <div className="h-[64px] bg-blue-900 text-white px-[19px] py-[10px] rounded-[20px]">4</div>
                            </div>
                        </div>
                    </div>
                    <div className=" dmsans text-[24px] leading-[29px]">
                        We invent and use the latest technologies that enable the open, free, decentralized exchange of value, information and ideas. Technologies that are designed to protect the freedom, privacy and rights of all people, to make this world a more balanced and self-governing place.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;