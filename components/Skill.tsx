import React from "react";
import { motion } from "framer-motion";

type Props = {
  Icon?: any;
  style?: string;
  proficiency?: string;
};

function Skill({ Icon, style, proficiency }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      //use ViewPoint to animate only once but whileInView to repetitively animate
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <Icon className={style} />
      <div
        className="opacity-0 flex  hover:opacity-[1] justify-center items-center absolute rounded-full top-0 z-5 hover:bg-gray-500 hover:bg-opacity-[0.9]
      text-black text-[22px]  font-semibold h-full w-full "
      >
        <span className="animate-bounce">{proficiency}</span>
      </div>
    </motion.div>
  );
}

export default Skill;
