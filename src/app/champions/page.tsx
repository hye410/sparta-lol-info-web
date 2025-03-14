import Card from "@/components/common/Card";
import { getChampionsList } from "@/utils/api/serverApi";

export default async function Champions() {
  const { champions } = await getChampionsList();

  return (
    <article className="pageWrapper">
      <h1 className="title">챔피언 목록</h1>
      <div className="cardWrapper">
        {champions.map((champion) => (
          <Card key={`champion_${champion.id}`} data={champion} />
        ))}
      </div>
    </article>
  );
}
