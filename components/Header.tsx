import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-[rgb(36,36,36)] sticky shadow-md top-0 p-2 md:h-auto h-14 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          y: 0,
          scale: 1,
          rotate: 300,
        }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="h-12 flex justify-center items-center space-x-2"
      >
        {/* Social Icons */}
        <SocialIcon
          target="_blank"
          style={{ height: 40, width: 40 }}
          url="https://www.facebook.com/eitse"
        />
        <SocialIcon
          target="_blank"
          style={{ height: 40, width: 40 }}
          url="https://www.linkedin.com/in/ewumi-itse-blessing-ab6754161"
        />
        <SocialIcon
          target="_blank"
          style={{ height: 40, width: 40 }}
          url="https://www.twitter.com/EwumiItse"
        />
        <SocialIcon
          target="_blank"
          style={{ height: 40, width: 40 }}
          url="https://wa.me/+2347063170244"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          y: 0,
          scale: 1,
          rotate: 300,
        }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          url="#contactUs"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
        />
        <p
          className="uppercase hidden md:inline-flex 
        text-sm text-gray-400 md:mr-5 lg:mr-3"
        >
          <a href="#contactUs">Get in Touch</a>
        </p>
      </motion.div>
    </header>
  );
}
