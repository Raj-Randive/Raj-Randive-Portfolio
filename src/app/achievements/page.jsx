"use client";
import { motion } from "framer-motion";
import React from "react";

function AchievementPage() {
  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        Achievements Page
      </motion.div>
    </>
  );
}

export default AchievementPage;
