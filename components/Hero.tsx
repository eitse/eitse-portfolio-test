import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Ewumi Itse",
      "I am a Musician, a Forex Trader",
      "I am a Web3 Developer/Enthusiast",
      "<IsoMuchLoveCoding/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col
    items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        className="mt-[75px] h-40 w-40 rounded-full object-cover"
        alt=""
        src="/image/eitsepix2.jpeg"
        height={150}
        width={150}
        priority={true}
      />

      <div className="z-10 ">
        <h2 className="text-sm mt-2 uppercase text-gray-500 pb-2 tracking-[8px]">
          SoftWare Engineer
        </h2>

        <h1>
          <span className="text-center text-base md:text-3xl font-semibold">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" cursorStyle="_" />
        </h1>

        <div className="mt-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
