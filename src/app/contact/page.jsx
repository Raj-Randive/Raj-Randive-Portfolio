"use client";
import { motion } from "framer-motion";
import React from "react";

function ContactPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1, ease: "easeIn" }}
        className="h-full"
      >
        {/************************** CONTAINER **************************/}
        <div className="text-white text-xl">Under Construction</div>
      </motion.div>
    </>
  );
}

export default ContactPage;
