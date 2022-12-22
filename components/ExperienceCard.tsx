import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="border border-red-500 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
   w-[22rem] md:w-[31.25rem] max-h-fit  xl:w-[56.25rem]  snap-center bg-[#292929] p-2 opacity-40 hover:opacity-100
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: 200,
          opacity: 0,
        }}
        //use ViewPoint to animate only once but whileInView to repetitively animate
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        src="/image/eitsepix3.jpeg"
        className="object-cover w-24 h-24 rounded-full  xl:w-[6.25rem] xl:h-[6.25rem]
         object-top"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-md font-light">CEO EitseDapp</h4>
        <p className="font-bold text-xs mt-1">EitseDapp</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="uppercase text-[10px] py-1 text-gray-300">
          Started work... Ended
        </p>
        <ul className="list-disc space-y-1 mt-1 text-[10px]">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
