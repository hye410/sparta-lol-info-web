"use client";
import useScreenModeStore from "@/store/screenModeStore";
import { FadeLoader } from "react-spinners";

export default function Loading() {
  const { mode } = useScreenModeStore();
  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <FadeLoader color={mode === "dark" ? "#fff" : "#acabab"} />
    </div>
  );
}
