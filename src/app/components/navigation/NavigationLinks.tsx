import Link from "next/link";

const NavigationLinks = () => {
  return (
    <nav>
      <ul className="flex space-x-6 justify-center items-center">
        <li>
          <Link href="#Projects" className="hover:text-secoundaryColor_white ">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#WhatIDo" className="hover:text-secoundaryColor_white ">
            What i do
          </Link>
        </li>
        <li>
          <Link href="#About" className="hover:text-secoundaryColor_white">
            About Me
          </Link>
        </li>
        <li className=" ml-2">
          <Link
            href="#GetInTouch"
            className="inline-block  transition transform delay-150 duration-300 ease-in-out
             hover:-translate-y-1 hover:scale-110 text-secoundaryColor_white   bg-gradient-to-r from-[#f9ac5c] via-[#cc4f6d] to-[#9266ab] pl-8 pr-8 pt-2.5 pb-2.5 rounded-sm  "
          >
            Get in touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
