import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AlertTriangle, RefreshCw, AlertCircle } from "lucide-react";
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

interface OverdueCTR {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  assignedTo: string;
  daysOverdue: number;
}

const mockOverdueCTRs: OverdueCTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0145",
    entityName: "Bank of M.",
    amount: "$78,500",
    transactionCount: 234,
    subject: "Sarah K.",
    assignedTo: "Jane Doe",
    daysOverdue: 12,
  },
  {
    id: "2",
    referenceNumber: "FIA-0138",
    entityName: "First Intl",
    amount: "$45,200",
    transactionCount: 3,
    subject: "John M.",
    assignedTo: "John S.",
    daysOverdue: 11,
  },
  {
    id: "3",
    referenceNumber: "FIA-0129",
    entityName: "Ecobank",
    amount: "$89,300",
    transactionCount: 12,
    subject: "Diamond Ltd",
    assignedTo: "Mary J.",
    daysOverdue: 10,
  },
];

export default function OverdueCTRs() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <AlertTriangle className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: "Overdue CTRs" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                Overdue CTRs (&gt;10 days) (3 items)
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
              <SelectValue placeholder="Assigned To" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Officers</SelectItem>
              <SelectItem value="jane">Jane Doe</SelectItem>
              <SelectItem value="john">John Smith</SelectItem>
              <SelectItem value="mary">Mary Johnson</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
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

          <Select defaultValue="most">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most">Most Overdue</SelectItem>
              <SelectItem value="least">Least Overdue</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="ghost" size="sm">
            Clear
          </Button>
        </div>

        {/* Overdue CTRs Table */}
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
                  <TableHead>Days Overdue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOverdueCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>{ctr.entityName}</TableCell>
                    <TableCell className="font-medium">{ctr.amount}</TableCell>
                    <TableCell>{ctr.transactionCount}</TableCell>
                    <TableCell>{ctr.subject}</TableCell>
                    <TableCell>{ctr.assignedTo}</TableCell>
                    <TableCell className="text-destructive font-semibold">
                      {ctr.daysOverdue} days
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Warning */}
        <Card className="border-destructive">
          <CardContent className="p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <span className="text-sm font-medium">
              All overdue items require immediate attention.
            </span>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-4 flex gap-2">
            <Button variant="outline" size="sm">
              Escalate to Supervisor
            </Button>
            <Button variant="outline" size="sm">
              Request Extension
            </Button>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}