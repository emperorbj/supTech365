import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AlertTriangle, RefreshCw, CheckCircle2 } from "lucide-react";
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
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Rule {
  name: string;
  alerts: number;
  tpRate: number;
  fpRate: number;
  status: string;
}

interface Alert {
  id: number;
  priority: "critical" | "high";
  report: string;
  subject: string;
  amount: string;
  generated: string;
  status: string;
}

const mockRules: Rule[] = [
  { name: "Structuring Pattern Detection", alerts: 15, tpRate: 80, fpRate: 20, status: "Active" },
  { name: "Threshold Proximity Detection", alerts: 18, tpRate: 65, fpRate: 35, status: "Active" },
  { name: "High Frequency CTR Detection", alerts: 8, tpRate: 75, fpRate: 25, status: "Active" },
  { name: "High-Risk Jurisdiction", alerts: 4, tpRate: 90, fpRate: 10, status: "Active" },
  { name: "Large Business Cash Activity", alerts: 3, tpRate: 67, fpRate: 33, status: "Active" },
];

const mockAlerts: Alert[] = [
  { id: 1, priority: "critical", report: "FIA-0156", subject: "Sarah K.", amount: "$58,500", generated: "2h ago", status: "Open" },
  { id: 2, priority: "high", report: "FIA-0178", subject: "John M.", amount: "$45,200", generated: "5h ago", status: "Open" },
  { id: 3, priority: "high", report: "FIA-0189", subject: "Diamond Ltd", amount: "$35,800", generated: "1d ago", status: "Open" },
];

export default function AlertRuleType() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <AlertTriangle className="h-5 w-5" /> },
    { label: "Compliance Alerts", link: "/compliance-alerts" },
    { label: "By Rule Type" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Compliance Alerts by Rule Type
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Rule Type Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Rules</SelectItem>
              <SelectItem value="structuring">Structuring Pattern Detection</SelectItem>
              <SelectItem value="threshold">Threshold Proximity Detection</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>RULE PERFORMANCE SUMMARY</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Rule Name</TableHead>
                  <TableHead>Alerts</TableHead>
                  <TableHead>TP Rate</TableHead>
                  <TableHead>FP Rate</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockRules.map((rule, idx) => (
                  <TableRow key={idx} className="data-table-row">
                    <TableCell className="font-medium">{rule.name}</TableCell>
                    <TableCell>{rule.alerts}</TableCell>
                    <TableCell>{rule.tpRate}%</TableCell>
                    <TableCell>{rule.fpRate}%</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        {rule.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current View: Structuring Pattern Detection (15 alerts)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Priority</TableHead>
                  <TableHead>Report</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Generated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAlerts.map((alert) => (
                  <TableRow key={alert.id} className="data-table-row">
                    <TableCell>
                      {alert.priority === "critical" && (
                        <Badge variant="destructive">CRIT</Badge>
                      )}
                      {alert.priority === "high" && (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">HIGH</Badge>
                      )}
                    </TableCell>
                    <TableCell className="font-mono text-primary">{alert.report}</TableCell>
                    <TableCell>{alert.subject}</TableCell>
                    <TableCell className="font-medium">{alert.amount}</TableCell>
                    <TableCell className="text-muted-foreground">{alert.generated}</TableCell>
                    <TableCell>{alert.status}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View Report</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1-15 of 15 alerts
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

        <div className="flex gap-2">
          <Button variant="outline" size="sm">View All Alerts</Button>
          <Button variant="outline" size="sm">Rule Performance Details</Button>
        </div>
      </div>
    </MainLayout>
  );
}