import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EscalationRateTrends() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Dashboards", link: "/compliance/dashboards/processing" },
    { label: "Escalation Rate Trends" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Escalation Rate Trends
          </h1>
          <Select defaultValue="90">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">Last 30 Days</SelectItem>
              <SelectItem value="90">Last 90 Days</SelectItem>
              <SelectItem value="180">Last 180 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Escalation Rate Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Total CTRs</div>
                <div className="text-3xl font-bold mt-1">450</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Escalated</div>
                <div className="text-3xl font-bold mt-1">36 (8%)</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Escalation Rate</div>
                <div className="text-3xl font-bold mt-1">8%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Target Range</div>
                <div className="text-3xl font-bold mt-1 flex items-center gap-2">
                  5-10%
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Escalation Rate Trend Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-center gap-2">
              {[6, 8, 10, 8, 7, 9, 8, 7, 8, 9, 8, 8, 8].map((value, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div
                    className="w-8 bg-blue-500 rounded-t"
                    style={{ height: `${(value / 12) * 200}px` }}
                  ></div>
                  <span className="text-xs text-muted-foreground">W{idx + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              ← Target Range (5-10%)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Escalation Decision Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Total Flagged:</span> 45 (10% of CTRs)
            </div>
            <div>
              <span className="font-medium">• Approved:</span> 36 (80% of flagged, 8% of CTRs)
            </div>
            <div>
              <span className="font-medium">• Rejected:</span> 9 (20% of flagged, 2% of CTRs)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Escalation Quality Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <span>Escalations → Cases Opened:</span>
              <span className="font-medium">26/36 (72%)</span>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex items-center gap-2">
              <span>Escalations → Intelligence Disseminated:</span>
              <span className="font-medium">18/36 (50%)</span>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <span>Escalations → Closed Without Action:</span>
              <span className="font-medium">10/36 (28%)</span>
            </div>
            <div className="pt-2 border-t">
              <span className="font-medium">Quality Score:</span> 83% (Target: 70%+)
              <CheckCircle2 className="h-4 w-4 text-green-600 ml-2 inline" />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">View Escalation Details</Button>
        </div>
      </div>
    </MainLayout>
  );
}