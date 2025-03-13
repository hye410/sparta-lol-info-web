import { Image } from "./common";

export type ItemResponse = Record<string, OriginItem>;

type BasicItem = {
  name: string;
  plaintext: string;
};

export type OriginItem = BasicItem & { image: Image };

export type Item = BasicItem & { image: string };
