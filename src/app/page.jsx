"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./homeStyles.css";

import Typewriter from "typewriter-effect";

// new Typewriter('#typewriter', {
//   strings: ['Hello', 'World'],
//   autoStart: true,
// });

export default function Home() {
  return (
    <>
      <motion.div
        className="h-full z-30"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row lg:gap-20 px-4 sm:px-8 sm:justify-center sm:items-center md:px-14 lg:px-20 xl:px-48 gap-16 overflow-scroll overflow-x-hidden">
          {/* ************ IMAGE CONTAINER ************ */}
          <div
            className="lg:h-full lg:w-1/2 flex justify-center items-center"
            id="box"
          >
            <div className="relative" id="imgContainer">
              <div className="" id="content">
                <Image
                  src="/photo_ff.png"
                  alt="Profile-Photo"
                  fill
                  className="object-contain"
                  id="profilePic"
                />
              </div>
            </div>
          </div>

          {/* ************ TEXT CONTAINER ************ */}
          <div className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-white">
            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-bold text-left w-full">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Android Developer",
                    "DevOps Engineer",
                    "Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                  devMode: true,
                }}
              />
            </h1>
            {/* DESC */}
            <p className="text-justify">
              Hi, I'm Raj Randive, a third-year CSE undergrad with a passion for
              problem-solving and collaboration. I thrive in team environments
              and love tackling real-world challenges. From Competitive
              Programming to Software Development, I'm always eager to learn and
              explore new technologies. As a web developer, I specialize in
              creating user-friendly websites that leave a lasting impression.
              Let's collaborate and bring your online vision to life!
            </p>
            {/* BUTTONS */}
            <div className="flex gap-4 w-full">
              <button className="p-4 rounded-lg ring-1 ring-black text-white bg-black ">
                View My Work
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black ">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
