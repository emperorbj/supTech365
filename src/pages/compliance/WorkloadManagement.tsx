import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Users, RefreshCw, TrendingUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkloadManagement() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Users className="h-5 w-5" /> },
    { label: "Workload Management" },
  ];

  const validationWorkload = [
    { officer: "Jane Doe", assigned: 25, completed: 20, pending: 5, overdue: 1, avgTime: "1.8 days" },
    { officer: "John Smith", assigned: 22, completed: 18, pending: 4, overdue: 0, avgTime: "1.5 days" },
    { officer: "Mary Johnson", assigned: 28, completed: 23, pending: 5, overdue: 2, avgTime: "2.1 days" },
  ];

  const ctrWorkload = [
    { officer: "Jane Doe", assigned: 15, reviewed: 12, flagged: 2, archived: 10, avgTime: "2.3 days" },
    { officer: "John Smith", assigned: 18, reviewed: 14, flagged: 1, archived: 13, avgTime: "1.9 days" },
    { officer: "Mary Johnson", assigned: 12, reviewed: 10, flagged: 3, archived: 7, avgTime: "2.5 days" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Team Workload Overview
            </h1>
          </div>
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Validation Queue Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Validation Queue Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Officer</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Completed</TableHead>
                  <TableHead>Pending</TableHead>
                  <TableHead>Overdue</TableHead>
                  <TableHead>Avg Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {validationWorkload.map((workload, idx) => (
                  <TableRow key={idx} className="data-table-row">
                    <TableCell className="font-medium">{workload.officer}</TableCell>
                    <TableCell>{workload.assigned}</TableCell>
                    <TableCell>{workload.completed}</TableCell>
                    <TableCell>{workload.pending}</TableCell>
                    <TableCell>
                      <span className={workload.overdue > 0 ? "text-destructive font-medium" : ""}>
                        {workload.overdue}
                      </span>
                    </TableCell>
                    <TableCell>{workload.avgTime}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="data-table-row font-semibold bg-muted/50">
                  <TableCell>TOTAL</TableCell>
                  <TableCell>75</TableCell>
                  <TableCell>61</TableCell>
                  <TableCell>14</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>1.8 days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* CTR Review Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>CTR Review Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Officer</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Reviewed</TableHead>
                  <TableHead>Flagged</TableHead>
                  <TableHead>Archived</TableHead>
                  <TableHead>Avg Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ctrWorkload.map((workload, idx) => (
                  <TableRow key={idx} className="data-table-row">
                    <TableCell className="font-medium">{workload.officer}</TableCell>
                    <TableCell>{workload.assigned}</TableCell>
                    <TableCell>{workload.reviewed}</TableCell>
                    <TableCell>{workload.flagged}</TableCell>
                    <TableCell>{workload.archived}</TableCell>
                    <TableCell>{workload.avgTime}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="data-table-row font-semibold bg-muted/50">
                  <TableCell>TOTAL</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>36</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>2.2 days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">Assign New CTRs</Button>
              <Button variant="outline" size="sm">Reassign Workload</Button>
              <Button variant="outline" size="sm">View Overdue Items</Button>
              <Button variant="outline" size="sm">Auto-Assign (Lowest Workload)</Button>
            </div>
          </CardContent>
        </Card>

        {/* Escalation Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Escalation Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">This Month:</span> 6 escalations approved (8.5% escalation rate)
              </p>
              <p>
                <span className="font-medium">Quality Score:</span> 83% (5/6 escalations resulted in cases opened)
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                View Escalation Details →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}