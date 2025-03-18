"use client";
import { SCREEN_MODE } from "@/constants/screenMode";
import useScreenModeStore from "@/store/screenModeStore";
import { useEffect } from "react";

const { DARK, LIGHT } = SCREEN_MODE;

export default function ThemeToggle() {
  const { mode, changeMode } = useScreenModeStore();

  useEffect(() => {
    if (mode === DARK) document.documentElement.classList.toggle(DARK, true);
    if (mode === LIGHT) document.documentElement.classList.toggle(DARK, false);
  }, [mode]);

  return (
    <button
      onClick={changeMode}
      className="text-default dark:text-white p-2  absolute right-10 text-3xl"
    >
      {mode === DARK ? "☀️" : "🌙"}
    </button>
  );
}
