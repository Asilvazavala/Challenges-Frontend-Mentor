"use client";

import toast from "react-hot-toast";

export function useNotifications() {
  const notifySucess = (message: string) =>
    toast.success(message, {
      style: {
        border: "1px solid #3B3054",
        color: "#fff",
        background: "#3B3054",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#3B3054",
      },
    });

  const notifyWarning = (message: string) =>
    toast.error(message, {
      style: {
        border: "1px solid #dc143c ",
        color: "#fff",
        background: "#dc143c ",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#dc143c ",
      },
    });

  return {
    notifySucess,
    notifyWarning,
  };
}
