import SectionContainer from "./Shared/SectionContainer";
import Image from 'next/image';

const Hero = () => {
  return (
    <SectionContainer className="w-screen flex flex-col justify-center items-center gap-y-6 gap-x-20 
     lg:pb-14 lg:flex-row lg:justify-between lg:h-screen">    
    <article className="md:max-w-xl flex flex-col justify-center items-center order-2 lg:order-1  
    lg:items-start lg:justify-start">
      <h1 className="text-VeryDarkBlue text-4xl md:text-7xl font-bold leading-[1.15] tracking-tight 
      text-center lg:text-left">
        More than just shorter links
      </h1>
      <p className="text-GrayishViolet mt-2 mb-4 lg:mt-4 lg:mb-6 text-xl text-center lg:text-left">
        Build your brand’s recognition and get detailed insights 
        on how your links are performing.
      </p>
      <a
        href="#ShortLink"
        className="text-white font-bold bg-Cyan rounded-full px-9 py-3 text-xl hover:brightness-110 
        transition-all">
        Get Started
      </a>
    </article>

    <picture className="order-1 lg:order-2">
      <Image 
        src="/images/illustration-working.svg" 
        alt="Working" 
        width={500}
        height={500}
      />
    </picture>
    </SectionContainer>
  )
};

export default Hero;