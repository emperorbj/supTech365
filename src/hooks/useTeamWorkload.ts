import { useQuery } from "@tanstack/react-query";
import { taskApi } from "@/lib/api";

export function useOfficerWorkload(teamId?: string) {
  return useQuery({
    queryKey: ["workload", "officers", teamId],
    queryFn: () => taskApi.getOfficerWorkloads(teamId),
    staleTime: 60 * 1000,
  });
}

export function useAnalystWorkload() {
  return useQuery({
    queryKey: ["workload", "analysts"],
    queryFn: () => taskApi.getAnalystWorkloads(),
    staleTime: 60 * 1000,
  });
}
