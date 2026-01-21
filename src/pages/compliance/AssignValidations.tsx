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
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ReportTypeBadge } from "@/components/ui/StatusBadge";

interface ReassignValidation {
  id: string;
  referenceNumber: string;
  type: "CTR" | "STR";
  entityName: string;
  currentAssignee: string;
  status: "Pending" | "In Progress";
  age: string;
}

const mockReassignValidations: ReassignValidation[] = [
  {
    id: "FIA-2026-0234",
    referenceNumber: "FIA-2026-0234",
    type: "CTR",
    entityName: "Bank of Monrovia",
    currentAssignee: "Jane Doe",
    status: "Pending",
    age: "1d",
  },
  {
    id: "FIA-2026-0233",
    referenceNumber: "FIA-2026-0233",
    type: "CTR",
    entityName: "First Intl Bank",
    currentAssignee: "John Smith",
    status: "Pending",
    age: "2d",
  },
];

export default function AssignValidations() {
  const [selected, setSelected] = useState<string[]>([]);

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Validation Queue", link: "/compliance/validation" },
    { label: "Assign/Reassign" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-primary" />
            Assign/Reassign Validations
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Reassign Existing Validations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <Input placeholder="Search by Ref # / Entity / Assignee..." className="flex-1 min-w-[260px]" />
              <Select defaultValue="pending">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="sm">
                Clear
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selected.length === mockReassignValidations.length}
                      onCheckedChange={(checked) => {
                        if (checked) setSelected(mockReassignValidations.map(v => v.id));
                        else setSelected([]);
                      }}
                    />
                  </TableHead>
                  <TableHead>Ref #</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entity</TableHead>
                  <TableHead>Current Assignee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockReassignValidations.map((v) => (
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
                    <TableCell>{v.currentAssignee}</TableCell>
                    <TableCell>{v.status}</TableCell>
                    <TableCell>{v.age}</TableCell>
                    <TableCell>
                      <Input placeholder="Enter reason..." className="w-[220px]" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setSelected(mockReassignValidations.map(v => v.id))}>
                  Select All
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSelected([])}>
                  Deselect All
                </Button>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Reassign to" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jane">Jane Doe</SelectItem>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="mary">Mary Johnson</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="sm" disabled={selected.length === 0}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Reassign Selected
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}

