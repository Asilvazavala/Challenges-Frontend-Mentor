import Hero from '../components/Hero';
import ShorterLink from "../components/ShorterLink";
import Features from "../components/Features";
import Boost from "../components/Boost";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Hero />
      <ShorterLink />
      <Features />
      <Boost />
    </main>
  )
}
