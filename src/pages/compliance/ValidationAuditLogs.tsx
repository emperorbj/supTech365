import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Shield, Eye, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AuditEntry {
  id: string;
  reference: string;
  decision: "Accept" | "Return" | "Reject";
  user: string;
  date: string;
}

const mockAudit: AuditEntry[] = [
  { id: "1", reference: "FIA-2026-001", decision: "Accept", user: "J.Smith", date: "02-03" },
  { id: "2", reference: "FIA-2026-002", decision: "Return", user: "M.Jones", date: "02-03" },
  { id: "3", reference: "FIA-2026-003", decision: "Reject", user: "J.Smith", date: "02-04" },
  { id: "4", reference: "FIA-2026-004", decision: "Accept", user: "K.Brown", date: "02-04" },
];

export default function ValidationAuditLogs() {
  const [decisionFilter, setDecisionFilter] = useState<string>("all");
  const [page, setPage] = useState(1);

  const breadcrumbItems = [
    { label: "Compliance", href: "/compliance/validation" },
    { label: "Validation Audit Logs", href: "/compliance/validation-audit-logs" },
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="h-6 w-6" />
          Validation Audit Logs
        </h1>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 mb-4">
              <Select value={decisionFilter} onValueChange={setDecisionFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Decision" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Decisions</SelectItem>
                  <SelectItem value="Accept">Accept</SelectItem>
                  <SelectItem value="Return">Return</SelectItem>
                  <SelectItem value="Reject">Reject</SelectItem>
                </SelectContent>
              </Select>
              <Input type="date" className="w-[180px]" placeholder="Date From" />
              <Input type="date" className="w-[180px]" placeholder="Date To" />
              <Input placeholder="Search by reference..." className="max-w-xs" />
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference</TableHead>
                  <TableHead>Decision</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-24">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAudit.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">{entry.reference}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          entry.decision === "Accept"
                            ? "default"
                            : entry.decision === "Return"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {entry.decision}
                      </Badge>
                    </TableCell>
                    <TableCell>{entry.user}</TableCell>
                    <TableCell>{entry.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing 1-{mockAudit.length} of {mockAudit.length}
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
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
