import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <FadeLoader color="#fff" />
    </div>
  );
}
