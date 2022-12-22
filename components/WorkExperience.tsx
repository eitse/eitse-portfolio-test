import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      //use ViewPoint to animate only once but whileInView to repetitively animate
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className="flex items-center mx-auto justify-center h-screen relative overflow-hidden  flex-col text-left md:flex-row  w-full"
    >
      <div className="absolute xs:top-[85px] top-[75px] md:top-[65px] lg:top-24 uppercase font-[600] tracking-[15px] text-[gray] xs:text-2xl text-3xl md:text-4xl">
        Experience
      </div>

      <div className="w-full h-fit flex space-x-5 scrollbar scrollbar-track-gray-300 scrollbar-track-rounded-lg scrollbar-thumb-red-400 hover:scrollbar-thumb-red-500 scrollbar-thumb-rounded-lg overflow-x-scroll p-5 snap-x snap-mandatory mt-16 ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
