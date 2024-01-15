'use client';

import Link from "next/link";
import { ShorterLinksContainer } from '../../types/types';

const ShorterLinksContainer: React.FC<ShorterLinksContainer> = ({
  handleCopy,
  handleCleanHistory,
  shortenLinks
}) => {

  return (
    <footer className="mt-24">
      {shortenLinks.map(({ link, shortLink, copied }, index) => (
        <article key={index} className="flex flex-col justify-between gap-2 
        bg-white p-4 mb-4 rounded-md md:flex-row md:items-center lg:p-6">
          <Link href={link} className="text-black" target="_blank" rel="noopener">
            {link}
          </Link>

          <aside className="flex w-full items-center gap-6 bg-white 
            md:w-auto md:justify-center">
            <Link href={`https://${shortLink}`} className="text-DarkViolet" target="_blank" rel="noopener">
              {shortLink}
            </Link>
            <button 
              onClick={() => handleCopy(index)}
              className={`text-white font-bold rounded-lg px-6 py-2 transition
              lg:hover:brightness-[1.2] lg:text-lg ${copied ? 'bg-DarkViolet' : 'bg-Cyan'}`}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </aside>
        </article>
      ))}

      {shortenLinks.length > 0 && 
        <div className="flex justify-end">
          <button 
            onClick={handleCleanHistory}
            className="text-white font-bold bg-Red rounded-md px-4 py-2 text-lg 
            hover:brightness-[1.2] transition" 
          >
            Clean history
          </button>
        </div>
      }
    </footer>
  )
};

export default ShorterLinksContainer;