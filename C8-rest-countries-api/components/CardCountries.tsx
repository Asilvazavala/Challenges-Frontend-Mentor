"use client"

import React from 'react';
import Image from 'next/image';
import { useCountries } from '../hooks/CountriesContext';

const CardCountries: React.FC = () => {
  const { countriesData, filterRegion, search } = useCountries();
  
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {countriesData.length > 0 
        ? countriesData.map((country, index) => (
          <article 
            key={index} 
            className='bg-White dark:bg-DarkBlueDM shadow rounded-md cursor-pointer hover:scale-105 transition-transform'
          >
            <picture className='relative overflow-hidden rounded-t-md'>
              <Image 
                src={country.flag} 
                alt={country.name}
                width={400}
                height={400}
                className='rounded-t-md h-40 w-full'
              />
            </picture>
            <footer className='py-4 px-6 flex flex-col gap-y-2'>
              <h2 className='text-2xl font-bold mb-2'>{country.name}</h2>
              <p><b>Population:</b> {country.population}</p>
              <p><b>Region:</b> {country.region}</p>
              <p><b>Capital:</b> {country.capital}</p>
            </footer>
          </article>
        ))
        : <p className='bg-red-300 text-red-600 w-fit px-2 py-1 rounded-md shadow'>
            "{search}" not found {filterRegion !== null ? `in region ${filterRegion}` : ''}
          </p>
      }
    </section>
  );
};

export default CardCountries;