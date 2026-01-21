import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BarChart3, CheckCircle2, AlertTriangle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ValidationQualityMetrics() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <BarChart3 className="h-5 w-5" /> },
    { label: "Dashboards", link: "/compliance/dashboards/processing" },
    { label: "Validation Quality Metrics" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Validation Quality Metrics
          </h1>
          <Select defaultValue="30">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
              <SelectItem value="90">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Validation Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Total Submitted</div>
                <div className="text-3xl font-bold mt-1">450</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Accepted</div>
                <div className="text-3xl font-bold mt-1">425 (94%)</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Returned</div>
                <div className="text-3xl font-bold mt-1">25 (6%)</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Rejection Rate</div>
                <div className="text-3xl font-bold mt-1">6%</div>
                <div className="text-xs text-muted-foreground mt-1">Target: &lt;5%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Validation Timeline Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Automated Validation:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Average Time:</span>
                  <span className="flex items-center gap-1">
                    8 seconds (Target: &lt;10s)
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Pass Rate:</span>
                  <span>89% (400/450)</span>
                </div>
                <div className="flex justify-between">
                  <span>Auto-Rejection Rate:</span>
                  <span>11% (50/450)</span>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Manual Validation:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Average Time:</span>
                  <span className="flex items-center gap-1">
                    1.8 days (Target: &lt;3 days)
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Acceptance Rate:</span>
                  <span>94% (425/450)</span>
                </div>
                <div className="flex justify-between">
                  <span>Return Rate:</span>
                  <span>6% (25/450)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Return/Rejection Reasons (Top 5)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>1. Missing mandatory fields: 12 reports (48%)</div>
            <div>2. Invalid data types: 6 reports (24%)</div>
            <div>3. Incomplete narrative: 4 reports (16%)</div>
            <div>4. Format errors: 2 reports (8%)</div>
            <div>5. Duplicate submission: 1 report (4%)</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Officer Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Officer</TableHead>
                  <TableHead>Validated</TableHead>
                  <TableHead>Avg Time</TableHead>
                  <TableHead>Return Rate</TableHead>
                  <TableHead>Quality</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Jane Doe</TableCell>
                  <TableCell>145</TableCell>
                  <TableCell>1.5 days</TableCell>
                  <TableCell>4%</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Excellent
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">John Smith</TableCell>
                  <TableCell>138</TableCell>
                  <TableCell>1.8 days</TableCell>
                  <TableCell>5%</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Good
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mary Johnson</TableCell>
                  <TableCell>142</TableCell>
                  <TableCell>2.1 days</TableCell>
                  <TableCell>8%</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-orange-600">
                      <AlertTriangle className="h-4 w-4" />
                      Needs Work
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">View Validation Details</Button>
        </div>
      </div>
    </MainLayout>
  );
}