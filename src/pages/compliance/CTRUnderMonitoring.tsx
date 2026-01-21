import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Eye, RefreshCw } from "lucide-react";
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

interface MonitoringCTR {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  monitorStart: string;
  plan: string;
  status: string;
}

const mockMonitoringCTRs: MonitoringCTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0205",
    entityName: "Bank of M.",
    amount: "$25,500",
    transactionCount: 5,
    subject: "ABC Corp",
    monitorStart: "Jan 10",
    plan: "90d",
    status: "Active",
  },
  {
    id: "2",
    referenceNumber: "FIA-0202",
    entityName: "First Intl",
    amount: "$18,900",
    transactionCount: 3,
    subject: "John M.",
    monitorStart: "Jan 8",
    plan: "60d",
    status: "Active",
  },
  {
    id: "3",
    referenceNumber: "FIA-0198",
    entityName: "Ecobank",
    amount: "$22,300",
    transactionCount: 4,
    subject: "Sarah K.",
    monitorStart: "Jan 5",
    plan: "30d",
    status: "Active",
  },
];

export default function CTRUnderMonitoring() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Eye className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: "Under Monitoring" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Eye className="h-6 w-6 text-primary" />
            CTRs Under Monitoring (10 items)
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Monitoring Started" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Entity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Entities</SelectItem>
              <SelectItem value="bom">Bank of Monrovia</SelectItem>
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
                  <TableHead>Monitor Start</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMonitoringCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>{ctr.entityName}</TableCell>
                    <TableCell className="font-medium">{ctr.amount}</TableCell>
                    <TableCell>{ctr.transactionCount}</TableCell>
                    <TableCell>{ctr.subject}</TableCell>
                    <TableCell className="text-muted-foreground">{ctr.monitorStart}</TableCell>
                    <TableCell>{ctr.plan}</TableCell>
                    <TableCell>
                      <span className="text-sm">{ctr.status}</span>
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
              CTRs placed under monitoring for pattern tracking without immediate escalation. Can be escalated later if patterns develop.
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">Review Monitoring Status</Button>
          <Button variant="outline" size="sm">Reassess for Escalation</Button>
        </div>
      </div>
    </MainLayout>
  );
}