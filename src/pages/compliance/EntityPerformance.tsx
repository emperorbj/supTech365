import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Building2, TrendingUp } from "lucide-react";
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
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Entity {
  name: string;
  submissions: number;
  passRate: string;
  returnRate: string;
  escalationRate: string;
}

const mockEntities: Entity[] = [
  { name: "Bank of Monrovia", submissions: 45, passRate: "98%", returnRate: "2%", escalationRate: "11%" },
  { name: "First Intl Bank", submissions: 38, passRate: "95%", returnRate: "5%", escalationRate: "5%" },
  { name: "Ecobank Liberia", submissions: 32, passRate: "100%", returnRate: "0%", escalationRate: "6%" },
  { name: "UBA Liberia", submissions: 28, passRate: "96%", returnRate: "4%", escalationRate: "7%" },
  { name: "Liberia Bank", submissions: 25, passRate: "92%", returnRate: "8%", escalationRate: "4%" },
];

export default function EntityPerformance() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Building2 className="h-5 w-5" /> },
    { label: "Dashboards", link: "/processing-metrics" },
    { label: "Reporting Entity Performance" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            Reporting Entity Performance
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

        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Entities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Entities</SelectItem>
              <SelectItem value="bom">Bank of Monrovia</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Submission Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="CTR">CTR</SelectItem>
              <SelectItem value="STR">STR</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="sm">Clear</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Overall Entity Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Entity</TableHead>
                  <TableHead>Submissions</TableHead>
                  <TableHead>Pass Rate</TableHead>
                  <TableHead>Return Rate</TableHead>
                  <TableHead>Escalation Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEntities.map((entity, idx) => (
                  <TableRow key={idx} className="data-table-row">
                    <TableCell className="font-medium">{entity.name}</TableCell>
                    <TableCell>{entity.submissions}</TableCell>
                    <TableCell>{entity.passRate}</TableCell>
                    <TableCell>{entity.returnRate}</TableCell>
                    <TableCell>{entity.escalationRate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1-25 of 46 entities
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Submission Quality Ranking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Top Performers (Pass Rate &gt;95%):</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Ecobank Liberia: 100% pass rate</li>
                <li>Bank of Monrovia: 98% pass rate</li>
                <li>UBA Liberia: 96% pass rate</li>
              </ol>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Needs Improvement (Pass Rate &lt;90%):</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>ABC Microfinance: 85% pass rate (8% return rate)</li>
                <li>XYZ Credit Union: 88% pass rate (10% return rate)</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submission Trends by Entity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Bank of Monrovia</span>
                <span className="font-medium">45 submissions</span>
              </div>
              <div className="w-full bg-muted rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>First Intl Bank</span>
                <span className="font-medium">38 submissions</span>
              </div>
              <div className="w-full bg-muted rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "84%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Escalation Rate by Entity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Bank of Monrovia</span>
                <span className="font-medium">11% (5/45)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-4">
                <div className="bg-orange-600 h-4 rounded-full" style={{ width: "55%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>First Intl Bank</span>
                <span className="font-medium">5% (2/38)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-4">
                <div className="bg-orange-600 h-4 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Note: Higher escalation rates may indicate better suspicious activity detection by the entity, not necessarily poor performance.
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">Entity Details</Button>
          <Button variant="outline" size="sm">Contact Entity</Button>
        </div>
      </div>
    </MainLayout>
  );
}