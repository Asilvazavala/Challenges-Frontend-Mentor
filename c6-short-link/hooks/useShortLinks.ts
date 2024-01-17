"use client";

import { useState, useEffect } from "react";
import { LinkData } from "../types/types";

import { useLinks } from "../context/LinksContext";
import { useNotifications } from "../hooks/useNotifications";
import { useSession } from "next-auth/react";

export default function useShortenLinks() {
  const { notifySucess, notifyWarning } = useNotifications();
  const { shortenLinks, setShortenLinks, setIsLoading } = useLinks();
  const { data: session, status } = useSession();

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

  const saveLink = (originalURL: string, shortLink: string) => {
    if (status === "authenticated") {
      const savedLinks = JSON.parse(localStorage.getItem("shortLinks") || "[]");

      if (savedLinks.length >= 5) {
        savedLinks.shift();
      }

      savedLinks.push({ originalURL, shortLink });
      localStorage.setItem("shortLinks", JSON.stringify(savedLinks));
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
    if (status === "unauthenticated" && shortenLinks.length >= 2) {
      return notifyWarning("Have to log in to shorten more links");
    }

    const newData = {
      link,
      shortLink: shortLink,
      copied: false,
    };

    if (shortenLinks.length >= 5) {
      return notifyWarning("Maximum 5 links to shorten on free plan");
    } else {
      setShortenLinks((prevLinks) => [...prevLinks, newData]);
    }
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
        saveLink(longLink, response);
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
        notifySucess("Link copied to cliboard 😀");
      })
      .catch((error) => {
        console.error("No se pudo copiar al portapapeles: ", error);
      });
  };

  const handleCleanHistory = () => {
    localStorage.removeItem("shortLinks");
    setShortenLinks([]);
  };

  useEffect(() => {
    if (status === "authenticated") {
      const savedLinks = JSON.parse(localStorage.getItem("shortLinks") || "[]");

      savedLinks.forEach((linkData: LinkData) => {
        addShortLink(linkData.originalURL, linkData.shortLink);
      });
    }
  }, [status]);

  return {
    handleGetShortLink,
    handleCopy,
    handleCleanHistory,
    inputValue,
    setInputValue,
    errorMessage,
  };
}
