import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex pl-10 pb-10 md:pl-0 flex-col md:flex-row  justify-between min-h-[20vh] bg-transparent text-white col-start-2 col-end-3 ">
      <div className="mb-5 mt-15 sm:mt-0">
        <Image src={`./svg/Logo_Icon_Colors_copy.svg`} alt="Creoo Studio with a logo" width={60} height={60} unoptimized />
      </div>
      <div className=" flex flex-row gap-10 flex-wrap">
        {/* <div>
          <h2 className=" text-secoundaryColor_white text-[1.25rem] mb-2">Legal & Privacy</h2>
          <ul className=" text-paragraph text-primaryColor_black_300">
            <li>
              <Link className=" hover:text-primaryColor_black_200" href={"/"}>
                Terms
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primaryColor_black_200" href={"/"}>
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link className=" hover:text-primaryColor_black_200" href={"/"}>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div> */}
        <div>
          <h2 className=" text-secoundaryColor_white text-[1.25rem] mb-2">Pages</h2>
          <ul className=" text-paragraph text-primaryColor_black_300 flex flex-col">
            <Link className=" hover:text-primaryColor_black_200" href={"#Projects"}>
              Projects
            </Link>
            <Link className=" hover:text-primaryColor_black_200" href={"#WhatIDo"}>
              What i do
            </Link>
            <Link className=" hover:text-primaryColor_black_200" href={"#About"}>
              About
            </Link>
            <Link className=" hover:text-primaryColor_black_200" href={"#GetInTouch"}>
              Get in touch
            </Link>
          </ul>
        </div>
        <div>
          <h2 className=" text-secoundaryColor_white text-[1.25rem] mb-2">Get in touch</h2>
          <ul className=" text-paragraph text-primaryColor_black_300 ">
            <Link className=" hover:text-primaryColor_black_200" href="#GetInTouch">
              Get in touch
            </Link>

            <li>+45 22507898</li>
            <li>andreassage@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
