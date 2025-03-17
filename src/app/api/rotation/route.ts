import { ROTATION_BASE_URL } from "@/constants/api";
import { getChampionsList } from "@/utils/api/champions-api";
import { NextResponse } from "next/server";
const API_KEY = process.env.RIOT_API_KEY;

export async function GET() {
  if (!API_KEY)
    return NextResponse.json({
      error: "API Key를 확인해 주세요.",
      status: 400,
    });

  const res = await fetch(ROTATION_BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Riot-Token": API_KEY,
    },
  });

  if (!res.ok)
    return NextResponse.json({
      error: "챔피언 로테이션 목록을 가져오는데 실패했습니다.",
      status: 500,
    });

  const { freeChampionIds } = await res.json();
  const { champions } = await getChampionsList();
  const rotationChampions = champions.filter(({ key }) => {
    return freeChampionIds.includes(Number(key));
  });

  return NextResponse.json({ champions: rotationChampions, status: 200 });
}
