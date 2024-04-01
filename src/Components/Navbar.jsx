"use client";
import { Pacifico } from "@next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import "../app/homeStyles.css";
import NavLink from "./NavLink";

const pacifico = Pacifico({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/work", title: "Work" },
  { url: "/skills", title: "Skills" },
  { url: "/achievements", title: "Achievements" },
  { url: "/contact", title: "Contact" },
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
      <div className="bg-[#000000] h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-base font-semibold text-white">
        {/* **************** Name ****************  */}
        <div
          className={`md:flex lg:text-4xl text-3xl ${pacifico.className}`}
          id="nme"
        >
          Raj Randive
        </div>

        {/* ******************* logo ******************* */}
        {/* <div className="md:hidden lg:flex">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className=" text-white mr-1"> Raj </span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
              .dev
            </span>
          </Link>
        </div> */}

        {/* **************** Links ****************  */}
        <div className="hidden md:flex gap-8" id="lin">
          {links.map((eachlinks) => (
            <NavLink link={eachlinks} key={eachlinks.title} />
          ))}
        </div>

        {/******************** Responsive Menu ********************/}

        <div className="" id="menubutton">
          {/*************** MENU BUTTON ***************/}
          <button
            className="w-8 h-10 flex flex-col justify-evenly z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "open" : "closed"}
              className="w-8 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "open" : "closed"}
              className="w-8 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "open" : "closed"}
              className="w-8 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>

          {/*************** MENU LIST ***************/}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="z-40 absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl"
            >
              {links.map((eachLink) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
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
