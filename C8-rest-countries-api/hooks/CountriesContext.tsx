"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { API } from '../types/types';
import db from '../api/data.json';

// Define el tipo para el contexto
type CountriesContextType = {
  countriesData: API[];
  setCountriesData: React.Dispatch<React.SetStateAction<API[]>>;
  filterRegion: string | null;
  setFilterRegion: React.Dispatch<React.SetStateAction<string | null>>;
  menuFilterisOpen: boolean;
  setMenuFilterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  detailsCountry: API | undefined;
  setDetailsCountry: React.Dispatch<React.SetStateAction<API | undefined>>;
  updateDetailsCountry: (newData: string) => void;
  nameCountry: string;
  setNameCountry: React.Dispatch<React.SetStateAction<string>>;
};

// Crea el contexto
const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export function useCountries() {
  const context = useContext(CountriesContext);
  if (context === undefined) {
    throw new Error('useCountries debe ser utilizado dentro de un CountriesProvider');
  }
  return context;
}

// Proveedor de contexto
type CountriesProviderProps = {
  children: ReactNode;
};

export function CountriesProvider({ children }: CountriesProviderProps) {
  const [countriesData, setCountriesData] = useState<API[]>([]);
  const [filterRegion, setFilterRegion] = useState<string | null>(null);
  const [menuFilterisOpen, setMenuFilterIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [detailsCountry, setDetailsCountry] = useState<API | undefined>();
  const [nameCountry, setNameCountry] = useState<string>('');

  const data: API[] = db as API[];

  useEffect(() => {
    const filtered = filterRegion === null
      ? data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
      : data.filter((country) =>
          country.region === filterRegion &&
          country.name.toLowerCase().includes(search.toLowerCase())
        );
  
    setCountriesData(filtered);
  }, [filterRegion, search, data]);

  const value: CountriesContextType = {
    countriesData,
    setCountriesData,
    filterRegion,
    setFilterRegion,
    menuFilterisOpen,
    setMenuFilterIsOpen,
    search,
    setSearch,
    detailsCountry,
    setDetailsCountry,
    updateDetailsCountry: (newData) => {
      const selectedCountry = data.find(c => c.name === newData);
      setDetailsCountry(selectedCountry);
    },
    nameCountry,
    setNameCountry
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}
