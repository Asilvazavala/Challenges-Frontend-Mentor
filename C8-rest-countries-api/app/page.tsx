import CardCountries from "@/components/CardCountries";
import Navbar from "@/components/Navbar";
import HeaderHome from "@/components/HeaderHome";
import { CountriesProvider } from '../hooks/CountriesContext';

export default function Home() {
  return (
    <CountriesProvider>
      <Navbar />
      <HeaderHome />
      <CardCountries />
    </CountriesProvider>
  )
}
