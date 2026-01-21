import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileText, RefreshCw, AlertTriangle } from "lucide-react";
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
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface CTRReview {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  assignedDate: string;
  age: number;
  ageUnit: "d" | "h";
  riskLevel?: "high" | "medium";
}

const mockCTRs: CTRReview[] = [
  {
    id: "1",
    referenceNumber: "FIA-0156",
    entityName: "Bank of M.",
    amount: "$62,500",
    transactionCount: 5,
    subject: "Sarah K.",
    assignedDate: "Jan 18",
    age: 3,
    ageUnit: "d",
    riskLevel: "high",
  },
  {
    id: "2",
    referenceNumber: "FIA-0157",
    entityName: "First Intl",
    amount: "$45,200",
    transactionCount: 3,
    subject: "John M.",
    assignedDate: "Jan 19",
    age: 2,
    ageUnit: "d",
  },
  {
    id: "3",
    referenceNumber: "FIA-0158",
    entityName: "Ecobank",
    amount: "$89,300",
    transactionCount: 12,
    subject: "Diamond Ltd",
    assignedDate: "Jan 19",
    age: 2,
    ageUnit: "d",
    riskLevel: "medium",
  },
  {
    id: "4",
    referenceNumber: "FIA-0159",
    entityName: "UBA",
    amount: "$12,500",
    transactionCount: 1,
    subject: "ABC Trading",
    assignedDate: "Jan 20",
    age: 1,
    ageUnit: "d",
  },
];

export default function CTRReview() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileText className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              My Assigned CTRs (8 pending)
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
              <SelectItem value="reviewed">Reviewed</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
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
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Amount Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Amounts</SelectItem>
              <SelectItem value="low">Under $50k</SelectItem>
              <SelectItem value="medium">$50k - $100k</SelectItem>
              <SelectItem value="high">Over $100k</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="ghost" size="sm">
            Clear
          </Button>
        </div>

        {/* CTR Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Ref #</TableHead>
                  <TableHead>Entity</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Trans</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>{ctr.entityName}</TableCell>
                    <TableCell className="font-medium">{ctr.amount}</TableCell>
                    <TableCell>{ctr.transactionCount}</TableCell>
                    <TableCell>{ctr.subject}</TableCell>
                    <TableCell className="text-muted-foreground">{ctr.assignedDate}</TableCell>
                    <TableCell>{ctr.age}{ctr.ageUnit}</TableCell>
                    <TableCell>
                      {ctr.riskLevel === "high" && (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          High
                        </Badge>
                      )}
                      {ctr.riskLevel === "medium" && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
                          Medium
                        </Badge>
                      )}
                      {!ctr.riskLevel && <span className="text-muted-foreground">-</span>}
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/compliance/ctr-review/${ctr.id}/review`}>
                        <Button size="sm">Review</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="text-sm text-muted-foreground flex items-center gap-4">
          <span>Legend:</span>
          <span className="flex items-center gap-1">
            <Badge variant="destructive" className="h-4 px-1.5">
              <AlertTriangle className="h-2 w-2" />
            </Badge>
            High Risk Alert
          </span>
          <span className="flex items-center gap-1">
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300 h-4 px-1.5">
              M
            </Badge>
            Medium Risk Alert
          </span>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1-10 of 8 items
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
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Assigned</div>
              <div className="text-2xl font-semibold mt-1">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Reviewed</div>
              <div className="text-2xl font-semibold mt-1">15</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Flagged</div>
              <div className="text-2xl font-semibold mt-1">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Avg Review</div>
              <div className="text-2xl font-semibold mt-1">1.5d</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
