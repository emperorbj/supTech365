import { useQuery } from "@tanstack/react-query";
import type { MyAssignmentFilters } from "@/types/assignment";
import { taskApi } from "@/lib/api";

export function useMyAssignments(filters: MyAssignmentFilters = {}) {
  return useQuery({
    queryKey: ["myAssignments", filters],
    queryFn: () => taskApi.getMyAssignments(filters),
    staleTime: 30 * 1000,
  });
}
