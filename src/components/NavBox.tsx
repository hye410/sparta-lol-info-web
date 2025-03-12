import Link from "next/link";
import Image from "next/image";
import { HomeNav } from "@/types/nav";

type NavBoxProps = {
  nav: HomeNav;
};

export default function NavBox({ nav }: NavBoxProps) {
  return (
    <div className="border-1 my-10">
      <Link href={nav.path}>
        <Image src={nav.img} width={400} height={300} alt={nav.title} />
      </Link>
      <p className="text-center mt-2 text-point">{nav.title}</p>
    </div>
  );
}
