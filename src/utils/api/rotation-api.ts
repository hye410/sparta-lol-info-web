import { Champion } from "@/types/champions";

export const getRotationList = async () => {
  try {
    const res = await fetch("/api/rotation");
    const data = await res.json();
    if (data.status !== 200) throw { message: data.message };
    const { champions }: { champions: Champion[] } = data;
    return champions;
  } catch (error) {
    throw error;
  }
};
