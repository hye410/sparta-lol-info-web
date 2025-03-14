import { ROTATION_BASE_URL } from "@/constants/api";
import { getChampionsList } from "@/utils/api/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${ROTATION_BASE_URL}?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
    );
    const { freeChampionIds } = await res.json();
    const { champions } = await getChampionsList();
    const rotationChampions = champions.filter(({ key }) => {
      return freeChampionIds.includes(Number(key));
    });

    return NextResponse.json({ champions: rotationChampions });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Failed to fetch rotation champions",
      status: 500,
    });
  }
}
