import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAssignmentSchema, type CreateAssignmentFormData } from "@/lib/assignmentSchema";
import { AssigneeSelect } from "./AssigneeSelect";
import { useCreateAssignment } from "@/hooks/useCreateAssignment";
import { useOfficerWorkload, useAnalystWorkload } from "@/hooks/useTeamWorkload";
import { toast } from "sonner";
import type { PendingAssignmentReport } from "@/types/assignment";
import { Info } from "lucide-react";

interface CreateAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: PendingAssignmentReport | null;
  onSuccess?: () => void;
}

export function CreateAssignmentModal({
  isOpen,
  onClose,
  report,
  onSuccess,
}: CreateAssignmentModalProps) {
  const workflowType = report?.report_type === "CTR" ? "compliance" : "analysis";
  const { data: officerWorkload } = useOfficerWorkload();
  const { data: analystWorkload } = useAnalystWorkload();
  const assigneeOptions = workflowType === "compliance" ? (officerWorkload ?? []) : (analystWorkload ?? []);

  const form = useForm<CreateAssignmentFormData>({
    resolver: zodResolver(createAssignmentSchema),
    defaultValues: {
      report_id: report?.id ?? "",
      workflow_type: workflowType,
      assignee_id: undefined,
      deadline: "",
    },
  });

  const createAssignment = useCreateAssignment();

  const onSubmit = (data: CreateAssignmentFormData) => {
    createAssignment.mutate(
      {
        report_id: data.report_id,
        assignee_id: data.assignee_id,
        deadline: new Date(data.deadline).toISOString(),
        workflow_type: data.workflow_type,
      },
      {
        onSuccess: () => {
          toast.success("Report assigned successfully");
          form.reset();
          onClose();
          onSuccess?.();
        },
        onError: (err: Error) => {
          toast.error(err.message || "Failed to create assignment. Please try again.");
        },
      }
    );
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) onClose();
    if (open && report) {
      form.reset({
        report_id: report.id,
        workflow_type: report.report_type === "CTR" ? "compliance" : "analysis",
        assignee_id: undefined,
        deadline: "",
      });
    }
  };

  if (!report) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Assign Report</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="rounded-md bg-muted/50 p-3 text-sm">
            <p><strong>Report:</strong> {report.reference}</p>
            <p><strong>Type:</strong> {report.report_type}</p>
            <p><strong>Entity:</strong> {report.entity_name}</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="assignee_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assign To *</FormLabel>
                    <FormControl>
                      <AssigneeSelect
                        value={field.value}
                        onChange={field.onChange}
                        options={assigneeOptions}
                        placeholder="Select team member..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deadline *</FormLabel>
                    <FormControl>
                      <input
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        min={new Date(Date.now() + 86400000).toISOString().slice(0, 10)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-start gap-2 rounded-md border border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800 p-3 text-sm text-muted-foreground">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <span>The selected team member will receive an immediate notification about this assignment.</span>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={createAssignment.isPending}>
                  {createAssignment.isPending ? "Assigning..." : "Assign Report"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
