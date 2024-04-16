"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { majorMonoDisplay } from "../../app/fonts.js";
import "../../app/homeStyles.css";
import NavLink from "./NavLink.jsx";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "projects" },
  { url: "/contact", title: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="border-b-2 border-slate-600 border-t-0 bg-[#000000] h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-base font-semibold text-white z-40 relative">
        {/* **************** Name ****************  */}
        <div
          className={`md:flex lg:text-3xl text-2xl font-extrabold ${majorMonoDisplay.className}`}
          id="name"
        >
          rAj rAndiVe
        </div>

        {/* **************** Links ****************  */}
        <div
          className={`hidden md:flex gap-8 ${majorMonoDisplay.className}`}
          id="lin"
        >
          {links.map((eachlinks) => (
            <NavLink link={eachlinks} key={eachlinks.title} />
          ))}
        </div>

        {/******************** Responsive Menu ********************/}

        <div
          className={`${open ? "fixed" : "absolute"} fixed right-6 z-[35]`}
          id="menubutton"
        >
          {/*************** MENU BUTTON ***************/}

          <button
            className="sticky w-7 h-9 flex flex-col justify-evenly z-50"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "open" : "closed"}
              className="w-7 h-0.5 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "open" : "closed"}
              className="w-7 h-0.5 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "open" : "closed"}
              className="w-7 h-0.5 bg-white rounded origin-left "
            ></motion.div>
          </button>

          {/*************** MENU LIST ***************/}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="z-[32] fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl"
            >
              {links.map((eachLink) => (
                <motion.div
                  variants={listItemVariants}
                  className={`${majorMonoDisplay.className}`}
                  key={eachLink.title}
                >
                  <Link href={eachLink.url}>{eachLink.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
