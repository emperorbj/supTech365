import { MainLayout } from "@/components/layout/MainLayout";
import { BarChart3, TrendingUp, AlertCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AlertPerformanceMetrics() {
  const { user } = useAuth();
  const isHeadOfCompliance = user?.role === "head_of_compliance";

  // Route protection: Only Head of Compliance can access
  if (!isHeadOfCompliance) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <Card className="max-w-md">
            <CardContent className="p-6 text-center space-y-4">
              <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
              <h2 className="text-xl font-semibold">Access Restricted</h2>
              <p className="text-muted-foreground">
                You do not have permission to view alert performance metrics. This page is restricted to Head of Compliance only.
              </p>
              <Button asChild variant="outline">
                <a href="/compliance/alerts/active">Return to Active Alerts</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <BarChart3 className="h-5 w-5" /> },
    { label: "Compliance Alerts", link: "/compliance/alerts/active" },
    { label: "Performance Metrics" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Alert Performance Metrics
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
            <CardTitle>Overall Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Total Alerts</div>
                <div className="text-3xl font-bold mt-1">45</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">True Positive</div>
                <div className="text-3xl font-bold mt-1">32 (71%)</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">False Positive</div>
                <div className="text-3xl font-bold mt-1">13 (29%)</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">True Positive Rate</div>
                <div className="text-3xl font-bold mt-1">71%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert Volume by Rule (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Structuring Pattern</span>
                <span className="font-medium">15 alerts</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Threshold Proximity</span>
                <span className="font-medium">18 alerts</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>High Frequency CTR</span>
                <span className="font-medium">8 alerts</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "40%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>High-Risk Jurisdiction</span>
                <span className="font-medium">4 alerts</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Large Business Cash</span>
                <span className="font-medium">3 alerts</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>True Positive Rate by Rule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>High-Risk Jurisdiction</span>
                <span className="font-medium">90% (4/4)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-600 h-4 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Structuring Pattern</span>
                <span className="font-medium">80% (12/15)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-600 h-4 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>High Frequency CTR</span>
                <span className="font-medium">75% (6/8)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-600 h-4 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert Trend (Last 4 Weeks)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Week 1:</span>
              <span>8 alerts | TP: 75% | FP: 25%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Week 2:</span>
              <span>12 alerts | TP: 67% | FP: 33%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Week 3:</span>
              <span>15 alerts | TP: 73% | FP: 27%</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span>Week 4:</span>
              <span>10 alerts | TP: 80% | FP: 20% ↑ Improving</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">Configure Rules</Button>
          <Button variant="outline" size="sm">View Rule Details</Button>
        </div>
      </div>
    </MainLayout>
  );
}