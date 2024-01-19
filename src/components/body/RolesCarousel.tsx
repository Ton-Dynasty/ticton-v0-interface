import { useState } from "react";
import { Button } from "../ui/button";
import { Watch, AlarmClockCheck, UsersRound } from "lucide-react";

const RolesCarousel = () => {
  const roles = [
    {
      name: "Watchmaker",
      icon: <Watch className="w-full h-full" />,
      override: "text-blue-300",
      selectedStyle: "shadow-lg border",
    },
    {
      name: "TimeKeeper",
      icon: <AlarmClockCheck className="w-full h-full" />,
      override: "text-amber-500",
      selectedStyle: "shadow-lg border",
    },
    {
      name: "Users",
      icon: <UsersRound className="w-full h-full" size={24} />,
      override: "text-teal-400",
      selectedStyle: "shadow-lg border",
    },
  ];
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <section className="flex flex-col w-full justify-center items-center my-32">
      <div className="w-full flex flex-row justify-around items-center gap-20 py-10 md:py-20">
        {roles.map(({ name, icon, override, selectedStyle }, index) => {
          return (
            <Button
              className={`inline-flex py-1 px-3 ${override} gap-2 ${
                selectedIdx === index && selectedStyle
              }`}
              onClick={() => setSelectedIdx(index)}
            >
              <div className="w-10 h-10">{icon}</div>
              <div className="hidden md:block  text-2xl font-normal font-doppio leading-loose">
                {name}
              </div>
            </Button>
          );
        })}
      </div>
      <div className="inline-flex overflow-x-hidden w-full">
        <div className=" flex justify-between items-center h-60 w-full">
          <div className="flex justify-center">
            <img src={"https://via.placeholder.com/250x250"} alt="" />
          </div>
          <div className="text-white">1</div>
        </div>
      </div>
    </section>
  );
};

export default RolesCarousel;
