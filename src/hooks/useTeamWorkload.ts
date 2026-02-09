import { useQuery } from "@tanstack/react-query";
import * as assignmentApi from "@/lib/assignmentApi";

export function useOfficerWorkload(teamId?: string) {
  return useQuery({
    queryKey: ["workload", "officers", teamId],
    queryFn: () => assignmentApi.getOfficerWorkloads(teamId),
    staleTime: 60 * 1000,
  });
}

export function useAnalystWorkload() {
  return useQuery({
    queryKey: ["workload", "analysts"],
    queryFn: () => assignmentApi.getAnalystWorkloads(),
    staleTime: 60 * 1000,
  });
}
