import { BASE_URL } from "@/constants/api";
import { Item, ItemResponse, OriginItem } from "@/types/items";

export const getItemsList = async () => {
  const res = await fetch(`${BASE_URL}/item.json`, {
    cache: "force-cache",
  });
  const { data }: { data: ItemResponse } = await res.json();
  const items: OriginItem[] = Object.values(data);
  const parsedItems: Item[] = items.map(({ name, plaintext, image: img }) => ({
    name,
    plaintext,
    image: img.full,
  }));

  return { items: parsedItems };
};
