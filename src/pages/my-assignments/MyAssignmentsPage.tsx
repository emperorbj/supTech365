import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { useMyAssignments } from "@/hooks/useMyAssignments";
import { MyWorkloadCard } from "@/components/assignment/MyWorkloadCard";
import { DeadlineBadge } from "@/components/assignment/DeadlineBadge";
import type { AssignmentStatus } from "@/types/assignment";
import { Inbox, RefreshCw, Search } from "lucide-react";

export default function MyAssignmentsPage() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<AssignmentStatus | "all">("all");
  const [search, setSearch] = useState("");

  const { data, isLoading, refetch } = useMyAssignments({
    status: statusFilter === "all" ? undefined : statusFilter,
    search: search || undefined,
    page: 1,
    page_size: 20,
  });

  const items = data?.items ?? [];
  const total = data?.total ?? 0;

  const breadcrumbItems = [
    { label: "My Assignments", icon: <Inbox className="h-5 w-5" /> },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Inbox className="h-6 w-6 text-primary" />
            My Assignments
          </h1>
          <Button variant="outline" size="sm" onClick={() => refetch()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <MyWorkloadCard />

        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Select
                value={statusFilter}
                onValueChange={(v) => setStatusFilter(v as AssignmentStatus | "all")}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by reference..."
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
                    <TableHead>Reference</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : items.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                        No assignments found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    items.map((row) => {
                      const isDueSoon =
                        row.status === "active" &&
                        new Date(row.deadline).getTime() - Date.now() < 3 * 24 * 60 * 60 * 1000;
                      return (
                        <TableRow
                          key={row.id}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() =>
                            navigate(
                              row.workflow_type === "compliance"
                                ? `/compliance/validation-queue/${row.report_id}`
                                : `/analysis-queue`
                            )
                          }
                        >
                          <TableCell className="font-medium">{row.report_reference}</TableCell>
                          <TableCell>{row.report_type}</TableCell>
                          <TableCell>
                            <DeadlineBadge deadline={row.deadline} />
                          </TableCell>
                          <TableCell>
                            <span
                              className={
                                row.status === "completed"
                                  ? "text-workflow-validated"
                                  : isDueSoon
                                    ? "text-yellow-600 font-medium"
                                    : "text-muted-foreground"
                              }
                            >
                              {row.status === "active" && isDueSoon ? "Due soon" : row.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Showing 1-{items.length} of {total}
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
