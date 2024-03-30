"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

function TransitionProvider({ children }) {
  // To trigger the animation, write the key in that div.
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-200 to-red-200"
      >
        {/* ANIMATION DIV FOR PAGE TRANSITIONS */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-3xl z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* THIS DIV IS FOR PATHNAME */}
        <motion.div
          className="fixed text-white m-auto top-0 bottom-0 left-0 right-0 text-6xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {pathName.substring(1).toLocaleUpperCase()}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-3xl bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        {/* NAVBAR DIV */}
        <div className="h-20">
          <Navbar />
        </div>
        {/* CHILDREN DIV */}
        <div className="h-[calc(100vh-5rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
