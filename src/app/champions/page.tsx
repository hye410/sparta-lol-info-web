import Card from "@/components/Card";
import { getChampionsList } from "@/utils/serverApi";

export default async function Champions() {
  const { champions } = await getChampionsList();

  return (
    <article className="p-20">
      <h1 className="title">챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {champions.map((champion) => (
          <Card key={`champion_${champion.id}`} data={champion} />
        ))}
      </div>
    </article>
  );
}
