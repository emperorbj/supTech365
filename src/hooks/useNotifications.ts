import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { NotificationFilters } from "@/types/assignment";
import { taskApi } from "@/lib/api";

export function useNotifications(filters: NotificationFilters = {}) {
  return useQuery({
    queryKey: ["notifications", filters],
    queryFn: () => taskApi.getNotifications(filters),
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000,
  });
}

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();
  return {
    mutateAsync: async (id: string) => {
      await taskApi.markNotificationRead(id);
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  };
}

export function useMarkAllNotificationsRead() {
  const queryClient = useQueryClient();
  return {
    mutateAsync: async () => {
      await taskApi.markAllNotificationsRead();
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  };
}
