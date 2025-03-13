import SpellCards from "@/components/champions/SpellCards";
import { BASE_IMAGE_URL, BASE_URL } from "@/constants/api";
import { DetailChampion, ChampionSpell } from "@/types/champions";
import Image from "next/image";

type DetailChampionProps = {
  params: {
    id: string;
  };
};

export default async function DetailChampionPage({
  params,
}: DetailChampionProps) {
  const res = await fetch(`${BASE_URL}/champion/${params.id}.json`);
  const { data }: { data: Record<string, DetailChampion> } = await res.json();
  const details = data[params.id];
  const { id, title, name, lore, image: img, spells } = details;

  const parsedSpells: ChampionSpell[] = spells.map(
    ({ name, description, image: img }) => ({
      name,
      description,
      image: img.full,
    })
  );

  const champion = {
    id,
    title,
    name,
    lore,
    image: img.full,
    spells: parsedSpells,
  };

  return (
    <article className="p-10">
      <h1 className="title !text-point">{name}</h1>
      <h2 className="subTitle">{title}</h2>
      <Image
        src={`${BASE_IMAGE_URL}/champion/${champion.image}`}
        alt={name}
        width={150}
        height={150}
      />
      <p className="my-8 text-default text-sm">{lore}</p>
      <section className="my-5 ">
        <h3 className="subTitle">{name}의 스킬</h3>
        <div className="grid grid-cols-3 gap-3">
          {champion.spells.map((spell) => (
            <SpellCards key={`detail_${name}`} spell={spell} />
          ))}
        </div>
      </section>
    </article>
  );
}
