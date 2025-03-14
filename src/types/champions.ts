import { Image } from "./common";

export type ChampionsResponse = {
  data: Record<string, OriginChampion>;
};

type BasicChampion = {
  id: string;
  key: string;
  name: string;
  title: string;
};

export type OriginChampion = BasicChampion & { image: Image };

export type Champion = BasicChampion & { image: string };

export type DetailChampion = OriginChampion & {
  lore: string;
  spells: Array<{
    name: string;
    description: string;
    image: Image;
  }>;
};
export type ChampionSpell = {
  name: string;
  description: string;
  image: string;
};
