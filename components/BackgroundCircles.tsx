import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 0.8],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 1.5,
      }}
      className="mt-20 relative flex justify-center items-center"
    >
      <div
        className="border [#333333] animate-ping  absolute  
      mt-96 rounded-full h-[150px] w-[150px]"
      />
      {/* <div className="border absolute border-[#333333] mt-96 rounded-full h-[150px] w-[150px]" /> */}
      <div className="border absolute border-[#333333] mt-96 rounded-full h-[350px] w-[350px]" />
      <div
        className="border absolute border-[#F7AB0A] mt-96 rounded-full h-[450px] w-[450px]
      opacity-20"
      />
    </motion.div>
  );
}

export default BackgroundCircles;
