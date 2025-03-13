"use server";
import { BASE_URL } from "@/constants/api";
import { OriginChampion, Champion, ChampionsResponse } from "@/types/champions";

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
