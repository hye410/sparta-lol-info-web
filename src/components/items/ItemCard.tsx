import { BASE_IMAGE_URL } from "@/constants/api";
import { Item } from "@/types/items";
import Image from "next/image";

type ItemCardProps = {
  item: Item;
};
export default function ItemCard({ item }: ItemCardProps) {
  return (
    <section className="border p-5 flex flex-col items-center justify-evenly h-[250px] overflow-scroll">
      <Image
        src={`${BASE_IMAGE_URL}/item/${item.image}`}
        alt={item.name}
        width={60}
        height={60}
      />
      <h3 className="subTitle">{item.name}</h3>
      <p className="text-default text-justify">{item.plaintext}</p>
    </section>
  );
}
