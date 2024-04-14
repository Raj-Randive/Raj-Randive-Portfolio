"use client";
import AnimatedText from "@/Components/AnimatedText";
import { CustomGithubIcon } from "@/Components/Icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../../public/projects/project1.png";
import { comfortaa, josefin_Sans, majorMonoDisplay, oxygen } from "../fonts.js";

// **************** FEATURED PROJECT COMPONENT ****************

const ProjectComponent = ({ type, title, summary, img, link, githublink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-orange-700 shadow-md  shadow-amber-400 p-12 backdrop-blur-[3px] hover:shadow-amber-600">
      {/* ************* Upper *************  */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-3xl"
      >
        <Image
          src={img}
          alt={title}
          width={"100%"}
          height={"100%"}
          className="w-full h-auto"
        />
      </Link>

      {/* ************* Lower *************  */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold xs:text-2xl xs:text-center xs:bg-black">
            {title}
          </h2>
        </Link>
        <span className="text-stone-300 font-bold text-xl">{type}</span>

        <p className="my-2 font-medium text-justify">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={githublink} target="_blank" className="">
            <div className="bg-white w-auto h-auto rounded-full border border-solid border-white">
              <CustomGithubIcon wid="48" hei="48" />
            </div>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-6 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold border xs:text-sm xs:p-[0.8rem]"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

function ProjectPage() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: "easeIn" }}
        className="h-full"
      >
        {/************************** CONTAINER **************************/}
        <main className="text-white flex flex-col justify-center items-center w-full pr-44 pl-44 pb-44">
          <AnimatedText
            text="imagination trumps knowledge!"
            className={`!p-16 !text-5xl  ${majorMonoDisplay.className}`}
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 ">
            <div className="col-span-12">
              <ProjectComponent
                type="Featured Project"
                title="Title-1"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio deleniti beatae nihil soluta assumenda iusto distinctio aperiam ut aspernatur numquam asperiores temporibus recusandae, ex nesciunt ad quae explicabo necessitatibus."
                img={Project1}
                link="www.youtube.com"
                githublink="www.github.com"
              />
            </div>
            <div className="col-span-12">
              <ProjectComponent
                type="Featured Project"
                title="Title-1"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio deleniti beatae nihil soluta assumenda iusto distinctio aperiam ut aspernatur numquam asperiores temporibus recusandae, ex nesciunt ad quae explicabo necessitatibus."
                img={Project1}
                link="www.youtube.com"
                githublink="www.github.com"
              />
            </div>
            <div className="col-span-12">
              <ProjectComponent
                type="Featured Project"
                title="Title-1"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio deleniti beatae nihil soluta assumenda iusto distinctio aperiam ut aspernatur numquam asperiores temporibus recusandae, ex nesciunt ad quae explicabo necessitatibus."
                img={Project1}
                link="www.youtube.com"
                githublink="www.github.com"
              />
            </div>
            <div className="col-span-12">
              <ProjectComponent
                type="Featured Project"
                title="Title-1"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio deleniti beatae nihil soluta assumenda iusto distinctio aperiam ut aspernatur numquam asperiores temporibus recusandae, ex nesciunt ad quae explicabo necessitatibus."
                img={Project1}
                link="www.youtube.com"
                githublink="www.github.com"
              />
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}

export default ProjectPage;
