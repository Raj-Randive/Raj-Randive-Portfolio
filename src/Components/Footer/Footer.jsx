"use client";
import { motion } from "framer-motion";
import React from "react";
import { comfortaa, majorMonoDisplay } from "../../app/fonts.js";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
} from "../Icons";
import NavLink from "../NavBar/NavLink";
import "./footerStyles.css";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

function Footer() {
  return (
    <>
      <div className="h-64 box-border bg-black text-white flex justify-center items-center relative">
        {/* top div LINE*/}
        <div className="w-full absolute top-0 h-0.5 bg-white"></div>
        {/* Left */}
        <div
          className="flex flex-col justify-center items-center gap-8 h-52 md:w-1/2 lg:w-1/3 xl:w-1/3 lg:h-52 xl:h-52 md:flex md:justify-center md:items-end md:flex-col md:gap-8 md:mr-8"
          id="left"
        >
          <h2 className={`text-3xl  ${majorMonoDisplay.className}`}>
            rAj rAndiVe
          </h2>
          <div
            className={`flex flex-wrap w-full items-end justify-end gap-5 ${comfortaa.className}`}
          >
            {links.map((eachlinks) => (
              <NavLink link={eachlinks} key={eachlinks.title} />
            ))}
          </div>
          {/* SOCIAL LINKS   */}
          <div
            className=" bg-white text-black rounded-full w-auto pr-4 pl-4 pt-3 pb-3 flex gap-4 md:hidden"
            id="socialLinks"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.github.com" target={"_blank"}>
                <GithubIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.linkedin.com" target="_blank">
                <LinkedInIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.twitter.com" target="_blank">
                <TwitterIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.instagram.com" target="_blank">
                <InstagramIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.telegram.org" target="_blank">
                <TelegramIcon />
              </a>
            </motion.div>
          </div>
        </div>

        {/* LINE */}
        <div
          className="hidden md:flex w-0.5 h-44 bg-white absolute left-[50%]"
          id="middle"
        ></div>

        {/* Right */}
        <div
          className="hidden md:w-1/2 lg:w-1/3 md:h-52 md:flex md:flex-col md:justify-center md:items-start md:gap-6 md:ml-8"
          id="right"
        >
          {/* SOCIAL LINKS   */}
          <div className="bg-white text-black rounded-full w-auto pr-4 pl-4 pt-3 pb-3 flex gap-4">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.github.com" target={"_blank"}>
                <GithubIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.linkedin.com" target="_blank">
                <LinkedInIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.twitter.com" target="_blank">
                <TwitterIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.instagram.com" target="_blank">
                <InstagramIcon />
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://www.telegram.org" target="_blank">
                <TelegramIcon />
              </a>
            </motion.div>
          </div>
          <p className={`text-sm ${comfortaa.className}`}>
            Raj Randive is a seasoned virtuoso navigating the realms of Web
            Development, DevOps, Cloud, and AI Solutions with finesse and flair.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
