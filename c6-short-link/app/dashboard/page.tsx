"use client";

import SectionContainer from "../components/Shared/SectionContainer";
import { useLinks } from "../../context/LinksContext";
import useShortenLinks from "../../hooks/useShortLinks";
import Link from "next/link";

const DashboardPage = () => {
  const { shortenLinks, setShortenLinks } = useLinks();
  const { handleCopy } = useShortenLinks();

  const handleDelete = (indexToDelete: number) => {
    const filteredLinks = shortenLinks.filter(
      (link, index) => index !== indexToDelete
    );
    setShortenLinks(filteredLinks);
  };

  return (
    <SectionContainer className="h-screen bg-Gray mt-5 flex flex-col justify-start">
      <h3 className="text-center text-VeryDarkBlue font-bold text-[1.7rem] md:text-4xl mb-4 mt-10">
        Dashboard
      </h3>
      {shortenLinks.length > 0 ? (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {shortenLinks.map(({ link, shortLink, copied }, index) => (
            <article
              key={index}
              className="border border-VeryDarkBlue bg-white p-4 rounded-lg flex 
        flex-col items-center justify-center gap-3 flex-wrap text-wrap px-4"
            >
              <Link target="_blank" rel="noopener" href={shortLink}>
                <span className="font-bold text-VeryDarkBlue">{shortLink}</span>
              </Link>
              <Link target="_blank" rel="noopener" href={link}>
                <span className="text-gray-500 text-sm">{link}</span>
              </Link>

              <footer className="flex gap-4 justify-center items-center flex-wrap">
                <button
                  onClick={() => handleCopy(index)}
                  className={`text-white font-bold rounded-lg px-3 py-1 transition
              lg:hover:brightness-[1.2] lg:text-lg ${
                copied ? "bg-DarkViolet" : "bg-Cyan"
              }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-white font-bold rounded-lg px-3 py-1 transition
              lg:hover:brightness-[1.2] lg:text-lg bg-red-500"
                >
                  Delete
                </button>
              </footer>
            </article>
          ))}
        </main>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-lg md:text-2xl mt-8 font-bold text-DarkViolet text-center">
            Seems no links added
          </h2>
          <Link
            href="/#ShortLink"
            className="underline text-gray-600 md:text-xl transition lg:hover:text-gray-400"
          >
            Try to add one here
          </Link>
        </div>
      )}
    </SectionContainer>
  );
};

export default DashboardPage;
