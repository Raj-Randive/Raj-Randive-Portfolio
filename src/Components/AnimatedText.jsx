import { delay, motion } from "framer-motion";
import React from "react";

const quoteVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const singleWordeVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
};

function AnimatedText({ text, className }) {
  return (
    <>
      <div className="w-full mx-auto py-0 lg:py-2 flex items-center justify-center text-center overflow-hidden ">
        <motion.h1
          className={`inline-block w-full text-white font-bold ${className}`}
          variants={quoteVariants}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={singleWordeVariants}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
}

export default AnimatedText;
