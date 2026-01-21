import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileText, Eye, Download, Search, Upload, Filter, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge, ReportTypeBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CheckCircle2, XCircle, Clock, AlertCircle, Circle } from "lucide-react";

interface Submission {
  id: string;
  referenceNumber: string;
  reportType: "CTR" | "STR";
  submittedDate: string;
  submittedTime: string;
  status: "submitted" | "validated" | "under_review" | "rejected" | "returned" | "under_compliance_review" | "under_analysis";
  currentStage?: string;
  submissionMethod: "excel" | "api";
}

const sampleSubmissions: Submission[] = [
  {
    id: "1",
    referenceNumber: "FIA-2026-0234",
    reportType: "STR",
    submittedDate: "Jan 20, 2026",
    submittedTime: "14:32",
    status: "submitted",
    currentStage: "Awaiting Validation",
    submissionMethod: "excel",
  },
  {
    id: "2",
    referenceNumber: "FIA-2026-0233",
    reportType: "CTR",
    submittedDate: "Jan 20, 2026",
    submittedTime: "09:15",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "3",
    referenceNumber: "FIA-2026-0232",
    reportType: "STR",
    submittedDate: "Jan 19, 2026",
    submittedTime: "16:45",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "excel",
  },
  {
    id: "4",
    referenceNumber: "FIA-2026-0231",
    reportType: "CTR",
    submittedDate: "Jan 19, 2026",
    submittedTime: "11:20",
    status: "returned",
    currentStage: "Correction Required",
    submissionMethod: "excel",
  },
  {
    id: "5",
    referenceNumber: "FIA-2026-0230",
    reportType: "STR",
    submittedDate: "Jan 18, 2026",
    submittedTime: "14:10",
    status: "rejected",
    currentStage: "See details for reason",
    submissionMethod: "excel",
  },
  {
    id: "6",
    referenceNumber: "FIA-2026-0229",
    reportType: "CTR",
    submittedDate: "Jan 18, 2026",
    submittedTime: "10:30",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "7",
    referenceNumber: "FIA-2026-0228",
    reportType: "STR",
    submittedDate: "Jan 17, 2026",
    submittedTime: "15:20",
    status: "returned",
    currentStage: "Correction Required",
    submissionMethod: "excel",
  },
  {
    id: "8",
    referenceNumber: "FIA-2026-0227",
    reportType: "CTR",
    submittedDate: "Jan 17, 2026",
    submittedTime: "09:45",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "api",
  },
  {
    id: "9",
    referenceNumber: "FIA-2026-0226",
    reportType: "STR",
    submittedDate: "Jan 16, 2026",
    submittedTime: "13:15",
    status: "submitted",
    currentStage: "Awaiting Validation",
    submissionMethod: "excel",
  },
  {
    id: "10",
    referenceNumber: "FIA-2026-0225",
    reportType: "CTR",
    submittedDate: "Jan 16, 2026",
    submittedTime: "08:00",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "11",
    referenceNumber: "FIA-2026-0224",
    reportType: "STR",
    submittedDate: "Jan 15, 2026",
    submittedTime: "16:30",
    status: "under_review",
    currentStage: "Under Review",
    submissionMethod: "excel",
  },
  {
    id: "12",
    referenceNumber: "FIA-2026-0223",
    reportType: "CTR",
    submittedDate: "Jan 15, 2026",
    submittedTime: "11:20",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "api",
  },
  {
    id: "13",
    referenceNumber: "FIA-2026-0222",
    reportType: "STR",
    submittedDate: "Jan 14, 2026",
    submittedTime: "14:45",
    status: "submitted",
    currentStage: "Awaiting Validation",
    submissionMethod: "excel",
  },
  {
    id: "14",
    referenceNumber: "FIA-2026-0221",
    reportType: "CTR",
    submittedDate: "Jan 14, 2026",
    submittedTime: "10:15",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "15",
    referenceNumber: "FIA-2026-0220",
    reportType: "STR",
    submittedDate: "Jan 13, 2026",
    submittedTime: "15:30",
    status: "under_analysis",
    currentStage: "Under Analysis",
    submissionMethod: "excel",
  },
  {
    id: "16",
    referenceNumber: "FIA-2026-0219",
    reportType: "CTR",
    submittedDate: "Jan 13, 2026",
    submittedTime: "09:00",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "17",
    referenceNumber: "FIA-2026-0218",
    reportType: "STR",
    submittedDate: "Jan 12, 2026",
    submittedTime: "13:20",
    status: "rejected",
    currentStage: "See details for reason",
    submissionMethod: "excel",
  },
  {
    id: "18",
    referenceNumber: "FIA-2026-0217",
    reportType: "CTR",
    submittedDate: "Jan 12, 2026",
    submittedTime: "08:45",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "api",
  },
  {
    id: "19",
    referenceNumber: "FIA-2026-0216",
    reportType: "STR",
    submittedDate: "Jan 11, 2026",
    submittedTime: "16:10",
    status: "submitted",
    currentStage: "Awaiting Validation",
    submissionMethod: "excel",
  },
  {
    id: "20",
    referenceNumber: "FIA-2026-0215",
    reportType: "CTR",
    submittedDate: "Jan 11, 2026",
    submittedTime: "10:30",
    status: "under_compliance_review",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "21",
    referenceNumber: "FIA-2026-0214",
    reportType: "STR",
    submittedDate: "Jan 10, 2026",
    submittedTime: "14:00",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "excel",
  },
  {
    id: "22",
    referenceNumber: "FIA-2026-0213",
    reportType: "CTR",
    submittedDate: "Jan 10, 2026",
    submittedTime: "09:20",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "23",
    referenceNumber: "FIA-2026-0212",
    reportType: "STR",
    submittedDate: "Jan 9, 2026",
    submittedTime: "15:45",
    status: "returned",
    currentStage: "Correction Required",
    submissionMethod: "excel",
  },
  {
    id: "24",
    referenceNumber: "FIA-2026-0211",
    reportType: "CTR",
    submittedDate: "Jan 9, 2026",
    submittedTime: "11:10",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "api",
  },
  {
    id: "25",
    referenceNumber: "FIA-2026-0210",
    reportType: "STR",
    submittedDate: "Jan 8, 2026",
    submittedTime: "13:30",
    status: "submitted",
    currentStage: "Awaiting Validation",
    submissionMethod: "excel",
  },
  {
    id: "26",
    referenceNumber: "FIA-2026-0209",
    reportType: "CTR",
    submittedDate: "Jan 8, 2026",
    submittedTime: "08:15",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
  {
    id: "27",
    referenceNumber: "FIA-2026-0208",
    reportType: "STR",
    submittedDate: "Jan 7, 2026",
    submittedTime: "16:20",
    status: "under_review",
    currentStage: "Under Review",
    submissionMethod: "excel",
  },
  {
    id: "28",
    referenceNumber: "FIA-2026-0207",
    reportType: "CTR",
    submittedDate: "Jan 7, 2026",
    submittedTime: "10:45",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "api",
  },
  {
    id: "29",
    referenceNumber: "FIA-2026-0206",
    reportType: "STR",
    submittedDate: "Jan 6, 2026",
    submittedTime: "14:15",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "excel",
  },
  {
    id: "30",
    referenceNumber: "FIA-2026-0205",
    reportType: "CTR",
    submittedDate: "Jan 6, 2026",
    submittedTime: "09:30",
    status: "rejected",
    currentStage: "See details for reason",
    submissionMethod: "api",
  },
  {
    id: "31",
    referenceNumber: "FIA-2026-0204",
    reportType: "STR",
    submittedDate: "Jan 5, 2026",
    submittedTime: "15:00",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "excel",
  },
  {
    id: "32",
    referenceNumber: "FIA-2026-0203",
    reportType: "CTR",
    submittedDate: "Jan 5, 2026",
    submittedTime: "11:20",
    status: "submitted",
    currentStage: "Awaiting Validation",
    submissionMethod: "api",
  },
  {
    id: "33",
    referenceNumber: "FIA-2026-0202",
    reportType: "STR",
    submittedDate: "Jan 4, 2026",
    submittedTime: "13:45",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "excel",
  },
  {
    id: "34",
    referenceNumber: "FIA-2026-0201",
    reportType: "CTR",
    submittedDate: "Jan 4, 2026",
    submittedTime: "08:00",
    status: "returned",
    currentStage: "Correction Required",
    submissionMethod: "api",
  },
  {
    id: "35",
    referenceNumber: "FIA-2026-0200",
    reportType: "STR",
    submittedDate: "Jan 3, 2026",
    submittedTime: "16:30",
    status: "validated",
    currentStage: "Under Analysis",
    submissionMethod: "excel",
  },
  {
    id: "36",
    referenceNumber: "FIA-2025-0199",
    reportType: "CTR",
    submittedDate: "Dec 31, 2025",
    submittedTime: "10:15",
    status: "validated",
    currentStage: "Under Compliance Review",
    submissionMethod: "api",
  },
];

const getStatusIcon = (status: Submission["status"]) => {
  switch (status) {
    case "submitted":
      return <Circle className="h-4 w-4 text-blue-600" />;
    case "validated":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-600" />;
    case "returned":
      return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
};

// Shortened labels for display
const getStatusLabel = (status: Submission["status"]) => {
  switch (status) {
    case "submitted":
      return "Submitted";
    case "validated":
      return "Validated";
    case "rejected":
      return "Rejected";
    case "returned":
      return "Returned";
    case "under_review":
      return "Review";
    case "under_compliance_review":
      return "Compliance";
    case "under_analysis":
      return "Analysis";
    default:
      return status;
  }
};

// Full descriptions for tooltips
const getStatusTooltip = (status: Submission["status"]) => {
  switch (status) {
    case "submitted":
      return "Submitted";
    case "validated":
      return "Validated";
    case "rejected":
      return "Rejected";
    case "returned":
      return "Returned";
    case "under_review":
      return "Under Review";
    case "under_compliance_review":
      return "Under Compliance Review";
    case "under_analysis":
      return "Under Analysis";
    default:
      return status;
  }
};

// Helper to shorten currentStage labels
const shortenStageLabel = (stage?: string) => {
  if (!stage) return "";
  if (stage === "Under Compliance Review") return "Compliance";
  if (stage === "Under Analysis") return "Analysis";
  if (stage === "Awaiting Validation") return "Awaiting";
  if (stage === "Under Review") return "Review";
  return stage;
};

// Get full stage description for tooltip
const getStageTooltip = (stage?: string) => {
  return stage || "";
};

export default function MySubmissions() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const breadcrumbItems = [
    { label: "Reporting Entity Workspace", icon: <FileText className="h-5 w-5" /> },
    { label: "My Submissions" },
  ];

  const filteredSubmissions = sampleSubmissions.filter((submission) => {
    if (statusFilter !== "all" && submission.status !== statusFilter) return false;
    if (typeFilter !== "all" && submission.reportType !== typeFilter) return false;
    if (searchQuery && !submission.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSubmissions = filteredSubmissions.slice(startIndex, startIndex + itemsPerPage);

  const clearFilters = () => {
    setStatusFilter("all");
    setTypeFilter("all");
    setDateRangeFilter("all");
    setSearchQuery("");
  };

  const hasActiveFilters = statusFilter !== "all" || typeFilter !== "all" || dateRangeFilter !== "all" || searchQuery !== "";

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>My Submissions</h1>
          </div>
          <Link to="/submit">
            <Button className="bg-primary hover:bg-primary-dark">
              <Upload className="h-4 w-4 mr-2" />
              Quick Submit
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-wrap gap-2 flex-1">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="submitted">Submitted</SelectItem>
                    <SelectItem value="validated">Validated</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="returned">Returned for Correction</SelectItem>
                    <SelectItem value="under_review">Review</SelectItem>
                    <SelectItem value="under_compliance_review">Under Compliance Review</SelectItem>
                    <SelectItem value="under_analysis">Under Analysis</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Report Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="STR">STR</SelectItem>
                    <SelectItem value="CTR">CTR</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={dateRangeFilter} onValueChange={setDateRangeFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Date Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="7days">Last 7 Days</SelectItem>
                    <SelectItem value="30days">Last 30 Days</SelectItem>
                    <SelectItem value="thismonth">This Month</SelectItem>
                    <SelectItem value="lastmonth">Last Month</SelectItem>
                    <SelectItem value="custom">Custom Range...</SelectItem>
                  </SelectContent>
                </Select>

                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>

              <div className="flex gap-2">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by reference number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Info and Actions */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredSubmissions.length)} of {filteredSubmissions.length} submissions
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ref Number</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSubmissions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No submissions found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-medium">{submission.referenceNumber}</TableCell>
                    <TableCell>
                      <ReportTypeBadge type={submission.reportType} />
                    </TableCell>
                    <TableCell>
                      {submission.submittedDate} {submission.submittedTime}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(submission.status)}
                        <div>
                          {getStatusTooltip(submission.status) !== getStatusLabel(submission.status) ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="font-medium cursor-help">
                                    {getStatusLabel(submission.status)}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{getStatusTooltip(submission.status)}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : (
                            <div className="font-medium">
                              {getStatusLabel(submission.status)}
                            </div>
                          )}
                          {submission.currentStage && (
                            getStageTooltip(submission.currentStage) !== shortenStageLabel(submission.currentStage) ? (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div className="text-xs text-muted-foreground cursor-help">
                                      {shortenStageLabel(submission.currentStage)}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{getStageTooltip(submission.currentStage)}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ) : (
                              <div className="text-xs text-muted-foreground">
                                {shortenStageLabel(submission.currentStage)}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {submission.status === "returned" && (
                          <Link to={`/resubmissions`}>
                            <Button variant="outline" size="sm">
                              Resubmit
                            </Button>
                          </Link>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => navigate(`/submissions/${submission.id}`)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Card>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </MainLayout>
  );
}