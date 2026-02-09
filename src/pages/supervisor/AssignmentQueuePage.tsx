import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAssignmentQueue } from "@/hooks/useAssignmentQueue";
import { CreateAssignmentModal } from "@/components/assignment/CreateAssignmentModal";
import type { PendingAssignmentReport } from "@/types/assignment";
import type { ReportTypeAssignment } from "@/types/assignment";
import { Inbox, RefreshCw, UserPlus, Search } from "lucide-react";

export default function AssignmentQueuePage() {
  const [reportType, setReportType] = useState<ReportTypeAssignment | "all">("all");
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [reportToAssign, setReportToAssign] = useState<PendingAssignmentReport | null>(null);

  const filters = {
    report_type: reportType === "all" ? undefined : reportType,
    search: search || undefined,
    page: 1,
    page_size: 20,
  };

  const { data, isLoading, refetch } = useAssignmentQueue(filters);
  const items = data?.items ?? [];
  const total = data?.total ?? 0;

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === items.length) setSelectedIds([]);
    else setSelectedIds(items.map((r) => r.id));
  };

  const openAssignModal = (report: PendingAssignmentReport) => {
    setReportToAssign(report);
    setModalOpen(true);
  };

  const breadcrumbItems = [
    { label: "Assignments", icon: <Inbox className="h-5 w-5" /> },
    { label: "Assignment Queue" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Assignment Queue</h1>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Pending Assignment: {total}
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Select
                value={reportType}
                onValueChange={(v) => setReportType(v as ReportTypeAssignment | "all")}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="CTR">CTR</SelectItem>
                  <SelectItem value="STR">STR</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by reference or entity..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-10">
                      <Checkbox
                        checked={items.length > 0 && selectedIds.length === items.length}
                        onCheckedChange={toggleSelectAll}
                        aria-label="Select all"
                      />
                    </TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Entity</TableHead>
                    <TableHead>Validated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : (
                    items.map((row) => (
                      <TableRow
                        key={row.id}
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => openAssignModal(row)}
                      >
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          <Checkbox
                            checked={selectedIds.includes(row.id)}
                            onCheckedChange={() => toggleSelect(row.id)}
                            aria-label={`Select ${row.reference}`}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{row.reference}</TableCell>
                        <TableCell>{row.report_type}</TableCell>
                        <TableCell>{row.entity_name}</TableCell>
                        <TableCell>{row.validated_at}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <Button
                disabled={selectedIds.length === 0}
                onClick={() => {
                  const first = items.find((r) => selectedIds.includes(r.id));
                  if (first) openAssignModal(first);
                }}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Assign Selected {selectedIds.length > 0 ? `(${selectedIds.length})` : ""}
              </Button>
              <p className="text-sm text-muted-foreground">
                Showing 1-{items.length} of {total}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <CreateAssignmentModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setReportToAssign(null);
          setSelectedIds([]);
          refetch();
        }}
        report={reportToAssign}
        onSuccess={() => refetch()}
      />
    </MainLayout>
  );
}
