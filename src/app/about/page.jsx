"use client";
import Brain from "@/Components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

function AboutPage() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-150px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-150px" });

  return (
    <>
      <motion.div
        className="h-full w-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        {/************************** CONTAINER **************************/}
        <div
          className="h-full overflow-scroll lg:flex overflow-x-hidden text-white"
          ref={containerRef}
        >
          {/* TEXT CONTAINER */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 lg:w-1/2 lg:pr-0 xl:w-1/2">
            {/* WE HAVE THREE SECTIONS */}
            {/* ************************************************************** */}
            {/* SECTION-1: Biography */}
            <div className="flex flex-col gap-12 justify-center">
              {/* Biography - Title */}
              <h1 className="font-bold text-2xl">Biography</h1>
              {/* Biography - Desc */}
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ut, rerum facilis inventore corporis quaerat quasi, cupiditate
                totam consectetur, perferendis hic a maiores nobis? Dolor soluta
                iure quos iste incidunt, totam consectetur, perferendis hic a
                maiores nobis? Dolor soluta iure quos iste incidunt?
              </p>
              {/* Biography - Quote */}
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              {/* Biography - Sign */}
              <div className=""></div>
            </div>

            {/* ************************************************************** */}
            {/* SECTION-2: Skills */}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Skills
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex gap-4 flex-wrap"
              >
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Typescript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Javascript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Next.js
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React.js
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  SCSS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Tailwind CSS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  PostgreSQL
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Node.js
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Express.js
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  GraphQL
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Redux
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Vercel
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Framer Motion
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Three.js
                </div>
              </motion.div>

              {/* SKILL SCROLL SVG */}
              <motion.div
                className=""
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="30"
                  height="74"
                  viewBox="0 0 60 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="58"
                    height="88"
                    rx="29"
                    stroke="black"
                    stroke-width="2"
                  />
                  <line
                    x1="21.7071"
                    y1="94.7782"
                    x2="30.1924"
                    y2="103.263"
                    stroke="black"
                    stroke-width="2"
                  />
                  <line
                    x1="29.2929"
                    y1="102.778"
                    x2="37.7782"
                    y2="94.2929"
                    stroke="black"
                    stroke-width="2"
                  />
                  <circle
                    cx="30"
                    cy="27"
                    r="8"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </motion.div>
            </div>

            {/* ************************************************************** */}
            {/* SECTION-3: Experience */}
            <div
              className="flex flex-col justify-center pb-48 "
              ref={experienceRef}
            >
              {/*************************************************************/}
              {/* EXPERIENCE TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl mb-12"
              >
                Experience
              </motion.h1>

              {/******************** EXPERIENCE-LIST-1 ********************/}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className=""
              >
                {/* EXPERIENCE LIST ITEM*/}
                <div className="flex justify-between h-48">
                  {/*****************************/}
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* Job Title */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Senior Software Developer
                    </div>
                    {/* Job Desc */}
                    <div className="p-3 text-sm italic">
                      My current employment way better than the position before
                    </div>
                    {/* Job Date */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      2024 - present
                    </div>
                    {/* Job Company */}
                    <div className="w-fit p-1 bg-white rounded text-sm font-semibold">
                      Apple
                    </div>
                  </div>

                  {/*****************************/}
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center items-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>

                  {/*****************************/}
                  {/* RIGHT */}
                  <div className="w-1/3"></div>
                </div>
              </motion.div>

              {/******************** EXPERIENCE-LIST-2 ********************/}
              <motion.div
                initial={{ x: "300px" }}
                animate={isExperienceRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className=""
              >
                {/* EXPERIENCE LIST ITEM*/}
                <div className="flex justify-between h-48">
                  {/*****************************/}
                  {/* LEFT */}
                  <div className="w-1/3"></div>

                  {/*****************************/}
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center items-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>

                  {/*****************************/}
                  {/* RIGHT */}
                  <div className="w-1/3">
                    {/* Job Title */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Senior Software Developer
                    </div>
                    {/* Job Desc */}
                    <div className="p-3 text-sm italic">
                      My current employment way better than the position before
                    </div>
                    {/* Job Date */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      2024 - present
                    </div>
                    {/* Job Company */}
                    <div className="w-fit p-1 bg-white rounded text-sm font-semibold">
                      Apple
                    </div>
                  </div>
                </div>
              </motion.div>

              {/****************** EXPERIENCE-LIST-3 ******************/}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                transition={{ delay: 0.2 }}
                className=""
              >
                {/* EXPERIENCE LIST ITEM*/}
                <div className="flex justify-between h-48">
                  {/*****************************/}
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* Job Title */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Senior Software Developer
                    </div>
                    {/* Job Desc */}
                    <div className="p-3 text-sm italic">
                      My current employment way better than the position before
                    </div>
                    {/* Job Date */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      2024 - present
                    </div>
                    {/* Job Company */}
                    <div className="w-fit p-1 bg-white rounded text-sm font-semibold">
                      Apple
                    </div>
                  </div>

                  {/*****************************/}
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center items-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>

                  {/*****************************/}
                  {/* RIGHT */}
                  <div className="w-1/3"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* SVG CONTAINER */}
          <div className="hidden lg:block w-1/3 lg:w-1/2 xl:w-1/2 sticky top-0 z-30">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutPage;
