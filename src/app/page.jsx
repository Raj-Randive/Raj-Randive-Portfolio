"use client";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { comfortaa, majorMonoDisplay } from "./fonts.js";
import "./homeStyles.css";

export default function Home() {
  return (
    <>
      <motion.div
        className="h-full z-30 overflow-x-hidden overflow-scroll"
        id="mainContainer"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div
          id="upperContainer"
          className="h-full flex flex-col lg:flex-row gap-16 lg:gap-12 px-4 sm:px-8 md:px-14 lg:px-16 xl:px-44"
        >
          {/* ************ IMAGE CONTAINER ************ */}
          <div
            className="lg:h-full lg:w-1/2 flex justify-center items-center"
            id="box"
          >
            <div
              className="bg-black border-white border-2 p-2"
              id="mainImgContainer"
            >
              <div className="relative w-auto " id="imgContainer">
                <Image
                  src="/pp5.jpg"
                  alt="Profile-Photo"
                  fill
                  className="object-fill rounded-3xl shadow-xl"
                  sizes="40"
                  id="profilePic"
                />
              </div>
            </div>
          </div>

          {/* ************ TEXT CONTAINER ************ */}
          <div
            className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-white"
            id="textBox"
          >
            {/* TITLE */}
            <h1
              className={`text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left lg:text-left  w-full nameType ${majorMonoDisplay.className}`}
            >
              <Typewriter
                options={{
                  strings: [
                    "fullstAck deVeloper",
                    "Android deVeloper",
                    "deVops engineer",
                    "freelancer",
                  ],
                  delay: 80,
                  pauseFor: 1500,
                  autoStart: true,
                  loop: true,
                  devMode: false,
                }}
              />
            </h1>
            {/* DESC */}
            <p className={`text-justify ${comfortaa.className}`}>
              Hi, I'm Raj Randive, a third-year CSE undergrad with a passion for
              problem-solving and collaboration. I thrive in team environments
              and love tackling real-world challenges. From Competitive
              Programming to Software Development, I'm always eager to learn and
              explore new technologies. As a web developer, I specialize in
              creating user-friendly websites that leave a lasting impression.
              Let's collaborate and bring your online vision to life!
            </p>
            {/* BUTTONS */}
            <div className="flex gap-4 w-full mb-16">
              <button
                className={`p-4 rounded-lg ring-1 ring-black text-white bg-black ${majorMonoDisplay.className}`}
              >
                resume
              </button>
              <button
                className={`p-4 rounded-lg ring-1 ring-black ${majorMonoDisplay.className}`}
              >
                contact me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
