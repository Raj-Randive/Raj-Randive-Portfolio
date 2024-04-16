import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomGithubIcon } from "./Icons";

const ProjectComponent = ({ type, title, summary, img, link, githublink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-white shadow-md  shadow-white p-6 backdrop-blur-[3px]  lg:p-12 lg:flex-row">
      {/* ************* Upper *************  */}
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-3xl lg:w-1/2"
      >
        <Image
          src={img}
          alt={title}
          width={"100%"}
          height={"100%"}
          className="w-full h-auto"
        />
      </Link>

      {/* ************* Lower *************  */}
      <div className="w-full flex flex-col justify-center items-center lg:items-start lg:justify-between lg:pl-6 lg:w-1/2">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-2xl lg:text-left lg:text-4xl font-bold">
            {title}
          </h2>
        </Link>
        <span className="text-stone-300 font-bold lg:text-xl">{type}</span>

        <p className="my-2 text-justify text-sm lg:text-lg">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={githublink} target="_blank" className="">
            <div className="bg-white w-auto h-auto rounded-full border border-solid border-white">
              <CustomGithubIcon wid="38" hei="38" />
            </div>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-6 text-sm rounded-lg bg-black text-white p-2 px-3 lg:px-6 lg:text-lg font-semibold border "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectComponent;
