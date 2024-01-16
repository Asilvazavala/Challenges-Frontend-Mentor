"use client";

import { useState } from "react";
import { BitlyResponse, ShortenLink } from "../types/types";

export default function useShortenLinks() {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [shortenLinks, setShortenLinks] = useState<ShortenLink[]>([]);

  const validateURL = () => {
    const URL = inputValue.trim();

    if (URL === "") {
      setErrorMessage("Invalid link");
      return true;
    } else if (!URL.startsWith("https://")) {
      setErrorMessage("Link must start with https://");
      return true;
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
    const newShortenLinks = [...shortenLinks];

    newShortenLinks.push({
      link: link,
      shortLink: shortLink,
      copied: false,
    });

    setShortenLinks(newShortenLinks);
  };

  const handleGetShortLink = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validateURL();

    const URL = inputValue.trim();
    const headers = {
      Authorization: "Bearer ec0aca1079667c74094b27aaa9839e81a6981820",
      "Content-Type": "application/json",
    };

    const requestBody = {
      long_url: URL,
    };

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    };

    try {
      const fetchAPI = await fetch(
        "https://api-ssl.bitly.com/v4/shorten",
        options
      );
      const response: BitlyResponse = await fetchAPI.json();

      if (response.id) {
        setErrorMessage("");
        validateLengthLinks();

        const shortLink = response.id;
        addShortLink(URL, shortLink);
        // saveLink(URL, shortLink);
      } else {
        return;
      }
    } catch (error) {
      setErrorMessage("Error al realizar la solicitud, intenta de nuevo");
      console.log(error);
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
    shortenLinks,
    inputValue,
    setInputValue,
    errorMessage,
  };
}
