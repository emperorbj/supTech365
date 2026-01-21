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

interface CTR {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  assignedTo: string;
  age: number;
  ageUnit: "d";
  riskLevel?: "high" | "medium";
}

const mockCTRs: CTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0234",
    entityName: "Bank of M.",
    amount: "$62,500",
    transactionCount: 847,
    subject: "Sarah K.",
    assignedTo: "Me",
    age: 3,
    ageUnit: "d",
    riskLevel: "high",
  },
  {
    id: "2",
    referenceNumber: "FIA-0233",
    entityName: "First Intl",
    amount: "$45,200",
    transactionCount: 234,
    subject: "John M.",
    assignedTo: "Me",
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
    assignedTo: "John S.",
    age: 2,
    ageUnit: "d",
    riskLevel: "medium",
  },
];

export default function CTRPendingReview() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileText className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: "Pending Review" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Pending Review (25 CTRs)
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Assigned To" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="me">Me</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
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
                    <TableCell>{ctr.assignedTo}</TableCell>
                    <TableCell>{ctr.age}{ctr.ageUnit}</TableCell>
                    <TableCell>
                      {ctr.riskLevel === "high" && (
                        <Badge variant="destructive">🔴</Badge>
                      )}
                      {ctr.riskLevel === "medium" && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">🟡</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/compliance/ctr-review/${ctr.id}/review`}>
                        <Button size="sm">{ctr.assignedTo === "Me" ? "Review" : "View"}</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Assigned to Me</div>
              <div className="text-2xl font-semibold mt-1">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">High Priority</div>
              <div className="text-2xl font-semibold mt-1">5</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Overdue</div>
              <div className="text-2xl font-semibold mt-1 text-destructive">1</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}