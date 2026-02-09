import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { WorkloadItemResponse } from "@/types/assignment";
import { cn } from "@/lib/utils";

interface AssigneeSelectProps {
  value: string | undefined;
  onChange: (userId: string) => void;
  options: WorkloadItemResponse[];
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export function AssigneeSelect({
  value,
  onChange,
  options,
  disabled = false,
  placeholder = "Select team member...",
  className,
}: AssigneeSelectProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Select value={value ?? ""} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.user_id} value={opt.user_id}>
              <span className="flex items-center justify-between gap-4">
                <span>{opt.user_name}</span>
                <span className="text-muted-foreground text-xs">({opt.workload_count} assigned)</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {options.length > 0 && (
        <p className="text-xs text-muted-foreground">
          Team workloads: {options.map((o) => `${o.user_name} (${o.workload_count})`).join("  |  ")}
        </p>
      )}
    </div>
  );
}
