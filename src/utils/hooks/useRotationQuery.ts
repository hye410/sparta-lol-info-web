import { useQuery } from "@tanstack/react-query";
import { getRotationList } from "@/utils/api/rotation-api";

export const useRotationQuery = () => {
  return useQuery({
    queryKey: ["rotation"],
    queryFn: getRotationList,
    staleTime: 1000 * 60 * 5,
  });
};
