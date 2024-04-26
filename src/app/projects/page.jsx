"use client";
import AnimatedText from "@/Components/AnimatedText";
import { motion } from "framer-motion";
import React from "react";
import Project1 from "../../../public/projects/project1.png";
import ProjectComponent from "../../Components/ProjectComponent";
import { comfortaa, josefin_Sans, majorMonoDisplay, oxygen } from "../fonts.js";

// **************** FEATURED PROJECT COMPONENT ****************

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
        <main className="text-white flex flex-col justify-center items-center w-full px-12 lg:px-44 pb-32 lg:pb-44">
          <AnimatedText
            text="imagination trumps knowledge!"
            className={`!py-8 lg:!p-16 !text-xl lg:!text-5xl  ${majorMonoDisplay.className}`}
          />
          <div className="grid grid-cols-12 gap-[1.7rem] gap-y-24 lg:gap-y-32 lg:gap-28">
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
