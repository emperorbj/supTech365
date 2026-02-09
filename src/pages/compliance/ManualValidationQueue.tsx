import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Inbox, RefreshCw, Search, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QueueItem {
  id: string;
  reference: string;
  type: "CTR" | "STR";
  entityName: string;
  submittedDate: string;
}

const mockQueue: QueueItem[] = [
  { id: "1", reference: "FIA-2026-0001", type: "CTR", entityName: "First Bank", submittedDate: "2026-02-03" },
  { id: "2", reference: "FIA-2026-0002", type: "STR", entityName: "Unity Corp", submittedDate: "2026-02-03" },
  { id: "3", reference: "FIA-2026-0003", type: "CTR", entityName: "Trust Bank", submittedDate: "2026-02-03" },
  { id: "4", reference: "FIA-2026-0004", type: "STR", entityName: "First Bank", submittedDate: "2026-02-04" },
  { id: "5", reference: "FIA-2026-0005", type: "CTR", entityName: "Metro Bank", submittedDate: "2026-02-04" },
];

export default function ManualValidationQueue() {
  const navigate = useNavigate();
  const [reportTypeFilter, setReportTypeFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const total = mockQueue.length;

  const breadcrumbItems = [
    { label: "Compliance", href: "/compliance/validation" },
    { label: "Manual Validation Queue", href: "/compliance/validation-queue" },
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Inbox className="h-6 w-6" />
            Manual Validation Queue
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <p className="text-muted-foreground">Pending Reviews: {total}</p>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 mb-4">
              <Select value={reportTypeFilter} onValueChange={setReportTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="CTR">CTR</SelectItem>
                  <SelectItem value="STR">STR</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by reference or entity..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entity</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-24">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockQueue.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.reference}</TableCell>
                    <TableCell>
                      <Badge variant={item.type === "CTR" ? "default" : "secondary"}>
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.entityName}</TableCell>
                    <TableCell>{item.submittedDate}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(`/compliance/validation-queue/${item.id}`)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing 1-{mockQueue.length} of {total}
              </p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage((p) => p + 1); }} />
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
