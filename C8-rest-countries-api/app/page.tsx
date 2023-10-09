import CardCountries from "@/components/CardCountries";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Search />
      <CardCountries />
    </main>
  )
}
