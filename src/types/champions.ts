export type ChampionsResponse = {
  data: Record<string, OriginChampion>;
};

type BasicChampion = {
  id: string;
  name: string;
  title: string;
};

export type OriginChampion = BasicChampion & { image: ChampionImage };

export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Champion = BasicChampion & { image: string };

export type DetailChampion = OriginChampion & {
  lore: string;
  spells: Array<{
    name: string;
    description: string;
    image: ChampionImage;
  }>;
};
export type ChampionSpell = {
  name: string;
  description: string;
  image: string;
};
