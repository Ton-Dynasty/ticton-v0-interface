import watchmaker from "../../assets/watchmaker.svg";
import timekeeper from "../../assets/timekeeper.svg";
import user from "../../assets/user.svg";
import avatar from "../../assets/avatar.svg";
import ring from "../../assets/ring.svg";

function RoleCarousel() {
    return (
        <div className="flex justify-center items-center flex-col py-[10px]">
            <div className="justify-center flex gap-[55px] items-center doppio w-full overflow-x-auto">
                <div className="gap-5 px-[30px] py-[27px] bg-blue-500/20 rounded-[25px] flex items-center">
                    <img src={watchmaker}></img>
                    <span className="text-[#93C5FD] text-[32px]">Watchmaker</span>
                </div>
                <div className="flex items-center gap-5">
                    <img src={timekeeper}></img>
                    <span className=" text-amber-500 text-[32px]">Time keeper</span>
                </div>
                <div className="flex items-center gap-5">
                    <img src={user}></img>
                    <span className="text-teal-400 text-[32px]">User</span>
                </div>
            </div>
            <div className="gap-[55px] flex items-center justify-center flex-col lg:flex-row mt-[50px]">
                <div className="w-[400px] sm:w-[423px] h-[406px] flex justify-center items-center bg-[#8F96E630]/[19%] flex-col rounded-[25px]">
                    <img src={avatar}></img>
                    <span className="duru text-[16px] leading-[30px] text-white h-[105px] flex justify-center items-center">顯示角色名稱和形象</span>
                </div>
                <div className="flex flex-col gap-[61px] w-full max-w-[548px]">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-5">
                            <img src={watchmaker}></img>
                            <span className="text-blue-300 text-[32px] doppio">Tick</span>
                        </div>
                        <div className="text-white text-[20px] leading-[30px] w-full max-w-[423px] px-[38px] droid">
                            Lorem ipsum dolor sit amet consectetur. Et ut aliquet tellus arcu vulputate eu eleifend. Etiam nibh facilisi volutpat magna aliquet sed eget gravida eget.
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-5">
                            <img src={ring}></img>
                            <span className="text-red-400 text-[32px] doppio">Ring</span>
                        </div>
                        <div className="text-white text-[20px] leading-[30px] w-full max-w-[423px] px-[38px] droid">
                            Lorem ipsum dolor sit amet consectetur. Et ut aliquet tellus arcu vulputate eu eleifend. Etiam nibh facilisi volutpat magna aliquet sed eget gravida eget.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoleCarousel;