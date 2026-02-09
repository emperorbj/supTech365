import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TrendingUp, BarChart3 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProcessingMetrics() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <BarChart3 className="h-5 w-5" /> },
    { label: "Dashboards", link: "/compliance/dashboards/processing" },
    { label: "CTR Processing Metrics" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              CTR Processing Performance
            </h1>
          </div>
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

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total CTRs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">150</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Validated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">145</div>
              <div className="text-sm text-muted-foreground mt-1">(97%)</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Escalated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-muted-foreground mt-1">(8%)</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Processing Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2.3d</div>
            </CardContent>
          </Card>
        </div>

        {/* Processing Time Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Processing Time Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-primary h-20 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-primary h-16 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W2</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-primary h-14 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W3</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-primary h-12 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W4</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              35% improvement from baseline (3.5 days → 2.3 days)
            </p>
          </CardContent>
        </Card>

        {/* Escalation Rate Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Escalation Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-blue-500 h-8 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-blue-500 h-10 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W2</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-blue-500 h-12 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W3</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-blue-500 h-10 rounded-t"></div>
                <span className="text-xs text-muted-foreground">W4</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Current: 8% (Target range: 5-10%)
            </p>
          </CardContent>
        </Card>

        {/* Reporting Entity Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Reporting Entity Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="grid grid-cols-4 gap-4 p-4 items-center">
                <div className="font-medium">Entity</div>
                <div className="text-sm text-muted-foreground">Submissions</div>
                <div className="text-sm text-muted-foreground">Validation Pass</div>
                <div className="text-sm text-muted-foreground">Escalation Rate</div>
              </div>
              {[
                { entity: "Bank of Monrovia", submissions: 45, pass: "98%", escalation: "11%" },
                { entity: "First Intl Bank", submissions: 38, pass: "95%", escalation: "5%" },
                { entity: "Ecobank Liberia", submissions: 32, pass: "100%", escalation: "6%" },
                { entity: "UBA Liberia", submissions: 28, pass: "96%", escalation: "7%" },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-muted/50">
                  <div className="font-medium">{item.entity}</div>
                  <div>{item.submissions}</div>
                  <div>{item.pass}</div>
                  <div>{item.escalation}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}