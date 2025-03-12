import { BASE_IMAGE_URL } from "@/constants/api";
import { Champion } from "@/types/champions";
import Image from "next/image";

type CartProps = {
  data: Champion;
};

export default function Card({ data }: CartProps) {
  return (
    <section id="card">
      <Image
        src={`${BASE_IMAGE_URL}/champion/${data.image}`}
        alt={data.name}
        width={100}
        height={100}
      />
      <h3 className="subTitle mt-4">{data.name}</h3>
      <p className="text-default">{data.title}</p>
    </section>
  );
}
