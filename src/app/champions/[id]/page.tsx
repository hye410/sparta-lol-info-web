import SpellCards from "@/components/champions/SpellCards";
import { BASE_IMAGE_URL } from "@/constants/api";
import { getDetailChampion } from "@/utils/api/detail-champion-api";
import Image from "next/image";

type DetailChampionProps = {
  params: {
    id: string;
  };
};

export default async function DetailChampionPage({
  params,
}: DetailChampionProps) {
  const { champion } = await getDetailChampion(params.id);
  const { name, title, lore, spells, image } = champion;

  return (
    <article className="pageWrapper">
      <h1 className="title !text-point dark:!text-darkPoint">{name}</h1>
      <h2 className="subTitle">{title}</h2>
      <Image
        src={`${BASE_IMAGE_URL}/champion/${image}`}
        alt={name}
        width={150}
        height={150}
      />
      <p className="my-8 text-default dark:text-darkDefault text-sm">{lore}</p>
      <section className="my-5 ">
        <h3 className="subTitle">{name}의 스킬</h3>
        <div className="grid  gap-3 grid-cols-1 sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {spells.map((spell) => (
            <SpellCards key={`detail_${name}`} spell={spell} />
          ))}
        </div>
      </section>
    </article>
  );
}
