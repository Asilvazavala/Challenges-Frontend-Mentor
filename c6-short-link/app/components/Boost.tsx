import SectionContainer from "./Shared/SectionContainer";

const Boost = () => {
  return (
    <SectionContainer  className="bg-DarkViolet bg-cover bg-no-repeat py-14 px-5 
    bg-[url('/images/bg-boost-mobile.svg')] md:bg-[url('/images/bg-boost-desktop.svg')]">
        <article className="flex flex-col justify-center items-center gap-y-4">
        <h3 className="text-white font-bold text-3xl text-center">Boost your links today</h3>
        <a
          href="#ShortLink" 
          className="text-white font-bold bg-Cyan rounded-full px-6 py-2 text-lg hover:brightness-110 
          transition">
          Get Started
        </a>
      </article>
    </SectionContainer>
  )
};

export default Boost;