import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";
import { useState } from "react";

const Contact = () => {
  const [communityCount] = useState(200);
  const maxdigits = 6;

  return (
    <motion.section
      initial="hidden"
      variants={fadeIn("up", 0.3)}
      whileInView={"show"}
      className=" mx-auto flex w-full max-w-screen-md  select-none flex-col items-center justify-center gap-10 rounded-bl-lg rounded-br-[3rem] rounded-tl-[3rem] rounded-tr-lg bg-violet-300 px-16 py-10 md:px-20 md:py-20"
    >
      <div className="leading w-full text-pretty font-droid text-lg font-bold text-blue-950 md:text-3xl">
        We are a community of dreamers and innovators from around the world who
        are creating a better future and solving the problems of today.
      </div>
      <div className="flex w-full flex-col items-center md:items-end md:justify-normal md:gap-4">
        <motion.div className="flex w-full justify-between  leading-10 md:justify-end md:gap-1.5">
          {communityCount
            .toString()
            .padStart(maxdigits, "0")
            .split("")
            .map((digit, index) => {
              let seperator = undefined;
              if (
                (maxdigits - index) % 3 === 0 &&
                index !== communityCount - 1
              ) {
                seperator = (
                  <div className="md:m-0.5" key={`seperator-${index}`} />
                );
              }
              return (
                <>
                  {seperator}
                  <div
                    className="flex items-center justify-center rounded-lg bg-indigo-950 px-3 py-2 text-xl text-white  md:rounded-2xl md:px-4 md:py-3 md:text-2xl"
                    key={`digit-${index}`}
                  >
                    {digit}
                  </div>
                </>
              );
            })}
        </motion.div>
        <div className="font-dohyeon text-lg font-normal leading-10 text-indigo-950 md:text-xl">
          Total community member
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
