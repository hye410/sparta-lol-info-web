import Card from "@/components/Card";
import { BASE_URL } from "@/constants/api";
import { Champion, ChampionsResponse } from "@/types/champions";

export default async function Champions() {
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

  return (
    <article className="p-20">
      <h1 className="title">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {filteredChampions.map((champion) => (
          <Card key={`champion_${champion.id}`} data={champion} />
        ))}
      </div>
    </article>
  );
}
