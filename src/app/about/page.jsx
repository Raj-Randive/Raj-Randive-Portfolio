"use client";
import TransitionEffect from "@/Components/TransitionEffect";
import { motion } from "framer-motion";
import React from "react";
function AboutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1, ease: "easeIn" }}
        className="h-full w-full"
      >
        {/************************** CONTAINER **************************/}
        <div className="text-white text-xl">Under Construction</div>
      </motion.div>
    </>
  );
}

export default AboutPage;
