import { Champion } from "@/types/champions";

export const getRotationList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const res = await fetch("/api/rotation");
    const data = await res.json();
    if (data.status !== 200) {
      throw new Error(data.error || "API 요청 실패");
    } else {
      const { champions }: { champions: Champion[] } = data;
      return champions;
    }
  } catch (error) {
    throw error;
  }
};
