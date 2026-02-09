import { useState } from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { useOfficerWorkload } from "@/hooks/useTeamWorkload";
import { Users, RefreshCw, Download } from "lucide-react";

const MAX_BAR = 10;

export default function TeamWorkloadPage() {
  const [sortBy, setSortBy] = useState<"name" | "workload_asc" | "workload_desc">("workload_asc");
  const { data: workload = [], isLoading, refetch } = useOfficerWorkload();

  const sorted = [...workload].sort((a, b) => {
    if (sortBy === "name") return a.user_name.localeCompare(b.user_name);
    if (sortBy === "workload_asc") return a.workload_count - b.workload_count;
    return b.workload_count - a.workload_count;
  });

  const totalMembers = workload.length;
  const totalActive = workload.reduce((s, w) => s + w.workload_count, 0);
  const average = totalMembers ? (totalActive / totalMembers).toFixed(1) : "0";

  const breadcrumbItems = [
    { label: "Assignments", icon: <Users className="h-5 w-5" /> },
    { label: "Team Workload" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Team Workload
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => refetch()}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Total Team Members</p>
                <p className="text-2xl font-semibold">{totalMembers}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Active Assignments</p>
                <p className="text-2xl font-semibold">{totalActive}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average Workload</p>
                <p className="text-2xl font-semibold">{average}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span className="text-sm font-medium">Sort by:</span>
              <Select
                value={sortBy}
                onValueChange={(v) => setSortBy(v as typeof sortBy)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="workload_asc">Workload (low to high)</SelectItem>
                  <SelectItem value="workload_desc">Workload (high to low)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Team Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Workload</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : (
                    sorted.map((row) => (
                      <TableRow
                        key={row.user_id}
                        className="cursor-pointer hover:bg-muted/50"
                      >
                        <TableCell className="font-medium">{row.user_name}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3 max-w-[240px]">
                            <Progress
                              value={Math.min((row.workload_count / MAX_BAR) * 100, 100)}
                              className="h-2 flex-1"
                            />
                            <span className="text-sm font-medium w-6">{row.workload_count}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Legend: Bar shows current workload. Click a row to view that member&apos;s assignments.
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
