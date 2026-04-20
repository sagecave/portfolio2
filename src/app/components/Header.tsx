"use client";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import NavigationLinks from "./navigation/NavigationLinks";
const Header = () => {
  const [menuVisibleState, setMenuVisibleSate] = useState(false);
  return (
    <header className=" text-primaryColor_black_300  overflow-x-hidden  sticky top-0 md:bg-transparent bg-boxColor_black_800Test md:backdrop-blur-lg z-10 grid-cols-subgrid grid md:col-start-1 md:col-end-4 pt-3 pb-3 col-start-1 col-end-3">
      <div className="col-start-2 col-end-2  justify-between items-center h-20 px-4 hidden md:flex">
        <Link href="#Home" className="hover:text-secoundaryColor_white">
          <Image src={"./svg/Logo_Icon_Colors_copy.svg"} alt="Ceroo studio logo, of a infinity loop" width={60} height={60} unoptimized priority={true} />
        </Link>
        <NavigationLinks />
      </div>
      <div className="col-start-2 col-end-2  md:hidden z-20 ml-6 mt-4">
        <button onClick={() => setMenuVisibleSate(!menuVisibleState)}>
          {menuVisibleState ? <Image src="./svg/closeIcon.svg" alt="Close menu icon" width={35} height={35} unoptimized /> : <Image src="./svg/hambrugerIcon.svg" alt="Open menu icon" width={35} height={35} unoptimized />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full backdrop-blur-lg  bg-boxColor_black_800Test 
                 transition-transform duration-300 ease-in-out 
                 ${menuVisibleState ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className=" z-20 mt-20">
          <ul className="flex flex-col space-x-4 gap-4 ml-6">
            <li>
              <Link onClick={() => setMenuVisibleSate(!menuVisibleState)} href="#Home" className="hover:text-secoundaryColor_white text-header2 text-secoundaryColor_white">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuVisibleSate(!menuVisibleState)} href="#Projects" className="hover:text-secoundaryColor_white text-header2 text-secoundaryColor_white">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuVisibleSate(!menuVisibleState)} href="#WhatIDo" className="hover:text-secoundaryColor_white text-header2 text-secoundaryColor_white">
                What i do
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuVisibleSate(!menuVisibleState)} href="#About" className="hover:text-secoundaryColor_white text-header2 text-secoundaryColor_white">
                About
              </Link>
            </li>
            <li className=" ">
              <Link onClick={() => setMenuVisibleSate(!menuVisibleState)} href="#GetInTouch" className="hover:text-secoundaryColor_white text-header2 text-secoundaryColor_white">
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
