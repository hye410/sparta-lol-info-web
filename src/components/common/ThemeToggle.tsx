"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    console.log(isDarkMode);
    if (isDarkMode) document.documentElement.classList.toggle("dark", true);
    else document.documentElement.classList.toggle("dark", false);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleMode}
      className="text-default dark:text-white p-2  absolute right-10 text-3xl"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
