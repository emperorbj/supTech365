import { useQuery } from "@tanstack/react-query";
import type { AssignmentQueueFilters } from "@/types/assignment";
import * as assignmentApi from "@/lib/assignmentApi";

export function useAssignmentQueue(filters: AssignmentQueueFilters) {
  return useQuery({
    queryKey: ["assignmentQueue", filters],
    queryFn: () => assignmentApi.getAssignmentQueue(filters),
    staleTime: 30 * 1000,
  });
}
