import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
      className="h-screen max-w-full z-0 flex flex-col relative justify-center items-center text-center md:text-left "
    >
      <div className="absolute  xs:top-20 top-20 md:top-[6rem] lg:top-24 uppercase font-[600] tracking-[15px] text-[gray] md:text-4xl text-3xl">
        About
      </div>

      <div
        className="shadow-md shadow-gray-500 max-h-fit max-w-fit rounded-lg border border-red-400 mt-24 md:m-10 flex flex-col 
      hover:border-red-300 transition-all justify-center items-center md:flex-row md:justify-center"
      >
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          //use ViewPoint to animate only once but whileInView to repetitively animate
          whileInView={{
            x: 0,
            opacity: [0.1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className=" md:mt-0 mt-12  xs:h-20 xs:w-20 h-40 w-40 lg:h-64 lg:w-64 md:h-56 md:w-56 md:rounded-lg rounded-full object-cover object-left-top"
          alt=""
          src="/image/eitsepix3.jpeg"
        />

        <div>
          <div className="animate-pulse transition-all xs:mt-0 mt-5 md:px-10 md:mt-0 xs:text-lg text-xl md:text-2xl font-[600] ">
            My Humble Little Background
          </div>
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            //use ViewPoint to animate only once but whileInView to repetitively animate
            whileInView={{
              x: 0,
              opacity: [0.1, 0.5, 1],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
            className=" xs:text-xs md:text-[14px] my-3 md:px-10 px-5 xs:max-w-xs max-w-lg text-justify md:max-w-4xl "
          >
            A Programmer with so much interest in Developing Blockchain
            Decentralized Applications. Willing to learn and adapt to the latest
            emerging Technologies. Currently Learning and Developing Frontend
            Application Using React/Next.js. <br /> My Goal in the next 5 years
            is to develop large scale Web3 Applications that will meet the need
            of users. <br /> If I arent Writing Codes, I love trading the Forex
            Market and Playing Musical Instruments for Fun.
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
