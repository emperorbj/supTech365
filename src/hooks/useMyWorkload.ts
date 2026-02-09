import { useQuery } from "@tanstack/react-query";
import * as assignmentApi from "@/lib/assignmentApi";

export function useMyWorkload() {
  return useQuery({
    queryKey: ["myWorkload"],
    queryFn: () => assignmentApi.getMyWorkload(),
    staleTime: 60 * 1000,
  });
}
