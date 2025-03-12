export type ChampionsResponse = {
  type: string;
  format: string;
  version: string;
  data: Record<
    string,
    { id: string; name: string; title: string; image: { full: string } }
  >;
};

export type Champion = {
  id: string;
  name: string;
  title: string;
  image: string;
};
