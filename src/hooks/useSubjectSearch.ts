import { useQuery } from "@tanstack/react-query";
import type { SubjectType } from "@/types/subject";
import { subjectApi } from "@/lib/api";

export function useSubjectSearch(params: {
  q: string;
  subject_type?: SubjectType;
  page?: number;
  page_size?: number;
}) {
  const q = params.q.trim();
  return useQuery({
    queryKey: ["subjects", "search", { ...params, q }],
    queryFn: () => subjectApi.searchSubjects({ ...params, q }),
    enabled: q.length >= 2,
    staleTime: 30 * 1000,
  });
}
