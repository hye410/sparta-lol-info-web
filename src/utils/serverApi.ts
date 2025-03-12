"use server";
import { BASE_URL } from "@/constants/api";
import { Champion, ChampionsResponse } from "@/types/champions";

export const getChampionsList = async () => {
  const res = await fetch(`${BASE_URL}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const { data: champions }: ChampionsResponse = await res.json();

  const filteredChampions: Champion[] = Object.values(champions).map(
    ({ id, name, title, image: img }) => {
      const image = img.full;
      return { id, name, title, image };
    }
  );

  return { champions: filteredChampions };
};
