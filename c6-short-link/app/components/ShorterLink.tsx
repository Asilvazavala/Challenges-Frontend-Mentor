"use client";

import Image from "next/image";

import SectionContainer from "./Shared/SectionContainer";
import useShortenLinks from "../../hooks/useShortLinks";

const ShorterLink = () => {
  const { handleGetShortLink, errorMessage, inputValue, setInputValue } =
    useShortenLinks();

  return (
    <>
      <h3
        id="ShortLink"
        className="text-center text-VeryDarkBlue font-bold text-4xl mt-12 pb-4 lg:mt-0"
      >
        Short your links
      </h3>
      <SectionContainer>
        <main className="relative bg-DarkViolet rounded-lg -mb-20 lg:-mb-[5rem] z-40 p-5 lg:p-12">
          <article
            className="flex flex-col gap-x-4 justify-center 
          items-center gap-y-6 lg:flex-row lg:gap-y-0"
          >
            <Image
              width={50}
              height={50}
              className="bg-cover bg-no-repeat w-full absolute -z-10 h-full"
              src="/images/bg-shorten-desktop.svg"
              alt="backgroundImage"
            />
            <aside className="flex flex-col lg:flex-[1_1_80%] w-full relative">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full py-3 px-6 rounded-lg md:text-xl focus:outline-Cyan"
                type="text"
                placeholder="Shorten a link here..."
              />
              <span className="text-Red absolute -bottom-6 lg:-bottom-7 italic">
                {errorMessage}
              </span>
            </aside>
            <button
              onClick={handleGetShortLink}
              className="text-white font-bold w-full bg-Cyan lg:flex-[1_1_20%] rounded-lg px-9 
              py-3 lg:text-xl lg:hover:brightness-[1.2] transition"
            >
              Shorten It!
            </button>
          </article>
        </main>
      </SectionContainer>
    </>
  );
};

export default ShorterLink;
