"use client";
import Card from "@/components/Card";
import { useRotationQuery } from "@/utils/hooks/useRotationQuery";

export default function Rotation() {
  const { data: champions } = useRotationQuery();

  return (
    <article className="pageWrapper">
      <h1 className="title">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h1>
      <div className="cardWrapper">
        {champions?.map((champion) => (
          <Card key={`rotation_champion_${champion.id}`} data={champion} />
        ))}
      </div>
    </article>
  );
}
