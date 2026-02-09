/**
 * Assignment & workload API (mock implementation for FDD Feature 6).
 * Replace with real fetch calls when backend is ready.
 */

import type {
  CreateAssignmentRequest,
  AssignmentResponse,
  PendingAssignmentReport,
  WorkloadItemResponse,
  NotificationResponse,
  AssignmentQueueFilters,
  MyAssignmentFilters,
  NotificationFilters,
} from "@/types/assignment";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Mock: reports pending assignment (mutated when assignments created)
let MOCK_PENDING_REPORTS: PendingAssignmentReport[] = [
  { id: "r1", reference: "FIA-2026-0001", report_type: "CTR", entity_name: "First Bank", validated_at: "02-03" },
  { id: "r2", reference: "FIA-2026-0002", report_type: "STR", entity_name: "Unity Corp", validated_at: "02-03" },
  { id: "r3", reference: "FIA-2026-0003", report_type: "CTR", entity_name: "Trust Bank", validated_at: "02-04" },
  { id: "r4", reference: "FIA-2026-0004", report_type: "STR", entity_name: "Metro Bank", validated_at: "02-04" },
  { id: "r5", reference: "FIA-2026-0005", report_type: "CTR", entity_name: "First Bank", validated_at: "02-05" },
  { id: "r6", reference: "FIA-2026-0006", report_type: "CTR", entity_name: "Ecobank Liberia", validated_at: "02-05" },
];

// Mock: team workload (officers/analysts)
const MOCK_WORKLOAD: WorkloadItemResponse[] = [
  { user_id: "u1", user_name: "Jane Doe", email: "jane@fia.gov", role: "Officer", workload_count: 4, active_ctrs: 4, active_strs: 0 },
  { user_id: "u2", user_name: "John Smith", email: "john@fia.gov", role: "Officer", workload_count: 6, active_ctrs: 6, active_strs: 0 },
  { user_id: "u3", user_name: "Mary Johnson", email: "mary@fia.gov", role: "Officer", workload_count: 3, active_ctrs: 3, active_strs: 0 },
  { user_id: "u4", user_name: "Bob Williams", email: "bob@fia.gov", role: "Officer", workload_count: 8, active_ctrs: 8, active_strs: 0 },
  { user_id: "u5", user_name: "Alice Brown", email: "alice@fia.gov", role: "Officer", workload_count: 5, active_ctrs: 5, active_strs: 0 },
];

// Mock: my assignments (will be filtered by current user in hooks)
const MOCK_MY_ASSIGNMENTS: AssignmentResponse[] = [
  {
    id: "a1", report_id: "r1", report_reference: "FIA-2026-0012", report_type: "CTR",
    assignee_id: "me", assignee_name: "Current User", assigned_by_id: "u2", assigned_by_name: "John Smith",
    workflow_type: "compliance", deadline: "2026-02-15T23:59:59Z", status: "active", assigned_at: "2026-02-01T10:00:00Z",
  },
  {
    id: "a2", report_id: "r2", report_reference: "FIA-2026-0018", report_type: "CTR",
    assignee_id: "me", assignee_name: "Current User", assigned_by_id: "u2", assigned_by_name: "John Smith",
    workflow_type: "compliance", deadline: "2026-02-12T23:59:59Z", status: "active", assigned_at: "2026-02-02T09:00:00Z",
  },
  {
    id: "a3", report_id: "r3", report_reference: "FIA-2026-0023", report_type: "CTR",
    assignee_id: "me", assignee_name: "Current User", assigned_by_id: "u2", assigned_by_name: "John Smith",
    workflow_type: "compliance", deadline: "2026-02-20T23:59:59Z", status: "active", assigned_at: "2026-02-03T14:00:00Z",
  },
];

// Mock: notifications
let MOCK_NOTIFICATIONS: NotificationResponse[] = [
  {
    id: "n1", assignment_id: "a1", notification_type: "new_assignment",
    title: "New CTR Assigned", message: "CTR FIA-2026-0045 assigned to you", is_read: false,
    created_at: new Date(Date.now() - 2 * 60 * 1000).toISOString(), deadline: "Feb 25, 2026", assigned_by: "John Smith",
  },
  {
    id: "n2", assignment_id: "a2", notification_type: "new_assignment",
    title: "New CTR Assigned", message: "CTR FIA-2026-0031 assigned to you", is_read: false,
    created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(), deadline: "Feb 18, 2026", assigned_by: "John Smith",
  },
  {
    id: "n3", assignment_id: "a3", notification_type: "new_assignment",
    title: "New CTR Assigned", message: "CTR FIA-2026-0023 assigned to you", is_read: true,
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), deadline: "Feb 20, 2026", assigned_by: "John Smith",
  },
];

export async function getAssignmentQueue(filters: AssignmentQueueFilters): Promise<{
  items: PendingAssignmentReport[];
  total: number;
  page: number;
  page_size: number;
}> {
  await delay(300);
  let items = [...MOCK_PENDING_REPORTS];
  if (filters.report_type) {
    items = items.filter((r) => r.report_type === filters.report_type);
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    items = items.filter((r) => r.reference.toLowerCase().includes(q) || r.entity_name.toLowerCase().includes(q));
  }
  const page = filters.page ?? 1;
  const pageSize = filters.page_size ?? 20;
  const start = (page - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    total: items.length,
    page,
    page_size: pageSize,
  };
}

export async function getOfficerWorkloads(_teamId?: string): Promise<WorkloadItemResponse[]> {
  await delay(200);
  return [...MOCK_WORKLOAD];
}

export async function getAnalystWorkloads(): Promise<WorkloadItemResponse[]> {
  await delay(200);
  return MOCK_WORKLOAD.map((w) => ({
    ...w,
    workload_count: w.workload_count + 1,
    active_strs: (w.active_strs ?? 0) + 2,
    active_escalated_ctrs: 1,
    active_cases: 0,
  }));
}

export async function getMyAssignments(_filters: MyAssignmentFilters): Promise<{
  items: AssignmentResponse[];
  total: number;
  page: number;
  page_size: number;
}> {
  await delay(250);
  const page = _filters?.page ?? 1;
  const pageSize = _filters?.page_size ?? 20;
  const start = (page - 1) * pageSize;
  const items = MOCK_MY_ASSIGNMENTS.slice(start, start + pageSize);
  return { items, total: MOCK_MY_ASSIGNMENTS.length, page, page_size: pageSize };
}

export async function getMyWorkload(): Promise<{
  total: number;
  by_type: { ctrs: number; strs: number; escalated_ctrs?: number; cases?: number };
}> {
  await delay(150);
  return {
    total: MOCK_MY_ASSIGNMENTS.filter((a) => a.status === "active").length,
    by_type: { ctrs: 5, strs: 0, escalated_ctrs: 0, cases: 0 },
  };
}

export async function getNotifications(filters: NotificationFilters): Promise<{
  items: NotificationResponse[];
  unread_count: number;
}> {
  await delay(200);
  let items = [...MOCK_NOTIFICATIONS];
  if (filters.is_read === true) items = items.filter((n) => n.is_read);
  if (filters.is_read === false) items = items.filter((n) => !n.is_read);
  const unread_count = MOCK_NOTIFICATIONS.filter((n) => !n.is_read).length;
  return { items, unread_count };
}

export async function createAssignment(data: CreateAssignmentRequest): Promise<AssignmentResponse> {
  await delay(400);
  const assignee = MOCK_WORKLOAD.find((w) => w.user_id === data.assignee_id);
  const report = MOCK_PENDING_REPORTS.find((r) => r.id === data.report_id);
  if (!assignee || !report) throw new Error("Invalid assignee or report");
  const created: AssignmentResponse = {
    id: `a-${Date.now()}`,
    report_id: data.report_id,
    report_reference: report.reference,
    report_type: report.report_type,
    assignee_id: assignee.user_id,
    assignee_name: assignee.user_name,
    assigned_by_id: "current-user",
    assigned_by_name: "Current User",
    workflow_type: data.workflow_type,
    deadline: data.deadline,
    status: "active",
    assigned_at: new Date().toISOString(),
  };
  MOCK_NOTIFICATIONS.unshift({
    id: `n-${Date.now()}`,
    assignment_id: created.id,
    notification_type: "new_assignment",
    title: "New " + report.report_type + " Assigned",
    message: `${report.report_type} ${report.reference} assigned to you`,
    is_read: false,
    created_at: new Date().toISOString(),
    deadline: new Date(data.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    assigned_by: "Current User",
  });
  MOCK_PENDING_REPORTS = MOCK_PENDING_REPORTS.filter((r) => r.id !== data.report_id);
  return created;
}

export async function markNotificationRead(id: string): Promise<NotificationResponse> {
  await delay(100);
  const n = MOCK_NOTIFICATIONS.find((x) => x.id === id);
  if (!n) throw new Error("Notification not found");
  n.is_read = true;
  return n;
}

export async function markAllNotificationsRead(): Promise<void> {
  await delay(150);
  MOCK_NOTIFICATIONS = MOCK_NOTIFICATIONS.map((n) => ({ ...n, is_read: true }));
}
