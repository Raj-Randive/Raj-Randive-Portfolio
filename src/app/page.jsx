"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
          {/* ************ IMAGE CONTAINER ************ */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image
              // src="/photo2.png"
              src="/photo_ff.png"
              alt="Profile-Photo"
              fill
              className="object-contain"
            />
          </div>

          {/* ************ TEXT CONTAINER ************ */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-bold">
              Crafting Digital Experiences, Designing Tomorrow
            </h1>
            {/* DESC */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              fugit rem exercitationem culpa pariatur dolores, necessitatibus
              quisquam facilis repellat sint quam ex soluta? Assumenda est
              itaque vero soluta placeat ducimus!
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
