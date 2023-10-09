import Filter from "./Filter";

const Search: React.FC = () => {
  return (
    <section className="mt-6 flex justify-between">
      <article className="relative">
        <input 
          type="text" 
          placeholder="Search for a country..."
          className="py-3 w-96 bg-White dark:bg-DarkBlueDM shadow pl-14"
        />
        <i className='bx bx-search-alt-2 absolute left-5 top-[0.85rem] text-DarkGrayLM cursor-pointer text-xl'></i>
      </article>

      <article>
        <Filter />
      </article>
    </section>
  )
};

export default Search;