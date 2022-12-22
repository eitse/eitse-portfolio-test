import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript, SiTailwindcss, SiHtml5, SiPython } from "react-icons/si";

type Props = {};

function Skills({}: Props) {
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
      className="flex flex-col  justify-center items-center h-screen text-center xl:flex-row xl:px-10 
    min-h-screen  w-full max-w-[2000px] relative mx-auto xl:space-y-0"
    >
      <h3 className="absolute  xs:top-20 top-20 md:top-[6rem] lg:top-24 uppercase font-[600] tracking-[15px] text-[gray] text-3xl md:text-4xl">
        Skills
      </h3>
      <h3 className="hidden md:inline-flex absolute top-32 md:top-36 uppercase font-[600] tracking-[3px] text-[gray] text-sm">
        Hover over a Skill for Currency Proficiency
      </h3>
      <h3 className="md:hidden absolute top-32 uppercase font-[600] tracking-[3px] text-[gray] text-sm">
        Tap Skill for Currency Proficiency
      </h3>

      <div className="mt-24 grid grid-cols-4 gap-6 ">
        <Skill
          Icon={DiReact}
          style="experienceIcon text-blue-300 "
          proficiency={"89%"}
        />
        <Skill
          Icon={IoLogoNodejs}
          style="experienceIcon  text-green-400 "
          proficiency={"80%"}
        />
        <Skill
          Icon={SiTypescript}
          style="experienceIcon bg-white text-blue-500 "
          proficiency={"80%"}
        />

        <Skill
          Icon={SiTailwindcss}
          style="experienceIcon text-blue-300  "
          proficiency={"92%"}
        />
        <Skill Icon={SiHtml5} style="experienceIcon  text-blue-500 bg-white " />
        <Skill Icon={TbBrandNextjs} style="experienceIcon  " />
        <Skill Icon={SiPython} style="experienceIcon text-blue-300 " />

        <Skill Icon={SiTailwindcss} style="experienceIcon text-blue-300  " />
        <Skill Icon={DiReact} style="experienceIcon text-blue-300 " />
        <Skill Icon={IoLogoNodejs} style="experienceIcon  text-green-400 " />
        <Skill Icon={SiTypescript} style="experienceIcon text-blue-300 " />

        <Skill Icon={SiTailwindcss} style="experienceIcon text-blue-300 " />
        <Skill Icon={DiReact} style="experienceIcon text-blue-300 " />
        <Skill Icon={IoLogoNodejs} style="experienceIcon  text-green-400 " />
        <Skill Icon={SiTypescript} style="experienceIcon text-blue-300 " />

        <Skill Icon={SiTailwindcss} style="experienceIcon text-blue-300 " />
      </div>
    </motion.div>
  );
}

export default Skills;
