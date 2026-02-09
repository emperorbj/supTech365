import { useQuery } from "@tanstack/react-query";
import type { MyAssignmentFilters } from "@/types/assignment";
import * as assignmentApi from "@/lib/assignmentApi";

export function useMyAssignments(filters: MyAssignmentFilters = {}) {
  return useQuery({
    queryKey: ["myAssignments", filters],
    queryFn: () => assignmentApi.getMyAssignments(filters),
    staleTime: 30 * 1000,
  });
}
