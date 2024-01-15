'use client';

import SectionContainer from "./Shared/SectionContainer";
import Image from 'next/image';
import { useState } from 'react';

interface BitlyResponse {
  ok: boolean;
  id?: string;
  link?: string;
}

const ShorterLink = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateURL = () => {
    const URL = inputValue.trim();

    if (URL === '') {
      setErrorMessage('Invalid link');
      return;
    } else if (!URL.startsWith('https://')) {
        setErrorMessage('Link must start with https://');
        return;
      } 
  };

  function validateLengthLinkContainer() {
    const currentLinks = document.querySelectorAll('#shortLinksContainer > div');
      
    if (currentLinks.length >= 5) {
      currentLinks[0].remove();
    }
  }

  const handleGetShortLink = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateURL();
  
    const URL = inputValue.trim();
    const headers = {
      'Authorization': 'Bearer ec0aca1079667c74094b27aaa9839e81a6981820',
      'Content-Type': 'application/json',
    };

    const requestBody = {
      long_url: URL,
    };

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    };

    try {
      const fetchAPI = await fetch('https://api-ssl.bitly.com/v4/shorten', options);
      const response: BitlyResponse = await fetchAPI.json();
      
      if (response.id) {
        console.log(response.id)
      } else {
        return;
      }
      
      // validateLengthLinkContainer();

      const shortLink = response.id;
      const longLink = response.link;
      
      // addShortLink(URL, shortLink);
      // saveLink(URL, shortLink);
      // showHistoryButton();
    } catch (error) {
      setErrorMessage('Error al realizar la solicitud, intenta de nuevo');
      console.log(error);
    }
  };

  return (
    <>      
      <h3 id="ShortLink" className="text-center text-VeryDarkBlue font-bold text-4xl mt-12 pb-4 lg:mt-0">
        Short your links
      </h3>
      <SectionContainer>
        <main className="relative bg-DarkViolet rounded-lg z-40 p-5 lg:p-12 -mb-20 lg:-mb-[4.5rem]">
          <article className="flex flex-col gap-x-4 rounded-lg justify-center 
          items-center gap-y-6 lg:flex-row lg:gap-y-0">
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
              <span 
                className='text-Red absolute -bottom-7 italic'>
                {errorMessage}
              </span>
            </aside>
            <button
             onClick={handleGetShortLink}
             className="text-white font-bold w-full bg-Cyan lg:flex-[1_1_20%] rounded-lg px-9 
              py-3 lg:text-xl hover:brightness-[1.2] transition">
              Shorten It!
            </button>
          </article>
        </main>
      </SectionContainer>
    </>
  )
};

export default ShorterLink;