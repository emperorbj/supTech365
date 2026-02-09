import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateAssignmentRequest } from "@/types/assignment";
import * as assignmentApi from "@/lib/assignmentApi";

export function useCreateAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateAssignmentRequest) => assignmentApi.createAssignment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assignmentQueue"] });
      queryClient.invalidateQueries({ queryKey: ["workload"] });
      queryClient.invalidateQueries({ queryKey: ["myAssignments"] });
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
}
