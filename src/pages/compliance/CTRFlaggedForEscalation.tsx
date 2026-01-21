import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Flag, RefreshCw, AlertTriangle } from "lucide-react";
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

interface FlaggedCTR {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  flaggedBy: string;
  riskLevel: "high" | "medium";
  flaggedDate: string;
}

const mockFlaggedCTRs: FlaggedCTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0234",
    entityName: "Bank of M.",
    amount: "$62,500",
    transactionCount: 847,
    subject: "Sarah K.",
    flaggedBy: "Jane Doe",
    riskLevel: "high",
    flaggedDate: "Jan 20",
  },
  {
    id: "2",
    referenceNumber: "FIA-0223",
    entityName: "First Intl",
    amount: "$145,000",
    transactionCount: 234,
    subject: "John M.",
    flaggedBy: "John Smith",
    riskLevel: "high",
    flaggedDate: "Jan 19",
  },
  {
    id: "3",
    referenceNumber: "FIA-0215",
    entityName: "Ecobank",
    amount: "$35,800",
    transactionCount: 12,
    subject: "Diamond",
    flaggedBy: "Mary J.",
    riskLevel: "medium",
    flaggedDate: "Jan 18",
  },
];

export default function CTRFlaggedForEscalation() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Flag className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: "Flagged for Escalation" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Flag className="h-6 w-6 text-primary" />
            Flagged for Escalation (8 CTRs)
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Flagged By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Officers</SelectItem>
              <SelectItem value="jane">Jane Doe</SelectItem>
              <SelectItem value="john">John Smith</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="high">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High Risk First</SelectItem>
              <SelectItem value="date">Most Recent</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="sm">Clear</Button>
        </div>

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
                  <TableHead>Flagged By</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockFlaggedCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>{ctr.entityName}</TableCell>
                    <TableCell className="font-medium">{ctr.amount}</TableCell>
                    <TableCell>{ctr.transactionCount}</TableCell>
                    <TableCell>{ctr.subject}</TableCell>
                    <TableCell>{ctr.flaggedBy}</TableCell>
                    <TableCell>
                      {ctr.riskLevel === "high" && (
                        <Badge variant="destructive">🔴</Badge>
                      )}
                      {ctr.riskLevel === "medium" && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">🟡</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{ctr.flaggedDate}</TableCell>
                    <TableCell className="text-right">
                      <Link to={`/compliance/escalation/${ctr.id}/escalate`}>
                        <Button size="sm" variant="outline">Review</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Status: Awaiting Head of Compliance approval
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Link to="/compliance/escalation/pending">
            <Button variant="outline" size="sm">View Escalation Queue</Button>
          </Link>
          <Button variant="outline" size="sm">Review Justifications</Button>
        </div>
      </div>
    </MainLayout>
  );
}