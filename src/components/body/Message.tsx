import { motion } from "framer-motion";
import { fadeIn } from "../animation/fade";

export interface MessageProps {
  avatar: string; // link to avatar
  profile: JSX.Element; // JSX element of profile
  content: JSX.Element; // JSX element of content
  time: string; // time of message e.g. 10:00AM
  side: "left" | "right"; // side of message
  delay?: number; // delay of animation
}

export const MessageRow = ({
  avatar,
  profile,
  content,
  time,
  side,
  delay,
}: MessageProps) => {
  return (
    <motion.div
      initial="hidden"
      variants={fadeIn(side, delay || 0.3)}
      whileInView={"show"}
      className={`flex w-full flex-row ${side === "left" ? "justify-start" : "justify-end"} my-4 items-center gap-2`}
    >
      <div
        className={`h-16 w-16 ${side === "left" ? "order-1" : "order-3"} rounded-full`}
      >
        <img src={avatar} alt={avatar} />
      </div>
      <div className="order-2 flex flex-col gap-1">
        <div>{profile}</div>
        <div
          className={`inline-flex items-center justify-start gap-2.5 rounded-tl-3xl rounded-tr-3xl bg-gray-800 py-4 pl-5 pr-5 ${side === "left" ? "rounded-br-3xl" : "rounded-bl-3xl"}`}
        >
          {content}
        </div>
      </div>
      <div
        className={`font-sora self-end text-xs font-normal capitalize text-neutral-700 ${side === "left" ? "order-3" : "order-1"}`}
      >
        {time}
      </div>
    </motion.div>
  );
};
