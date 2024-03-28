"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

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

  return (
    <>
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-base font-semibold">
        {/* **************** Name ****************  */}
        <div className="hidden md:flex text-2xl">Raj Randive</div>

        {/******************** logo ********************/}
        <div className="md:hidden lg:flex">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className=" text-white mr-1"> Raj </span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
              .dev
            </span>
          </Link>
        </div>

        {/* **************** Links ****************  */}
        <div className="hidden md:flex gap-8">
          {links.map((eachlinks) => (
            <NavLink link={eachlinks} key={eachlinks.title} />
          ))}
        </div>

        {/******************** Responsive Menu ********************/}

        <div className="md:hidden">
          {/*************** MENU BUTTON ***************/}
          <button
            className="w-10 h-8 flex flex-col justify-evenly z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="w-8 h-1 bg-black rounded"></div>
            <div className="w-8 h-1 bg-black rounded"></div>
            <div className="w-8 h-1 bg-black rounded"></div>
          </button>

          {/*************** MENU LIST ***************/}
          {open && (
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl">
              {links.map((eachLink) => (
                <Link href={eachLink.url} key={eachLink.title}>
                  {eachLink.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;