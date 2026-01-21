import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Flag, RefreshCw, AlertTriangle, TrendingUp } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Escalation {
  id: string;
  referenceNumber: string;
  flaggedBy: string;
  subjectCount: number;
  primarySubject?: string;
  amount: string;
  transactionCount: number;
  flaggedDate: string;
  riskLevel: "high" | "medium";
}

const mockEscalations: Escalation[] = [
  {
    id: "1",
    referenceNumber: "FIA-0234",
    flaggedBy: "Jane Doe",
    subjectCount: 3,
    primarySubject: "S.K.",
    amount: "$62,500",
    transactionCount: 847,
    flaggedDate: "Jan 20 16:30",
    riskLevel: "high",
  },
  {
    id: "2",
    referenceNumber: "FIA-0223",
    flaggedBy: "John Smith",
    subjectCount: 5,
    amount: "$145,000",
    transactionCount: 234,
    flaggedDate: "Jan 19 14:15",
    riskLevel: "high",
  },
  {
    id: "3",
    referenceNumber: "FIA-0215",
    flaggedBy: "Mary J.",
    subjectCount: 2,
    amount: "$35,800",
    transactionCount: 12,
    flaggedDate: "Jan 18 11:45",
    riskLevel: "medium",
  },
];

interface EscalationQueueProps {
  defaultTab?: "pending" | "approved" | "rejected" | "all";
}

export default function EscalationQueue({ defaultTab = "pending" }: EscalationQueueProps) {
  const [tab, setTab] = useState(defaultTab);

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Flag className="h-5 w-5" /> },
    { label: "Escalation Queue", link: "/compliance/escalation/pending" },
    { label: tab === "pending" ? "Pending Approval" : tab === "approved" ? "Approved" : tab === "rejected" ? "Rejected" : "All" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              <Flag className="h-6 w-6 text-primary" />
              Escalation Approval Queue
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
            <TabsTrigger value="pending">Pending Approval (3)</TabsTrigger>
            <TabsTrigger value="approved">Approved (8)</TabsTrigger>
            <TabsTrigger value="rejected">Rejected (2)</TabsTrigger>
            <TabsTrigger value="all">All (13)</TabsTrigger>
          </TabsList>

          <TabsContent value={tab} className="space-y-6">
            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Flagged By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Officers</SelectItem>
                  <SelectItem value="jane">Jane Doe</SelectItem>
                  <SelectItem value="john">John Smith</SelectItem>
                  <SelectItem value="mary">Mary J.</SelectItem>
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
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="oldest">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="risk">Risk Level</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="ghost" size="sm">
                Clear
              </Button>
            </div>

            {/* Escalation Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="data-table-header">
                      <TableHead>Ref#</TableHead>
                      <TableHead>Flagged By</TableHead>
                      <TableHead>Subjects</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Trans</TableHead>
                      <TableHead>Flagged Date</TableHead>
                      <TableHead>Risk</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEscalations.map((esc) => (
                      <TableRow key={esc.id} className="data-table-row">
                        <TableCell className="font-mono font-medium text-primary">
                          {esc.referenceNumber}
                        </TableCell>
                        <TableCell>{esc.flaggedBy}</TableCell>
                        <TableCell>
                          {esc.subjectCount} {esc.primarySubject && `(${esc.primarySubject})`}
                        </TableCell>
                        <TableCell className="font-medium">{esc.amount}</TableCell>
                        <TableCell>{esc.transactionCount}</TableCell>
                        <TableCell className="text-muted-foreground">{esc.flaggedDate}</TableCell>
                        <TableCell>
                          {esc.riskLevel === "high" && (
                            <Badge variant="destructive" className="gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              High
                            </Badge>
                          )}
                          {esc.riskLevel === "medium" && (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
                              Medium
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                        <Link to={`/compliance/escalation/${esc.id}/escalate`}>
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                        </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Escalation Criteria Guidance */}
        <Card>
          <CardHeader>
            <CardTitle>Escalation Criteria Guidance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium mb-2">Consider APPROVAL if one or more apply:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Clear structuring pattern (multiple trans near threshold)</li>
                <li>Subject appears in 3+ CTRs within 90 days</li>
                <li>High-risk jurisdiction involvement</li>
                <li>Multiple red flags across transactions</li>
                <li>Transaction patterns inconsistent with stated business/employment</li>
                <li>Significant cash activity without clear legitimate source</li>
                <li>Links to subjects with prior STR/escalated CTR history</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Consider REJECTION if:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li>Single isolated transaction with weak justification</li>
                <li>Insufficient evidence of suspicious pattern</li>
                <li>Better handled through monitoring rather than full investigation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Escalation Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Escalation Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium mb-3">This Month (January 2026):</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Total CTRs Processed:</span>
                  <p className="font-semibold">145</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Escalations Flagged:</span>
                  <p className="font-semibold">13 (9.0%)</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Escalations Approved:</span>
                  <p className="font-semibold">8 (61.5% of flagged)</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Escalations Rejected:</span>
                  <p className="font-semibold">2 (15.4% of flagged)</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Pending Decision:</span>
                  <p className="font-semibold">3 (23.1% of flagged)</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="font-medium mb-3">Escalation Quality (Last 90 Days):</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Escalations → Cases Opened:</span>
                  <p className="font-semibold">18/25 (72%)</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Escalations → Intelligence Disseminated:</span>
                  <p className="font-semibold">12/25 (48%)</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Escalations → Closed Without Action:</span>
                  <p className="font-semibold">7/25 (28%)</p>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-2">
              View Detailed Performance Report →
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">Review Oldest First</Button>
              <Button variant="outline" size="sm">Review High Risk First</Button>
              <Button variant="outline" size="sm">Bulk Approve/Reject</Button>
              <Button variant="outline" size="sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                Export Escalation Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}