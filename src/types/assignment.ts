/**
 * Types for Task Assignment and Workload Distribution (FDD Feature 6)
 */

export type WorkflowType = "compliance" | "analysis";
export type AssignmentStatus = "active" | "completed" | "cancelled";
export type ReportTypeAssignment = "CTR" | "STR";

export interface CreateAssignmentRequest {
  report_id: string;
  assignee_id: string;
  deadline: string; // ISO 8601
  workflow_type: WorkflowType;
}

export interface AssignmentResponse {
  id: string;
  report_id: string;
  report_reference: string;
  report_type: ReportTypeAssignment;
  assignee_id: string;
  assignee_name: string;
  assigned_by_id: string;
  assigned_by_name: string;
  workflow_type: WorkflowType;
  deadline: string;
  status: AssignmentStatus;
  assigned_at: string;
}

/** Report in assignment queue (pending assignment) */
export interface PendingAssignmentReport {
  id: string;
  reference: string;
  report_type: ReportTypeAssignment;
  entity_name: string;
  validated_at: string; // ISO or "MM-DD"
}

export interface WorkloadItemResponse {
  user_id: string;
  user_name: string;
  email: string;
  role: string;
  workload_count: number;
  active_ctrs?: number;
  active_strs?: number;
  active_escalated_ctrs?: number;
  active_cases?: number;
}

export interface NotificationResponse {
  id: string;
  assignment_id: string;
  notification_type: "new_assignment" | "deadline_reminder";
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
  deadline?: string;
  assigned_by?: string;
}

export interface AssignmentQueueFilters {
  report_type?: ReportTypeAssignment;
  entity_id?: string;
  search?: string;
  page?: number;
  page_size?: number;
}

export interface MyAssignmentFilters {
  status?: AssignmentStatus;
  date_from?: string;
  date_to?: string;
  search?: string;
  page?: number;
  page_size?: number;
}

export interface NotificationFilters {
  is_read?: boolean;
  date_range?: "today" | "this_week" | "this_month";
}
