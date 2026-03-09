import { useQuery } from "@tanstack/react-query";
import { taskApi } from "@/lib/api";

export function useMyWorkload() {
  return useQuery({
    queryKey: ["myWorkload"],
    queryFn: () => taskApi.getMyWorkload(),
    staleTime: 60 * 1000,
  });
}
