"use client"

import Filter from "./Filter";
import { useCountries } from '../hooks/CountriesContext';

const Search: React.FC = () => {
  const { search, setSearch } = useCountries();

  return (
    <section className="mt-6 flex justify-between">
      <article className="relative">
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
          className="py-2 w-96 bg-White dark:bg-DarkBlueDM shadow pl-14 rounded-md"
        />
        <i className='bx bx-search-alt-2 absolute left-5 top-[0.65rem] text-DarkGrayLM cursor-pointer text-xl'></i>
      </article>

      <article>
        <Filter />
      </article>
    </section>
  )
};

export default Search;