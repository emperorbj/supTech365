import { format, formatDistanceToNow, isPast } from "date-fns";
import { cn } from "@/lib/utils";

interface DeadlineBadgeProps {
  deadline: Date | string;
  showRelative?: boolean;
  className?: string;
}

export function DeadlineBadge({ deadline, showRelative = true, className }: DeadlineBadgeProps) {
  const d = typeof deadline === "string" ? new Date(deadline) : deadline;
  const overdue = isPast(d);
  const daysLeft = Math.ceil((d.getTime() - Date.now()) / (24 * 60 * 60 * 1000));

  let urgency = "text-muted-foreground";
  if (overdue || daysLeft < 0) urgency = "text-destructive font-medium";
  else if (daysLeft <= 2) urgency = "text-destructive";
  else if (daysLeft <= 5) urgency = "text-yellow-600 dark:text-yellow-500";
  else urgency = "text-workflow-validated";

  return (
    <span className={cn("text-sm", urgency, className)}>
      {showRelative && !overdue && daysLeft >= 0 && (
        <span className="mr-1">Due in {formatDistanceToNow(d, { addSuffix: false })}</span>
      )}
      {overdue && <span className="mr-1">Overdue</span>}
      <span>{format(d, "MMM d, yyyy")}</span>
    </span>
  );
}
