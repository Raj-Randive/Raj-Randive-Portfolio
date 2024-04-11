"use client";
import TransitionEffect from "@/Components/TransitionEffect";
import { motion } from "framer-motion";
import React from "react";
function AboutPage() {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="h-full w-full"
      >
        {/************************** CONTAINER **************************/}
        <div className="text-white text-xl">Under Construction</div>
      </motion.div>
    </>
  );
}

export default AboutPage;
