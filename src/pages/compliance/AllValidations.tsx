import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileCheck, RefreshCw, UserPlus, Users, TrendingUp, AlertTriangle } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReportTypeBadge, StatusBadge } from "@/components/ui/StatusBadge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Validation {
  id: string;
  referenceNumber: string;
  type: "CTR" | "STR";
  entityName: string;
  transactionCount: number;
  assignedTo: string;
  status: "pending" | "accepted" | "returned" | "rejected";
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
    assignedTo: "Jane Doe",
    status: "pending",
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
    assignedTo: "John Smith",
    status: "pending",
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
    assignedTo: "Mary Johnson",
    status: "pending",
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
    assignedTo: "Unassigned",
    status: "pending",
    submittedDate: "2026-01-17",
    age: 4,
    ageUnit: "d",
    overdue: true,
  },
  {
    id: "5",
    referenceNumber: "FIA-2026-0230",
    type: "STR",
    entityName: "Bank of Monrovia",
    transactionCount: 3,
    assignedTo: "Jane Doe",
    status: "accepted",
    submittedDate: "2026-01-18",
    age: 2,
    ageUnit: "d",
  },
];

export default function AllValidations() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Validation Queue", link: "/validation" },
    { label: "All Validations" },
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
              All Validations (25 pending, 145 completed)
            </h1>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="returned">Returned</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Assigned To" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Officers</SelectItem>
              <SelectItem value="jane">Jane Doe</SelectItem>
              <SelectItem value="john">John Smith</SelectItem>
              <SelectItem value="mary">Mary Johnson</SelectItem>
              <SelectItem value="unassigned">Unassigned</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
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
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Status</TableHead>
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
                    <TableCell>
                      {validation.assignedTo === "Unassigned" ? (
                        <Badge variant="outline" className="text-orange-600">
                          Unassigned
                        </Badge>
                      ) : (
                        validation.assignedTo
                      )}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={validation.status === "accepted" ? "validated" : validation.status} />
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1 ${validation.overdue ? "text-destructive font-medium" : ""}`}>
                        {validation.age}{validation.ageUnit}
                        {validation.overdue && <AlertTriangle className="h-4 w-4 shrink-0" />}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {validation.assignedTo === "Unassigned" ? (
                        <Button size="sm" variant="outline">
                          <UserPlus className="h-4 w-4 mr-1" />
                          Assign
                        </Button>
                      ) : (
                        <Link to={`/validation/${validation.id}/validate`}>
                          <Button size="sm">View</Button>
                        </Link>
                      )}
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
            Showing 1-25 of 170 items
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
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">...</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">7</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Pending</div>
              <div className="text-2xl font-semibold mt-1">25</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Unassigned</div>
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
              <div className="text-2xl font-semibold mt-1">2.1d</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-4 flex gap-2">
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Assign Unassigned
            </Button>
            <Button variant="outline" size="sm">
              Bulk Reassign
            </Button>
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}