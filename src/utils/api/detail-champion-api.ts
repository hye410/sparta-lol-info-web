"use server";
import { BASE_URL } from "@/constants/api";
import { ChampionSpell, DetailChampion } from "@/types/champions";

export const getDetailChampion = async (targetId: string) => {
  const res = await fetch(`${BASE_URL}/champion/${targetId}.json`, {
    cache: "no-store",
  });
  const { data }: { data: Record<string, DetailChampion> } = await res.json();
  const details = data[targetId];
  const { id, title, name, lore, image: img, spells } = details;

  const parsedSpells: ChampionSpell[] = spells.map(
    ({ name, description, image: img }) => ({
      name,
      description,
      image: img.full,
    })
  );

  const champion = {
    id,
    title,
    name,
    lore,
    image: img.full,
    spells: parsedSpells,
  };

  return { champion };
};
