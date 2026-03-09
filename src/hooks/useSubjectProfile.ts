import { useQuery } from "@tanstack/react-query";
import { subjectApi } from "@/lib/api";

export function useSubjectProfile(uuid?: string) {
  return useQuery({
    queryKey: ["subjects", "profile", uuid],
    queryFn: () => subjectApi.getSubjectProfile(uuid as string),
    enabled: Boolean(uuid),
    staleTime: 60 * 1000,
  });
}

export function useSubjectReports(
  uuid?: string,
  params: { report_type?: "STR" | "CTR" | "ALL"; page?: number; page_size?: number } = {}
) {
  return useQuery({
    queryKey: ["subjects", "reports", uuid, params],
    queryFn: () => subjectApi.getSubjectReports(uuid as string, params),
    enabled: Boolean(uuid),
    staleTime: 30 * 1000,
  });
}

export function useSubjectStatistics(uuid?: string) {
  return useQuery({
    queryKey: ["subjects", "statistics", uuid],
    queryFn: () => subjectApi.getSubjectStatistics(uuid as string),
    enabled: Boolean(uuid),
    staleTime: 60 * 1000,
  });
}
