import { navbarLinks } from "../../../utils/NavbarData";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <SectionContainer>
      <p></p>
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
              className="text-GrayishViolet lg:hover:text-VeryDarkBlue transition-colors"
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

        <label htmlFor="menuMobile">
          <input type="checkbox" id="menuMobile" className="hidden peer" />
          <Image
            src="/svg/menu-mobile.svg"
            alt="menu"
            width={30}
            height={30}
            className="peer-checked:scale-0 transition duration-500 delay-100 peer-checked:delay-0
              absolute top-4 right-4 "
          />
          <Image
            src="/svg/close-button.svg"
            alt="menu"
            width={30}
            height={30}
            className="scale-0 transition duration-500 delay-0 peer-checked:delay-100 
              absolute top-4 right-4 peer-checked:scale-100"
          />

          <ul
            className={`lg:hidden flex flex-col justify-center items-center gap-y-4 
              text-white bg-DarkViolet w-[90%] p-6 rounded-lg transition duration-500 scale-0 
              peer-checked:scale-100 absolute left-4 top-14`}
          >
            {navbarLinks.map(({ title, link, icon }) => (
              <li
                key={title}
                className="text-white lg:hover:text-VeryDarkBlue transition-colors"
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
            <hr className="border-GrayishViolet w-full"></hr>
            {!session?.user ? (
              <>
                <Link href="/auth/login">Log in</Link>
                <Link
                  href="/auth/register"
                  className="font-bold bg-Cyan rounded-full w-full py-2 text-center"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <Link
                href="/api/auth/signout"
                className="font-bold bg-Cyan rounded-full w-full py-2 text-center"
              >
                Log out
              </Link>
            )}
          </ul>
        </label>
      </nav>
    </SectionContainer>
  );
}

export default Navbar;
