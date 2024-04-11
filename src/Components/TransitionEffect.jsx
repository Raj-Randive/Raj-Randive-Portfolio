import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-stone-800"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-stone-600 "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-stone-300 "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}

export default TransitionEffect;
