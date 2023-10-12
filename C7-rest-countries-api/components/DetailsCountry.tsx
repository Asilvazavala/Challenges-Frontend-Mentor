"use client"

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCountries } from '../hooks/CountriesContext';
import Loading from '@/components/Loading';
import { FC } from 'react';
import { useParams } from 'next/navigation';

const DetailsCountry: FC = () => {  
  const { detailsCountry, countriesData, updateDetailsCountry } = useCountries();
  
  const borderCountries = countriesData.filter((country) =>
    detailsCountry?.borders?.includes(country.alpha3Code)
  );

  const router = useParams();
    
  useEffect(() => {
    const countryName = decodeURIComponent(router.name as string)
    updateDetailsCountry(countryName)
  }, [updateDetailsCountry, router])

  return (
    <section className='mt-4 lg:mt-8 flex flex-col gap-y-8 lg:gap-y-10'>
      <Link href={'/'}>
        <button className="relative shadow px-12 py-2 text-sm font-medium bg-White dark:bg-DarkBlueDM rounded-md hover:bg-DarkGrayLM dark:hover:bg-VeryDarkBlueLM">
          Back
          <i
          className="bx bx-left-arrow-alt text-xl absolute left-2"
          ></i>
        </button>
      </Link>

      {detailsCountry ?
        <article className='flex flex-col lg:flex-row gap-y-8 gap-x-24'>
          <picture className='relative overflow-hidden max-w-sm'>
            <Image 
              src={detailsCountry?.flag} 
              alt={detailsCountry?.name}
              width={380}
              height={250}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover'
              }}
            />
          </picture>

          <div className='flex flex-col gap-y-10 '>
            <div className='flex flex-col gap-y-8 lg:gap-x-24'>
              <aside>
                <h2 className='text-3xl font-bold'>{detailsCountry?.name}</h2>
              </aside>

              <aside className='flex flex-col lg:flex-row gap-y-8 lg:gap-x-24'>
                <div className='flex flex-col gap-y-2'>
                  <p><strong>Native Name:</strong> {detailsCountry?.nativeName}</p>
                  <p><strong>Population:</strong> {detailsCountry?.population?.toLocaleString('en')}</p>
                  <p><strong>Region:</strong> {detailsCountry?.region}</p>
                  <p><strong>Sub Region:</strong> {detailsCountry?.subregion}</p>
                  <p><strong>Capital:</strong> {detailsCountry?.capital}</p>
                </div>

                <div className='flex flex-col gap-y-2'>
                  <p><strong>Top Level Domain:</strong> {detailsCountry?.topLevelDomain}</p>
                  <p><strong>Currencies:</strong> {detailsCountry?.currencies?.map(c => c.name)}</p>
                  <p><strong>Languages:</strong> {detailsCountry?.languages?.map(l => l.name)}</p>
                </div>
              </aside>
            </div>

            { borderCountries.length > 0 &&
              <aside className='flex gap-4 flex-wrap'>
                <p><strong>Border Countries:</strong></p> {
                  borderCountries.map((country) => (
                    <div className='flex justify-center items-center' key={country.name}>
                      <Link href={`/${country.name}`}>
                        <span 
                          className='text-sm shadow px-4 py-1 cursor-pointer bg-White dark:bg-DarkBlueDM rounded-sm hover:bg-DarkGrayLM dark:hover:bg-VeryDarkBlueLM'>
                          {country.name}
                        </span>
                      </Link>
                    </div>
                    )
                  )
                }          
              </aside>
            }

          </div>
        </article>
        : <div className='mt-12 mx-auto'><Loading /></div>
      }
    </section>
  )
};

export default DetailsCountry;