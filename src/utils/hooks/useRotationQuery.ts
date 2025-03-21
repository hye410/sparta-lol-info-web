import { getRotationList } from "@/utils/api/rotation-api";
import { useQuery } from "@tanstack/react-query";

export const useRotationQuery = () => {
  return useQuery({
    queryKey: ["rotation"],
    queryFn: getRotationList,
    staleTime: 1000 * 60 * 5,
  });
};
