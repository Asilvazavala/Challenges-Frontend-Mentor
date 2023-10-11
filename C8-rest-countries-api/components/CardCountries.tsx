"use client"

import React from 'react';
import Image from 'next/image';
import { useCountries } from '../hooks/CountriesContext';
import Loading from './Loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CardCountries: React.FC = () => {
  const { countriesData, filterRegion, search, setDetailsCountry } = useCountries();

  const router = useRouter();

  const handleUpdate = (country: string) => {
    setDetailsCountry(country);
    router.push(`/${country}`);
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {countriesData.length > 0 
        ? countriesData.map((country, index) => (
          <article 
            onClick={() => handleUpdate(country.name)}
            key={index} 
            className='bg-White dark:bg-DarkBlueDM shadow rounded-md cursor-pointer hover:scale-105 transition-transform'
          > 
            {/* <Link href={`/${country.name}`}> */}
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
            {/* </Link> */}
          </article>
        ))
        : search !== '' 
          ? <p className='bg-red-300 text-red-600 w-fit px-2 py-1 rounded-md shadow'>
              "{search}" not found {filterRegion !== null ? `in region ${filterRegion}` : ''}
            </p>  
          : <div className='block mx-auto'><Loading /></div>
      }
    </section>
  );
};

export default CardCountries;