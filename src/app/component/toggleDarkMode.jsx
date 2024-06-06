"use client";
import { useEffect } from "react";

export default function useDarkMode() {
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    }
  };

  return { toggleDarkMode };
}
