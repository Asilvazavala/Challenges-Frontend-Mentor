import CardCountries from "@/components/CardCountries";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { CountriesProvider } from '../hooks/CountriesContext';

export default function Home() {
  return (
    <CountriesProvider>
      <Navbar />
      <Search />
      <CardCountries />
    </CountriesProvider>
  )
}
