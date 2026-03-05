import { useQuery } from "@tanstack/react-query";
import type { AssignmentQueueFilters } from "@/types/assignment";
import { taskApi } from "@/lib/api";

export function useAssignmentQueue(filters: AssignmentQueueFilters) {
  return useQuery({
    queryKey: ["assignmentQueue", filters],
    queryFn: () => taskApi.getAssignmentQueue(filters),
    staleTime: 30 * 1000,
  });
}
