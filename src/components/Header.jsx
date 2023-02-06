import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between max-w-6xl  sm:mx-auto mx-2 items-center py-6">
      <div className="flex">
        <MenuItems title="HOME" address="/" Icon={AiFillHome} />
        <MenuItems title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="bg-amber-500 rounded-lg py-1 px-2 font-bold mr-1">
              IMDb
            </span>
            <span className=" text-xl hidden sm:inline ">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
