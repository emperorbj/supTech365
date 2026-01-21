import { useMemo, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
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
import { Link } from "react-router-dom";

interface Alert {
  id: number;
  priority: "critical" | "high" | "medium" | "low";
  rule: string;
  report: string;
  subject: string;
  generated: string;
  assignedOfficerId?: string;
  ctrReport?: {
    assignedTo?: string;
  };
}

export default function ComplianceAlerts() {
  const { user } = useAuth();
  const isHeadOfCompliance = user?.role === "head_of_compliance";
  const [selectedOfficer, setSelectedOfficer] = useState("all");

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <AlertTriangle className="h-5 w-5" /> },
    { label: "Compliance Alerts", link: "/compliance/alerts/active" },
    { label: "Active Alerts" },
  ];

  // Mock data with assignment info
  const allAlerts: Alert[] = [
    { id: 1, priority: "critical", rule: "Structuring Pattern", report: "FIA-0156", subject: "Sarah K.", generated: "2h ago", assignedOfficerId: "user-001", ctrReport: { assignedTo: "Jane Doe" } },
    { id: 2, priority: "high", rule: "Threshold Proximity", report: "FIA-0178", subject: "Diamond Ltd", generated: "5h ago", assignedOfficerId: "user-002", ctrReport: { assignedTo: "John Smith" } },
    { id: 3, priority: "medium", rule: "High Frequency CTR", report: "FIA-0189", subject: "John M.", generated: "1d ago", assignedOfficerId: "user-001", ctrReport: { assignedTo: "Jane Doe" } },
    { id: 4, priority: "high", rule: "High-Risk Jurisdiction", report: "FIA-0192", subject: "ABC Corp", generated: "1d ago", assignedOfficerId: "user-003", ctrReport: { assignedTo: "Mary Johnson" } },
  ];

  // Filter alerts based on role
  const filteredAlerts = useMemo(() => {
    let alerts = allAlerts;

    if (!isHeadOfCompliance) {
      // Compliance Officer: only show alerts for their assigned CTRs/reports
      alerts = allAlerts.filter(alert => 
        alert.assignedOfficerId === user?.id || 
        alert.ctrReport?.assignedTo === user?.name
      );
    } else {
      // Head of Compliance: can filter by officer
      if (selectedOfficer !== "all") {
        alerts = allAlerts.filter(alert => 
          alert.assignedOfficerId === selectedOfficer
        );
      }
    }

    return alerts;
  }, [allAlerts, user, isHeadOfCompliance, selectedOfficer]);

  const alerts = filteredAlerts;

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "critical":
        return <Badge variant="destructive">CRIT</Badge>;
      case "high":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">HIGH</Badge>;
      case "medium":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">MED</Badge>;
      default:
        return <Badge variant="outline">LOW</Badge>;
    }
  };

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Active Compliance Alerts ({alerts.length} High/Critical)
              {!isHeadOfCompliance && (
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  (Your assigned alerts only)
                </span>
              )}
            </h1>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {isHeadOfCompliance && (
            <Select value={selectedOfficer} onValueChange={setSelectedOfficer}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by Officer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Officers</SelectItem>
                <SelectItem value="user-001">Jane Doe</SelectItem>
                <SelectItem value="user-002">John Smith</SelectItem>
                <SelectItem value="user-003">Mary Johnson</SelectItem>
              </SelectContent>
            </Select>
          )}

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Rule Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="structuring">Structuring Pattern</SelectItem>
              <SelectItem value="threshold">Threshold Proximity</SelectItem>
              <SelectItem value="frequency">High Frequency</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="ghost" size="sm">
            Clear
          </Button>
        </div>

        {/* Alerts Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Priority</TableHead>
                  <TableHead>Rule</TableHead>
                  <TableHead>Report</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Generated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow key={alert.id} className="data-table-row">
                    <TableCell>{getPriorityBadge(alert.priority)}</TableCell>
                    <TableCell className="font-medium">{alert.rule}</TableCell>
                    <TableCell className="font-mono text-primary">{alert.report}</TableCell>
                    <TableCell>{alert.subject}</TableCell>
                    <TableCell className="text-muted-foreground">{alert.generated}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View Report</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Alert Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Total Alerts (30 days):</span>
                <p className="font-semibold text-lg">45</p>
              </div>
              <div>
                <span className="text-muted-foreground">True Positive Rate:</span>
                <p className="font-semibold text-lg">72% (32/45 confirmed valid)</p>
              </div>
              <div>
                <span className="text-muted-foreground">False Positive Rate:</span>
                <p className="font-semibold text-lg">28% (13/45 marked false)</p>
              </div>
              <div>
                <span className="text-muted-foreground">Most Triggered Rule:</span>
                <p className="font-semibold text-lg">"Threshold Proximity Detection" (18 alerts)</p>
              </div>
            </div>
            {isHeadOfCompliance && (
              <Link to="/compliance/alerts/performance">
                <Button variant="outline" size="sm">
                  View Detailed Performance →
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}