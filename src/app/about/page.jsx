"use client";
// import Brain from "@/Components/Brain";
// import Footer from "@/Components/Footer";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

function AboutPage() {
  // const containerRef = useRef();
  // const { scrollYProgress } = useScroll({ container: containerRef });

  // const skillRef = useRef();
  // // const isSkillRefInView = useInView(skillRef, {once:true});
  // const isSkillRefInView = useInView(skillRef, { margin: "-150px" });

  // const experienceRef = useRef();
  // const isExperienceRefInView = useInView(experienceRef, { margin: "-150px" });

  return (
    <>
      <motion.div
        className="h-full w-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        {/************************** CONTAINER **************************/}
        <div className="text-white text-xl">Under Construction</div>
      </motion.div>
    </>
  );
}

export default AboutPage;
