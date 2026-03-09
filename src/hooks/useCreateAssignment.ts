import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateAssignmentRequest } from "@/types/assignment";
import { taskApi } from "@/lib/api";

export function useCreateAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateAssignmentRequest) => taskApi.createAssignment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assignmentQueue"] });
      queryClient.invalidateQueries({ queryKey: ["workload"] });
      queryClient.invalidateQueries({ queryKey: ["myAssignments"] });
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
}
