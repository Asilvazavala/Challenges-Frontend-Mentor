"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ShortenLink } from "../types/types";

// Define el tipo para el contexto
type LinksContextType = {
  shortenLinks: ShortenLink[];
  setShortenLinks: React.Dispatch<React.SetStateAction<ShortenLink[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// Crea el contexto
const LinksContext = createContext<LinksContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export function useLinks() {
  const context = useContext(LinksContext);
  if (context === undefined) {
    throw new Error("useLinks debe ser utilizado dentro de un LinksProvider");
  }
  return context;
}

// Proveedor de contexto
type LinksProviderProps = {
  children: ReactNode;
};

export function LinksProvider({ children }: LinksProviderProps) {
  const [shortenLinks, setShortenLinks] = useState<ShortenLink[]>([
    {
      link: "https://www.lavanguardia.com/andro4all/internet/mejores-webs-con-fuentes-de-letras",
      shortLink: "https://www.lavanguardia.com",
      copied: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const value: LinksContextType = {
    shortenLinks,
    setShortenLinks,
    isLoading,
    setIsLoading,
  };

  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
}
