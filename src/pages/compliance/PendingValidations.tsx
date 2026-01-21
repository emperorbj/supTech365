import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileCheck, RefreshCw, UserPlus } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { ReportTypeBadge } from "@/components/ui/StatusBadge";
import { Input } from "@/components/ui/input";

interface PendingValidation {
  id: string;
  referenceNumber: string;
  type: "CTR" | "STR";
  entityName: string;
  transactionCount: number;
  submittedDate: string;
  age: string;
  overdue?: boolean;
}

const mockPendingValidations: PendingValidation[] = [
  {
    id: "FIA-2026-0231",
    referenceNumber: "FIA-2026-0231",
    type: "CTR",
    entityName: "UBA Liberia",
    transactionCount: 5,
    submittedDate: "2026-01-17",
    age: "4d",
    overdue: true,
  },
  {
    id: "FIA-2026-0235",
    referenceNumber: "FIA-2026-0235",
    type: "CTR",
    entityName: "Liberia Bank",
    transactionCount: 12,
    submittedDate: "2026-01-20",
    age: "1d",
  },
  {
    id: "FIA-2026-0236",
    referenceNumber: "FIA-2026-0236",
    type: "STR",
    entityName: "ABC Microfinance",
    transactionCount: 3,
    submittedDate: "2026-01-20",
    age: "1d",
  },
];

export default function PendingValidations() {
  const [selected, setSelected] = useState<string[]>([]);

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Validation Queue", link: "/compliance/validation" },
    { label: "Pending Manual Validation" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-primary" />
            Pending Manual Validation (Unassigned)
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Report Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="CTR">CTR</SelectItem>
              <SelectItem value="STR">STR</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Entity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Entities</SelectItem>
              <SelectItem value="bank_of_monrovia">Bank of Monrovia</SelectItem>
              <SelectItem value="uba">UBA Liberia</SelectItem>
              <SelectItem value="ecobank">Ecobank Liberia</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="sm">
            Clear
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Unassigned Pool ({mockPendingValidations.length} items)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selected.length === mockPendingValidations.length}
                      onCheckedChange={(checked) => {
                        if (checked) setSelected(mockPendingValidations.map(v => v.id));
                        else setSelected([]);
                      }}
                    />
                  </TableHead>
                  <TableHead>Ref #</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entity</TableHead>
                  <TableHead>Trans</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Age</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPendingValidations.map((v) => (
                  <TableRow key={v.id} className="data-table-row">
                    <TableCell>
                      <Checkbox
                        checked={selected.includes(v.id)}
                        onCheckedChange={(checked) => {
                          if (checked) setSelected([...selected, v.id]);
                          else setSelected(selected.filter(id => id !== v.id));
                        }}
                      />
                    </TableCell>
                    <TableCell className="font-mono font-medium text-primary">{v.referenceNumber}</TableCell>
                    <TableCell>
                      <ReportTypeBadge type={v.type} />
                    </TableCell>
                    <TableCell>{v.entityName}</TableCell>
                    <TableCell>{v.transactionCount}</TableCell>
                    <TableCell className="text-muted-foreground">{v.submittedDate}</TableCell>
                    <TableCell className={v.overdue ? "text-destructive font-medium" : ""}>
                      {v.age}{v.overdue ? " ⚠" : ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setSelected(mockPendingValidations.map(v => v.id))}>
                  Select All
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSelected([])}>
                  Deselect All
                </Button>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[170px]">
                    <SelectValue placeholder="Assign to" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jane">Jane Doe</SelectItem>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="mary">Mary Johnson</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="date" className="w-[160px]" defaultValue="2026-01-25" />
                <Button size="sm" disabled={selected.length === 0}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Assign Selected
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}

