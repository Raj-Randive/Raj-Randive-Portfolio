"use client";
import { motion } from "framer-motion";
import React from "react";
function ProjectPage() {
  return (
    <>
      <motion.div
        className="h-full"
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

export default ProjectPage;
