"use client";

import { navbarLinks } from "../../../utils/NavbarData";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { useSession } from "next-auth/react";
import { useState } from "react";

function Navbar() {
  const { data: session, status } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SectionContainer>
      <nav className="hidden justify-between pt-6 lg:flex">
        <ul className="flex gap-x-8 justify-center items-center">
          <Link href="/">
            <Image
              className="mr-2"
              priority
              src="/images/logo.svg"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>

          {navbarLinks.map(({ title, link, icon }) => (
            <li
              key={title}
              className="text-GrayishViolet lg:hover:text-VeryDarkBlue transition-colors cursor-pointer"
            >
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>

        <aside className="hidden lg:flex gap-x-6 justify-center items-center">
          {!session?.user ? (
            <>
              <Link
                href="/auth/login"
                className="text-GrayishViolet lg:hover:text-VeryDarkBlue transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/auth/register"
                className="text-white font-bold bg-Cyan rounded-full px-6 py-2 lg:hover:brightness-110 transition"
              >
                Sign up
              </Link>
            </>
          ) : (
            <Link
              href="/api/auth/signout"
              className="text-white font-bold bg-Cyan rounded-full px-6 py-2 lg:hover:brightness-110 transition"
            >
              Log out
            </Link>
          )}
        </aside>
      </nav>

      <nav className="flex py-4 justify-between lg:hidden w-full">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={120} height={120} />
        </Link>

        <Image
          src="/svg/menu-mobile.svg"
          alt="menu"
          width={30}
          height={30}
          onClick={() => setIsMenuOpen(true)}
          className={`transition duration-500 delay-100
              absolute top-4 right-4 ${
                isMenuOpen ? "scale-0 delay-0" : "scale-100"
              }`}
        />
        <Image
          src="/svg/close-button.svg"
          alt="menu"
          width={30}
          height={30}
          onClick={() => setIsMenuOpen(false)}
          className={`transition duration-500 delay-0 
              absolute top-4 right-4  ${
                isMenuOpen ? "scale-100 delay-100" : "scale-0"
              }`}
        />
        {isMenuOpen && (
          <ul
            className={`lg:hidden flex flex-col justify-center items-center gap-y-4 
              text-white bg-DarkViolet w-[90%] p-6 rounded-lg transition duration-700 delay-0
              ${isMenuOpen ? "scale-100" : "scale-0"} absolute left-4 top-14`}
          >
            {navbarLinks.map(({ title, link, icon }) => (
              <li
                key={title}
                className="text-white lg:hover:text-VeryDarkBlue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
            <hr className="border-GrayishViolet w-full"></hr>
            {!session?.user ? (
              <>
                <Link onClick={() => setIsMenuOpen(false)} href="/auth/login">
                  Log in
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/auth/register"
                  className="font-bold bg-Cyan rounded-full w-full py-2 text-center"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/api/auth/signout"
                className="font-bold bg-Cyan rounded-full w-full py-2 text-center"
              >
                Log out
              </Link>
            )}
          </ul>
        )}
      </nav>
    </SectionContainer>
  );
}

export default Navbar;
