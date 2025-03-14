"use server";
import { ROTATION_BASE_URL } from "@/constants/api";
import { getChampionsList } from "@/utils/api/serverApi";

export const getRotationList = async () => {
  const { champions } = await getChampionsList();
  const res = await fetch(
    `${ROTATION_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
  );
  const { freeChampionIds } = await res.json();
  return champions.filter(({ key }) => {
    return freeChampionIds.includes(Number(key));
  });
};
