import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotifications, useMarkAllNotificationsRead, useMarkNotificationRead } from "@/hooks/useNotifications";
import { ApiError, taskApi } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { NotificationItem } from "./NotificationItem";

interface NotificationsPanelProps {
  isDropdown?: boolean;
}

export function NotificationsPanel({ isDropdown = true }: NotificationsPanelProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data, isLoading } = useNotifications({});
  const { mutateAsync: markAllRead } = useMarkAllNotificationsRead();
  const { mutateAsync: markRead } = useMarkNotificationRead();
  const items = data?.items ?? [];
  const unreadCount = data?.unread_count ?? 0;

  const openNotification = async (assignmentId: string) => {
    try {
      const assignment = await taskApi.getAssignment(assignmentId);
      const access = await taskApi.checkReportAccess(assignment.report_id);
      if (!access.has_access) {
        toast({
          title: "Access denied",
          description: "This report is not assigned to you.",
          variant: "destructive",
        });
        return;
      }
      navigate(
        assignment.workflow_type === "compliance"
          ? `/compliance/validation-queue/${assignment.report_id}`
          : "/analysis-queue"
      );
    } catch (err) {
      toast({
        title: "Unable to open assignment",
        description: err instanceof ApiError ? err.message : "Please try again.",
        variant: "destructive",
      });
    }
  };

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
              onOpen={async (notification) => {
                if (!notification.is_read) {
                  await markRead(notification.id);
                }
                await openNotification(notification.assignment_id);
              }}
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
