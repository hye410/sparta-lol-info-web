"use server";
import { BASE_URL } from "@/constants/api";
import {
  OriginChampion,
  Champion,
  ChampionsResponse,
  DetailChampion,
  ChampionSpell,
} from "@/types/champions";

export const getChampionsList = async () => {
  const res = await fetch(`${BASE_URL}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data }: ChampionsResponse = await res.json();
  const values: OriginChampion[] = Object.values(data);
  const filteredChampions: Champion[] = values.map(
    ({ id, name, title, image }) => {
      const full = image.full;
      return {
        id,
        name,
        title,
        image: full,
      };
    }
  );

  return { champions: filteredChampions };
};

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
