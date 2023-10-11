import Navbar from "@/components/Navbar";
import { CountriesProvider } from '../../hooks/CountriesContext';
import DetailsCountry from "./DetailsCountry";

const Home = () => { 
  return (
    <CountriesProvider>
      <Navbar />
      <DetailsCountry />
    </CountriesProvider>
  )
}

export default Home;