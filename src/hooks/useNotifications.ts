import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { NotificationFilters } from "@/types/assignment";
import * as assignmentApi from "@/lib/assignmentApi";

export function useNotifications(filters: NotificationFilters = {}) {
  return useQuery({
    queryKey: ["notifications", filters],
    queryFn: () => assignmentApi.getNotifications(filters),
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000,
  });
}

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();
  return {
    mutateAsync: async (id: string) => {
      await assignmentApi.markNotificationRead(id);
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  };
}

export function useMarkAllNotificationsRead() {
  const queryClient = useQueryClient();
  return {
    mutateAsync: async () => {
      await assignmentApi.markAllNotificationsRead();
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  };
}
