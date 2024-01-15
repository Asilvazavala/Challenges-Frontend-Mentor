'use client';

import SectionContainer from "./Shared/SectionContainer";
import ShorterLinksContainer from "./ShorterLinksContainer";
import useShortenLinks from '../../hooks/useShortLinks';

const Features = () => {
  const { 
    handleCopy, 
    handleCleanHistory, 
    shortenLinks, 
  } = useShortenLinks();

  return (
    <SectionContainer className="bg-Gray pb-20">
      <ShorterLinksContainer 
        handleCopy={handleCopy}
        handleCleanHistory={handleCleanHistory} 
        shortenLinks={shortenLinks} 
      />

      <header id="features" className={`max-w-md mx-auto ${shortenLinks.length > 0 ? 'mt-20' : 'mt-40'}`}>
        <h3 className="text-center text-VeryDarkBlue font-bold text-[1.7rem] md:text-4xl">Advanced Statistics</h3>
        <p className="text-center text-gray-500 mt-3 mb-24">Track how your links are performing across the web with our 
          advanced statistics dashboard.</p>
      </header>

      <main className="flex lg:flex-row flex-col gap-x-8 gap-y-10 justify-center items-center lg:justify-normal lg:items-start">
        <article className="flex flex-col bg-white pb-8 pt-16 px-6 rounded-md relative max-w-[350px] max-h-80 lg:max-h-60">
          <div className="bg-Cyan h-full w-3 top-[100%] left-[50%] lg:h-3 lg:w-full absolute lg:top-[50%] lg:left-[100%]"></div>
          <picture className="bg-DarkViolet rounded-full w-20 h-20 flex justify-center items-center absolute -top-10 right-[36%] lg:right-auto">
            <img className="w-10 h-10" src="./images/icon-brand-recognition.svg" alt="Brand"/>
          </picture>
          <h4 className="text-VeryDarkBlue font-bold text-2xl text-center lg:text-left">Brand Recognition</h4>
          <p className="text-GrayishViolet mt-3 text-center lg:text-left">Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.</p>
        </article>
    
        <article className="flex flex-col bg-white pb-8 pt-16 px-6 rounded-md relative max-w-[350px] mt-12 lg:mt-10 max-h-80 lg:max-h-60">
          <div className="bg-Cyan h-full w-3 top-[100%] left-[50%] lg:h-3 lg:w-full absolute lg:top-[50%] lg:left-[100%]"></div>
          <picture className="bg-DarkViolet rounded-full w-20 h-20 flex justify-center items-center absolute -top-10 right-[36%] lg:right-auto">
            <img className="w-10 h-10" src="./images/icon-detailed-records.svg" alt="Records"/>
          </picture>
          <h4 className="text-VeryDarkBlue font-bold text-2xl text-center lg:text-left">Detailed Records</h4>
          <p className="text-GrayishViolet mt-3 text-center lg:text-left">Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.</p>
        </article>
    
        <article className="flex flex-col bg-white pb-8 pt-16 px-6 rounded-md relative max-w-[350px] mt-12 lg:mt-20 max-h-80 lg:max-h-60">
          <picture className="bg-DarkViolet rounded-full w-20 h-20 flex justify-center items-center absolute -top-10 right-[36%] lg:right-auto">
            <img className="w-10 h-10" src="./images/icon-fully-customizable.svg" alt="Customizable"/>
          </picture>
          <h4 className="text-VeryDarkBlue font-bold text-2xl text-center lg:text-left">Fully Customizable</h4>
          <p className="text-GrayishViolet mt-3 text-center lg:text-left">Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.</p>
        </article>  
      </main>
    </SectionContainer>
  )
};

export default Features;