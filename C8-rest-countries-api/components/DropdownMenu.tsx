"use client"

import { useCountriesData } from '../api/useCountriesData';
import React, { useState } from 'react';

const DropdownMenu: React.FC = () => {
  const { filterRegion, setFilterRegion } = useCountriesData();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFilter = (option: string) => {
    setFilterRegion(option);
    setIsOpen(!isOpen);
  };

  const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="relative inline-block">
      <article className='w-52'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="shadow inline-flex justify-start w-full pl-6 py-3 text-sm font-medium bg-White dark:bg-DarkBlueDM rounded-md hover:bg-DarkGrayLM dark:hover:bg-VeryDarkBlueLM  focus:outline-none"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Filter by Region
          <i
            className={`bx bx-chevron-right text-xl absolute right-4 transform transition-transform duration-200 ${
              isOpen ? 'rotate-90' : 'rotate-0'
            }`}
          ></i>
        </button>
      </article>

      {isOpen && (
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
