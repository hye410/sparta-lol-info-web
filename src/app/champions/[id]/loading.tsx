"use client";
import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center">
      <PuffLoader color="#fff" />
      <p className="text-white mt-10 text-lg">Loading . . .</p>
    </div>
  );
}
