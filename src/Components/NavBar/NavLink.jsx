"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <>
      <Link
        className={`rounded ${
          pathName === link.url
        } text-white z-30 relative text-base group`}
        href={link.url}
      >
        {link.title}
        <span
          className={`h-[0.5px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
            pathName === link.url ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    </>
  );
}

export default NavLink;
