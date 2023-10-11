"use client"

import { useCountries } from '../hooks/CountriesContext';

const DropdownMenu = () => {
  const { filterRegion, setFilterRegion, menuFilterisOpen, setMenuFilterIsOpen } = useCountries();

  const handleFilter = (option: string) => {
    setFilterRegion(option === 'All' ? null : option);
    setMenuFilterIsOpen(!menuFilterisOpen);
  };
  

  const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'];

  return (
    <div className="relative inline-block">
      <article className='w-52'>
        <button
          onClick={() => setMenuFilterIsOpen(!menuFilterisOpen)}
          type="button"
          className="shadow inline-flex justify-start w-full pl-6 py-3 text-sm font-medium bg-White dark:bg-DarkBlueDM rounded-md hover:bg-DarkGrayLM dark:hover:bg-VeryDarkBlueLM  focus:outline-none"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {filterRegion !== null ? filterRegion : 'Filter by Region'}
          <i
            className={`bx bx-chevron-right text-xl absolute right-4 transform transition-transform duration-200 ${
              menuFilterisOpen ? 'rotate-90' : 'rotate-0'
            }`}
          ></i>
        </button>
      </article>

      {menuFilterisOpen && (
        <article className="absolute dark:bg-DarkBlueDM right-0 mt-1 origin-top-right divide-y divide-gray-100 rounded-md shadow ring-1 ring-black ring-opacity-5 z-50">
          {options.map((option, index) => (
            <small key={index} className="py-1">
              <button
                className={`flex w-52 px-4 py-2 text-md bg-White dark:bg-DarkBlueDM hover:bg-DarkGrayLM dark:hover:bg-VeryDarkBlueLM ${
                  filterRegion === option ? 'bg-DarkGrayLM dark:bg-VeryDarkBlueLM' : ''
                }`}
                onClick={() => handleFilter(option)}
              >
                {option}
              </button>
            </small>
          ))}
        </article>
      )}
    </div>
  );
};

export default DropdownMenu;
