import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type WorkflowStatus =
  | "submitted"
  | "validated"
  | "under_review"
  | "rejected"
  | "returned"
  | "archived"
  | "pending"
  | "approved"
  | "escalated";

export type ReportType = "CTR" | "STR" | "Escalated CTR";

export type RiskLevel = "critical" | "high" | "medium" | "low";

interface StatusBadgeProps {
  status: WorkflowStatus;
  className?: string;
}

interface ReportTypeBadgeProps {
  type: ReportType;
  className?: string;
}

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

// Shortened labels for badge display
const statusLabels: Record<WorkflowStatus, string> = {
  submitted: "Submitted",
  validated: "Validated",
  under_review: "Review",
  rejected: "Rejected",
  returned: "Returned",
  archived: "Archived",
  pending: "Pending",
  approved: "Approved",
  escalated: "Escalated",
};

// Full descriptions for tooltips
const statusTooltips: Record<WorkflowStatus, string> = {
  submitted: "Submitted",
  validated: "Validated",
  under_review: "Under Review",
  rejected: "Rejected",
  returned: "Returned",
  archived: "Archived",
  pending: "Pending",
  approved: "Approved",
  escalated: "Escalated",
};

const statusClasses: Record<WorkflowStatus, string> = {
  submitted: "badge-submitted",
  validated: "badge-validated",
  under_review: "badge-under-review",
  rejected: "badge-rejected",
  returned: "badge-returned",
  archived: "bg-muted text-muted-foreground",
  pending: "bg-muted text-muted-foreground",
  approved: "badge-validated",
  escalated: "badge-escalated",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const shortLabel = statusLabels[status];
  const fullDescription = statusTooltips[status];
  const showTooltip = shortLabel !== fullDescription;

  const badge = (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        statusClasses[status],
        className
      )}
    >
      {shortLabel}
    </span>
  );

  if (!showTooltip) {
    return badge;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent>
          <p>{fullDescription}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const reportTypeClasses: Record<ReportType, string> = {
  CTR: "badge-ctr",
  STR: "badge-str",
  "Escalated CTR": "badge-escalated",
};

// Shortened labels for badge display
const reportTypeLabels: Record<ReportType, string> = {
  CTR: "CTR",
  STR: "STR",
  "Escalated CTR": "Esc. CTR",
};

// Full descriptions for tooltips
const reportTypeTooltips: Record<ReportType, string> = {
  CTR: "CTR",
  STR: "STR",
  "Escalated CTR": "Escalated CTR",
};

export function ReportTypeBadge({ type, className }: ReportTypeBadgeProps) {
  const shortLabel = reportTypeLabels[type];
  const fullDescription = reportTypeTooltips[type];
  const showTooltip = shortLabel !== fullDescription;

  const badge = (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        reportTypeClasses[type],
        className
      )}
    >
      {shortLabel}
    </span>
  );

  if (!showTooltip) {
    return badge;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent>
          <p>{fullDescription}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const riskClasses: Record<RiskLevel, string> = {
  critical: "badge-risk-critical",
  high: "badge-risk-high",
  medium: "badge-risk-medium",
  low: "badge-risk-low",
};

const riskLabels: Record<RiskLevel, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
};

export function RiskBadge({ level, className }: RiskBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        riskClasses[level],
        className
      )}
    >
      {riskLabels[level]}
    </span>
  );
}
