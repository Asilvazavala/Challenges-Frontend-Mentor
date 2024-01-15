import Navbar from "./components/Shared/Navbar";
import Hero from './components/Hero';
import ShorterLink from "./components/ShorterLink";
import Features from "./components/Features";
import Boost from "./components/Boost";
import Footer from "./components/Shared/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Navbar />
      <Hero />
      <ShorterLink />
      <Features />
      <Boost />
      <Footer />
    </main>
  )
}
