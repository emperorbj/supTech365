export type SubjectType = "INDIVIDUAL" | "ORGANIZATION" | "UNKNOWN";

export interface SubjectSearchResultItem {
  uuid: string;
  subject_type: SubjectType;
  primary_name: string;
  report_count: number;
  last_activity_date: string | null;
}

export interface SubjectSearchResponse {
  results: SubjectSearchResultItem[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface SubjectIdentifier {
  type: string;
  value: string;
}

export interface SubjectAttribute {
  type: string;
  value: string;
  is_primary: boolean;
}

export interface SubjectProfileResponse {
  uuid: string;
  subject_type: SubjectType;
  primary_name: string;
  identifiers: SubjectIdentifier[];
  attributes: SubjectAttribute[];
  created_at: string;
  updated_at: string;
}

export interface SubjectReportItem {
  report_id: string | number;
  reference_number: string;
  report_type: string;
  status: string | null;
  escalation_status: string | null;
  submitted_at: string;
  entity_name: string;
  access_level: "full" | "restricted";
}

export interface SubjectReportsResponse {
  profile_uuid: string;
  reports: SubjectReportItem[];
  access_summary: {
    total_reports: number;
    accessible_reports: number;
    restricted_reports: number;
  };
  page: number;
  page_size: number;
  total_pages: number;
}

export interface SubjectStatisticsResponse {
  profile_uuid: string;
  statistics: {
    str_count: number;
    ctr_count: number;
    escalated_ctr_count: number;
    total_reports: number;
    total_transaction_value: string | number;
    first_activity_date: string | null;
    last_activity_date: string | null;
    activity_span_days: number | null;
  };
  calculated_at: string;
}
