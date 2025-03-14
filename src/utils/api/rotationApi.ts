import { getChampionsList } from "@/utils/api/serverApi";

export const getRotationList = async () => {
  const { champions } = await getChampionsList();
  const res = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
  );
  const { freeChampionIds } = await res.json();
  return champions.filter(({ key }) => {
    return freeChampionIds.includes(Number(key));
  });
};
