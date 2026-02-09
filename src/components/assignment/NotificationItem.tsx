import { Link } from "react-router-dom";
import type { NotificationResponse } from "@/types/assignment";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface NotificationItemProps {
  notification: NotificationResponse;
  onMarkRead?: (id: string) => void;
}

export function NotificationItem({ notification, onMarkRead }: NotificationItemProps) {
  const handleClick = () => {
    if (!notification.is_read && onMarkRead) onMarkRead(notification.id);
  };

  return (
    <Link
      to="/my-assignments"
      onClick={handleClick}
      className={cn(
        "block border-b border-border last:border-0 px-4 py-3 hover:bg-muted/50 transition-colors",
        !notification.is_read && "bg-muted/30"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className={cn("text-sm font-medium", !notification.is_read && "text-foreground")}>
            {notification.title}
          </p>
          <p className="text-sm text-muted-foreground truncate">{notification.message}</p>
          {notification.deadline && (
            <p className="text-xs text-muted-foreground mt-0.5">
              Deadline: {notification.deadline}
              {notification.assigned_by && ` • Assigned by: ${notification.assigned_by}`}
            </p>
          )}
        </div>
        <span className="text-xs text-muted-foreground shrink-0">
          {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
        </span>
      </div>
    </Link>
  );
}
