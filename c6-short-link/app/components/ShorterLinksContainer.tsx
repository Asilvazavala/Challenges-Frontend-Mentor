"use client";

import Link from "next/link";
import { ShorterLinksContainer } from "../../types/types";
import Loading from "./Loading";

const ShorterLinksContainer: React.FC<ShorterLinksContainer> = ({
  handleCopy,
  handleCleanHistory,
  shortenLinks,
  isLoading,
}) => {
  return (
    <footer className="pt-28">
      {isLoading && <Loading />}

      {shortenLinks.map(({ link, shortLink, copied }, index) => (
        <article
          key={index}
          className="flex flex-col justify-between gap-6  
        bg-white p-4 mb-4 rounded-md lg:flex-row md:items-center lg:p-6 max-w-[91vw] md:max-w-[100vw]"
        >
          <Link
            href={link}
            className="text-black flex flex-col justify-center items-center flex-wrap 
            lg:justify-start lg:items-start"
            target="_blank"
            rel="noopener"
          >
            <span className="text-gray-400">Your URL: </span>
            <span className="text-ellipsis line-clamp-1 max-w-full">
              {link}
            </span>
          </Link>

          <aside
            className="flex flex-col w-full items-center gap-2 bg-white 
            md:w-auto justify-center lg:flex-row md:gap-6"
          >
            <Link
              href={`${shortLink}`}
              className="text-DarkViolet flex flex-col justify-center items-center flex-wrap 
              lg:flex-row lg:justify-start"
              target="_blank"
              rel="noopener"
            >
              <span className="text-gray-400">Shorten URL: </span>
              <span className="text-ellipsis">{shortLink}</span>
            </Link>
            <button
              onClick={() => handleCopy(index)}
              className={`text-white font-bold rounded-lg px-6 py-2 transition
              lg:hover:brightness-[1.2] lg:text-lg ${
                copied ? "bg-DarkViolet" : "bg-Cyan"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </aside>
        </article>
      ))}

      {shortenLinks.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={handleCleanHistory}
            className="text-white font-bold bg-Red rounded-md px-4 py-2 text-lg 
            lg:hover:brightness-[1.2] transition"
          >
            Clean history
          </button>
        </div>
      )}
    </footer>
  );
};

export default ShorterLinksContainer;
