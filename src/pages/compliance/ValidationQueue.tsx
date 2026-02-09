import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileCheck, RefreshCw, Search, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReportTypeBadge } from "@/components/ui/StatusBadge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Validation {
  id: string;
  referenceNumber: string;
  type: "CTR" | "STR";
  entityName: string;
  transactionCount: number;
  submittedDate: string;
  age: number;
  ageUnit: "d" | "h";
  overdue?: boolean;
}

const mockValidations: Validation[] = [
  {
    id: "1",
    referenceNumber: "FIA-2026-0234",
    type: "CTR",
    entityName: "Bank of Monrovia",
    transactionCount: 847,
    submittedDate: "2026-01-20",
    age: 1,
    ageUnit: "d",
  },
  {
    id: "2",
    referenceNumber: "FIA-2026-0233",
    type: "CTR",
    entityName: "First Intl Bank",
    transactionCount: 234,
    submittedDate: "2026-01-19",
    age: 2,
    ageUnit: "d",
  },
  {
    id: "3",
    referenceNumber: "FIA-2026-0232",
    type: "CTR",
    entityName: "Ecobank Liberia",
    transactionCount: 12,
    submittedDate: "2026-01-18",
    age: 3,
    ageUnit: "d",
  },
  {
    id: "4",
    referenceNumber: "FIA-2026-0231",
    type: "CTR",
    entityName: "UBA Liberia",
    transactionCount: 5,
    submittedDate: "2026-01-17",
    age: 4,
    ageUnit: "d",
    overdue: true,
  },
];

export default function ValidationQueue() {
  const [statusFilter, setStatusFilter] = useState("pending");
  const [reportTypeFilter, setReportTypeFilter] = useState("all");

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Validation Queue" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              <FileCheck className="h-6 w-6 text-primary" />
              My Assigned Validations (12 pending)
            </h1>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
            </SelectContent>
          </Select>

          <Select value={reportTypeFilter} onValueChange={setReportTypeFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Report Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="CTR">CTR</SelectItem>
              <SelectItem value="STR">STR</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="ghost" size="sm">
            Clear
          </Button>
        </div>

        {/* Validation Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Ref #</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entity</TableHead>
                  <TableHead>Trans</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockValidations.map((validation) => (
                  <TableRow key={validation.id} className="data-table-row">
                    <TableCell className="font-mono font-medium text-primary">
                      {validation.referenceNumber}
                    </TableCell>
                    <TableCell>
                      <ReportTypeBadge type={validation.type} />
                    </TableCell>
                    <TableCell>{validation.entityName}</TableCell>
                    <TableCell>{validation.transactionCount}</TableCell>
                    <TableCell className="text-muted-foreground">{validation.submittedDate}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1 ${validation.overdue ? "text-destructive font-medium" : ""}`}>
                        {validation.age}{validation.ageUnit}
                        {validation.overdue && <AlertTriangle className="h-4 w-4 shrink-0" />}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/compliance/validation/${validation.referenceNumber}/validate`}>
                        <Button size="sm">Validate</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1-10 of 12 items
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Pending</div>
              <div className="text-2xl font-semibold mt-1">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Today</div>
              <div className="text-2xl font-semibold mt-1">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Overdue</div>
              <div className="text-2xl font-semibold mt-1 text-destructive">1</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Avg Time</div>
              <div className="text-2xl font-semibold mt-1">2d</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
