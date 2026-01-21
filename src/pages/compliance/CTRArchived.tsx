import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Archive, RefreshCw } from "lucide-react";
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
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface ArchivedCTR {
  id: string;
  referenceNumber: string;
  entityName: string;
  amount: string;
  transactionCount: number;
  subject: string;
  archivedBy: string;
  archivedDate: string;
  reason: string;
}

const mockArchivedCTRs: ArchivedCTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0195",
    entityName: "Bank of M.",
    amount: "$12,500",
    transactionCount: 1,
    subject: "ABC Corp",
    archivedBy: "Jane Doe",
    archivedDate: "Jan 15",
    reason: "Normal",
  },
  {
    id: "2",
    referenceNumber: "FIA-0194",
    entityName: "First Intl",
    amount: "$8,900",
    transactionCount: 1,
    subject: "John M.",
    archivedBy: "John Smith",
    archivedDate: "Jan 14",
    reason: "Normal",
  },
  {
    id: "3",
    referenceNumber: "FIA-0193",
    entityName: "Ecobank",
    amount: "$15,200",
    transactionCount: 2,
    subject: "Sarah K.",
    archivedBy: "Mary J.",
    archivedDate: "Jan 13",
    reason: "Normal",
  },
];

export default function CTRArchived() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Archive className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: "Archived" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Archive className="h-6 w-6 text-primary" />
            Archived CTRs (95 items)
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Archived Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Archived By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Officers</SelectItem>
              <SelectItem value="jane">Jane Doe</SelectItem>
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
                  <TableHead>Archived By</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockArchivedCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>{ctr.entityName}</TableCell>
                    <TableCell className="font-medium">{ctr.amount}</TableCell>
                    <TableCell>{ctr.transactionCount}</TableCell>
                    <TableCell>{ctr.subject}</TableCell>
                    <TableCell>{ctr.archivedBy}</TableCell>
                    <TableCell className="text-muted-foreground">{ctr.archivedDate}</TableCell>
                    <TableCell>{ctr.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1-25 of 95 items
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
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Archived CTRs have been reviewed and determined to require no further action.
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">Export Archived Report</Button>
          <Button variant="outline" size="sm">View Archive Details</Button>
        </div>
      </div>
    </MainLayout>
  );
}