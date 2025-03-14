import { useQuery } from "@tanstack/react-query";
import { getRotationList } from "@/utils/api/rotationApi";

export const useRotationQuery = () => {
  return useQuery({
    queryKey: ["rotation"],
    queryFn: async () => await getRotationList(),
    staleTime: 1000 * 60 * 10,
  });
};
