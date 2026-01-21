import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TrendingUp, RefreshCw } from "lucide-react";
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

interface EscalatedCTR {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  escalatedDate: string;
  assignedAnalyst: string;
  status: "pending" | "analyze";
}

const mockEscalatedCTRs: EscalatedCTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0220",
    entityName: "Bank of M.",
    amount: "$125,000",
    transactionCount: 45,
    subject: "ABC Corp",
    escalatedDate: "Jan 18",
    assignedAnalyst: "John A.",
    status: "analyze",
  },
  {
    id: "2",
    referenceNumber: "FIA-0215",
    entityName: "First Intl",
    amount: "$145,000",
    transactionCount: 234,
    subject: "John M.",
    escalatedDate: "Jan 19",
    assignedAnalyst: "Mary B.",
    status: "analyze",
  },
  {
    id: "3",
    referenceNumber: "FIA-0208",
    entityName: "Ecobank",
    amount: "$78,500",
    transactionCount: 12,
    subject: "Sarah K.",
    escalatedDate: "Jan 15",
    assignedAnalyst: "Tom C.",
    status: "pending",
  },
];

export default function CTREscalated() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: "Escalated" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Escalated CTRs (12 items - Now in Analysis Workflow)
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Escalated Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Assigned Analyst" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Analysts</SelectItem>
              <SelectItem value="john">John A.</SelectItem>
              <SelectItem value="mary">Mary B.</SelectItem>
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
                  <TableHead>Escalated</TableHead>
                  <TableHead>Analyst</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEscalatedCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>{ctr.entityName}</TableCell>
                    <TableCell className="font-medium">{ctr.amount}</TableCell>
                    <TableCell>{ctr.transactionCount}</TableCell>
                    <TableCell>{ctr.subject}</TableCell>
                    <TableCell className="text-muted-foreground">{ctr.escalatedDate}</TableCell>
                    <TableCell>{ctr.assignedAnalyst}</TableCell>
                    <TableCell>
                      <span className="text-sm">{ctr.status === "analyze" ? "Analyze" : "Pending"}</span>
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
              Note: Escalated CTRs are now part of Analysis workflow. View in Analysis Workspace for detailed investigation status.
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">View in Analysis Workspace</Button>
          <Button variant="outline" size="sm">Escalation History</Button>
        </div>
      </div>
    </MainLayout>
  );
}