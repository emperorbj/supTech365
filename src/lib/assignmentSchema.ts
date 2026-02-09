import { z } from "zod";

export const createAssignmentSchema = z.object({
  report_id: z.string().min(1, "Invalid report ID"),
  assignee_id: z.string().min(1, "Please select a team member"),
  deadline: z
    .string()
    .min(1, "Please select a deadline date")
    .refine((s) => {
      const d = new Date(s);
      return d > new Date();
    }, "Deadline must be a future date"),
  workflow_type: z.enum(["compliance", "analysis"]),
});

export type CreateAssignmentFormData = z.infer<typeof createAssignmentSchema>;
