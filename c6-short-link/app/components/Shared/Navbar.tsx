"use client";

import { navbarLinks } from "../../../utils/NavbarData";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SectionContainer>
      <nav className="hidden justify-between pt-6 lg:flex">
        <ul className="flex gap-x-8 justify-center items-center">
          <Link href="/">
            <Image
              className="mr-2"
              src="./images/logo.svg"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>

          {navbarLinks.map(({ title, link, icon }) => (
            <li
              key={title}
              className="text-GrayishViolet lg:hover:text-VeryDarkBlue transition-colors"
            >
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>

        <aside className="hidden lg:flex gap-x-6 justify-center items-center">
          <button className="text-GrayishViolet lg:hover:text-VeryDarkBlue transition-colors">
            Login
          </button>
          <button className="text-white font-bold bg-Cyan rounded-full px-6 py-2 lg:hover:brightness-110 transition">
            Sign Up
          </button>
        </aside>
      </nav>

      <nav className="flex py-4 justify-between lg:hidden">
        <Link href="/">
          <Image src="./images/logo.svg" alt="logo" width={120} height={120} />
        </Link>

        {!isMenuOpen ? (
          <Image
            src="./svg/menu-mobile.svg"
            alt="menu"
            width={30}
            height={30}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <>
            <Image
              src="./svg/close-button.svg"
              alt="menu"
              width={30}
              height={30}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            <ul
              className={`lg:hidden top-14 flex flex-col justify-center items-center gap-y-4 
              text-white bg-DarkViolet w-[90%] p-6 rounded-lg transition 
              ${isMenuOpen ? "absolute scale-100" : "scale-0"}`}
            >
              {navbarLinks.map(({ title, link, icon }) => (
                <li
                  key={title}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white lg:hover:text-VeryDarkBlue transition-colors"
                >
                  <Link href={link}>{title}</Link>
                </li>
              ))}
              <hr className="border-GrayishViolet w-full"></hr>
              <button>Login</button>
              <button className="font-bold bg-Cyan rounded-full w-full py-2">
                Sign Up
              </button>
            </ul>
          </>
        )}
      </nav>
    </SectionContainer>
  );
};

export default Navbar;
