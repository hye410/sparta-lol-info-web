import { BASE_SPELL_URL } from "@/constants/api";
import { ChampionSpell } from "@/types/champions";
import Image from "next/image";

type SpellCardsProps = {
  spell: ChampionSpell;
};

export default function SpellCards({ spell }: SpellCardsProps) {
  return (
    <dl
      key={spell.name}
      className="border border-gray-300 shadow-md p-5 rounded-lg h-[250px] overflow-scroll max-w-[350px]"
    >
      <dt className="text-accent font-semibold mb-2">{spell.name}</dt>
      <dd className="mb-3">
        <Image
          src={`${BASE_SPELL_URL}/${spell.image}`}
          alt={spell.name}
          width={50}
          height={50}
        />
      </dd>
      <dd className="text-sm text-justify text-default dark:text-darkDefault ">
        {spell.description}
      </dd>
    </dl>
  );
}
