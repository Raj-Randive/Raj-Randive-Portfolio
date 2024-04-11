"use client";
import { motion } from "framer-motion";
import React from "react";

function ContactPage() {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="h-full"
      >
        {/************************** CONTAINER **************************/}
        <div className="text-white text-xl">Under Construction</div>
      </motion.div>
    </>
  );
}

export default ContactPage;
