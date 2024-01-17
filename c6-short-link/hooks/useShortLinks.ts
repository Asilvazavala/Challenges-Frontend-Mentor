"use client";

import { useState } from "react";
import { useLinks } from "../context/LinksContext";

export default function useShortenLinks() {
  const { shortenLinks, setShortenLinks, setIsLoading } = useLinks();
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateURL = () => {
    const URL = inputValue.trim();

    if (URL === "") {
      setErrorMessage("Invalid link");
      return false;
    } else if (!URL.startsWith("https://")) {
      setErrorMessage("Link must start with https://");
      return false;
    }
  };

  const validateLengthLinks = () => {
    if (shortenLinks.length >= 5) {
      const newShortenLinks = [...shortenLinks];
      newShortenLinks.shift();
      setShortenLinks(newShortenLinks);
    }
  };

  const addShortLink = (link: string, shortLink: string) => {
    const newData = {
      link,
      shortLink: shortLink,
      copied: false,
    };

    setShortenLinks((prevLinks) => [...prevLinks, newData]);
  };

  const handleGetShortLink = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateURL();

    const longLink = inputValue.trim();

    try {
      setIsLoading(true);
      const fetchAPI = await fetch(
        `https://tinyurl.com/api-create.php?url=${longLink}`
      );

      const response = await fetchAPI.text();

      if (response !== "Error") {
        setErrorMessage("");
        validateLengthLinks();

        addShortLink(longLink, response);
        // saveLink(URL, shortLink);
      } else {
        return;
      }
    } catch (error) {
      setErrorMessage("Error al realizar la solicitud, intenta de nuevo");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (index: number) => {
    const linkToCopy = shortenLinks[index].shortLink;

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        const newShortenLinks = [...shortenLinks];
        newShortenLinks[index].copied = true;
        setShortenLinks(newShortenLinks);
      })
      .catch((error) => {
        console.error("No se pudo copiar al portapapeles: ", error);
      });
  };

  const handleCleanHistory = () => {
    setShortenLinks([]);
  };

  return {
    handleGetShortLink,
    handleCopy,
    handleCleanHistory,
    inputValue,
    setInputValue,
    errorMessage,
  };
}
