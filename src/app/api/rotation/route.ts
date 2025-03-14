import { ROTATION_BASE_URL } from "@/constants/api";
import { getChampionsList } from "@/utils/api/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.RIOT_API_KEY;
    if (!API_KEY)
      return new Response(JSON.stringify({ error: "API key is missing" }), {
        status: 500,
      });
    const res = await fetch(ROTATION_BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Riot-Token": API_KEY,
      },
    });
    if (!res.ok) throw new Error("failed to fetch champion rotation data");

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
