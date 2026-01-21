import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileText, RefreshCw, TrendingUp } from "lucide-react";
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
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface CTR {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  assignedTo: string;
  status: "pending" | "flagged" | "escalated" | "archived" | "monitoring";
  age: number;
  ageUnit: "d";
}

const mockCTRs: CTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0234",
    entityName: "Bank of M.",
    amount: "$62,500",
    transactionCount: 847,
    subject: "Sarah K.",
    assignedTo: "Jane D.",
    status: "flagged",
    age: 3,
    ageUnit: "d",
  },
  {
    id: "2",
    referenceNumber: "FIA-0233",
    entityName: "First Intl",
    amount: "$45,200",
    transactionCount: 234,
    subject: "John M.",
    assignedTo: "John S.",
    status: "pending",
    age: 2,
    ageUnit: "d",
  },
  {
    id: "3",
    referenceNumber: "FIA-0232",
    entityName: "Ecobank",
    amount: "$89,300",
    transactionCount: 12,
    subject: "Diamond Ltd",
    assignedTo: "Mary J.",
    status: "pending",
    age: 2,
    ageUnit: "d",
  },
  {
    id: "4",
    referenceNumber: "FIA-0220",
    entityName: "Bank of M.",
    amount: "$125,000",
    transactionCount: 45,
    subject: "ABC Corp",
    assignedTo: "-",
    status: "escalated",
    age: 5,
    ageUnit: "d",
  },
];

export default function AllCTRs() {
  const [tab, setTab] = useState("all");

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileText className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: "All CTRs" },
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
              All CTRs (150 total, 25 pending, 12 escalated)
            </h1>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="all">All (150)</TabsTrigger>
            <TabsTrigger value="pending">Pending Review (25)</TabsTrigger>
            <TabsTrigger value="flagged">Flagged (8)</TabsTrigger>
            <TabsTrigger value="escalated">Escalated (12)</TabsTrigger>
            <TabsTrigger value="archived">Archived (95)</TabsTrigger>
            <TabsTrigger value="monitoring">Under Monitoring (10)</TabsTrigger>
          </TabsList>

          <TabsContent value={tab} className="space-y-6">
            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="flagged">Flagged</SelectItem>
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
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Entity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Entities</SelectItem>
                  <SelectItem value="bom">Bank of Monrovia</SelectItem>
                  <SelectItem value="fib">First Intl Bank</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
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
                  <SelectItem value="high">Over $50k</SelectItem>
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
                      <TableHead>Status</TableHead>
                      <TableHead>Age</TableHead>
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
                        <TableCell>{ctr.assignedTo}</TableCell>
                        <TableCell>
                          <StatusBadge status={ctr.status} />
                        </TableCell>
                        <TableCell>{ctr.age}{ctr.ageUnit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing 1-25 of 150 items
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
                    <PaginationLink href="#">...</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">6</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </TabsContent>
        </Tabs>

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
              <div className="text-sm text-muted-foreground">Flagged</div>
              <div className="text-2xl font-semibold mt-1">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Escalated</div>
              <div className="text-2xl font-semibold mt-1">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Archived</div>
              <div className="text-2xl font-semibold mt-1">95</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-4 flex gap-2">
            <Button variant="outline" size="sm">
              Bulk Assign
            </Button>
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Link to="/compliance/escalation/pending">
              <Button variant="outline" size="sm">
                View Escalation Queue
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}