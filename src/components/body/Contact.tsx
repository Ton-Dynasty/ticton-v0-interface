import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";
const Contact = () => {
  const getCommunityNumber = () => {
    const num = Math.floor(Math.random() * 1e6);
    console.log(num);
    return num;
  };
  return (
    <motion.section
      initial="hidden"
      variants={fadeIn("up", 0.3)}
      whileInView={"show"}
      className="mx-auto flex w-full  max-w-screen-md flex-col items-center justify-center gap-10 rounded-2xl bg-blue-300 px-16 py-10 md:px-20 md:py-20"
    >
      <div className=" leading w-full font-droid text-lg font-bold text-blue-950 md:text-justify md:text-3xl md:leading-10">
        We are a community of dreamers and innovators from around the world who
        are creating a better future and solving the problems of today.
      </div>
      <div className="ml-auto w-full font-dmsans text-base font-normal text-black md:w-2/3 md:text-justify md:text-xl md:leading-7">
        We invent and use the latest technologies that enable the open, free,
        decentralized exchange of value, information and ideas. Technologies
        that are designed to protect the freedom, privacy and rights of all
        people, to make this world a more balanced and self-governing place.
      </div>
      <div className="flex w-full flex-col items-center md:items-start">
        <div className="font-dohyeon text-xl font-normal leading-10 text-blue-900 md:text-2xl">
          Total community member
        </div>
        <div className="mt-2 flex gap-7">
          <div className="flex gap-1.5 text-base leading-10 md:text-3xl">
            {getCommunityNumber()
              .toString()
              .padStart(6, "0")
              .split("")
              .map((digit, index) => {
                let seperator = undefined;
                if (index % 3 === 0 && index !== 0) {
                  seperator = <div className="m-2" />;
                }
                return (
                  <>
                    {seperator}
                    <div className="flex items-center justify-center rounded-[20px] bg-blue-900 px-5 py-2.5 text-white md:h-16">
                      {digit}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
