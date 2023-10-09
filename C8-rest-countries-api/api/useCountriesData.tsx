"use client"

import { useEffect, useState } from 'react';
import { API } from '../types/types';
import data from './data.json';

export const useCountriesData = () => {
  const [countriesData, setCountriesData] = useState<API[]>([]);
  const [filterRegion, setFilterRegion] = useState<string | null>(null);  
  
  useEffect(() => {
    const filteredData = filterRegion === null
      ? data
      : data.filter(country => country.region === filterRegion)

    setCountriesData(filteredData);
  }, [filterRegion]);

  return {
    countriesData,
    filterRegion,
    setFilterRegion
  };
}
