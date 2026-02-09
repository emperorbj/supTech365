import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotifications, useMarkAllNotificationsRead, useMarkNotificationRead } from "@/hooks/useNotifications";
import { NotificationItem } from "./NotificationItem";

interface NotificationsPanelProps {
  isDropdown?: boolean;
}

export function NotificationsPanel({ isDropdown = true }: NotificationsPanelProps) {
  const { data, isLoading } = useNotifications({});
  const { mutateAsync: markAllRead } = useMarkAllNotificationsRead();
  const { mutateAsync: markRead } = useMarkNotificationRead();
  const items = data?.items ?? [];
  const unreadCount = data?.unread_count ?? 0;

  return (
    <div className={isDropdown ? "w-[360px]" : ""}>
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Notifications</h3>
        {unreadCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => markAllRead()}
          >
            Mark All Read
          </Button>
        )}
      </div>
      <ScrollArea className={isDropdown ? "h-[320px]" : "min-h-[400px]"}>
        {isLoading ? (
          <div className="p-4 text-center text-sm text-muted-foreground">
            Loading...
          </div>
        ) : items.length === 0 ? (
          <div className="p-4 text-center text-sm text-muted-foreground">
            No notifications.
          </div>
        ) : (
          items.map((n) => (
            <NotificationItem
              key={n.id}
              notification={n}
              onMarkRead={(id) => markRead(id)}
            />
          ))
        )}
      </ScrollArea>
      {isDropdown && (
        <div className="p-2 border-t">
          <Button variant="ghost" size="sm" className="w-full" asChild>
            <Link to="/notifications">View All Notifications</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
