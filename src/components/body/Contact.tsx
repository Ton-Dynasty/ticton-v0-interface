import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";
import { useEffect, useState } from "react";

const Contact = () => {
  const [communityCount, setCommunityCount] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      setAnimationStarted(true);
      window.removeEventListener("scroll", handleScroll);
    } else if (
      window.scrollY < document.body.offsetHeight - 200 &&
      communityCount !== target
    ) {
      setAnimationStarted(false);
      setCommunityCount(0);
    }
  };

  const target = 999999;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (!animationStarted) return;

    let start: number = 0;
    const duration = 3000; // Duration in milliseconds

    const frame = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easeInOutProgress =
        -(Math.cos((Math.PI * progress) / duration) - 1) / 2;

      setCommunityCount(
        Math.round(Math.min(easeInOutProgress * target, target)),
      );

      if (progress < duration) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [animationStarted, target]);

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
          <motion.div className="flex gap-1.5 text-base leading-10 md:text-3xl">
            {communityCount
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
