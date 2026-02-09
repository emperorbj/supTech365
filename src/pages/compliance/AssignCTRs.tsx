import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Users, RefreshCw, UserPlus, CheckCircle2, AlertTriangle, Search } from "lucide-react";
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

interface UnassignedCTR {
  id: string;
  referenceNumber: string;
  type: "CTR";
  entityName: string;
  amount: string;
  transactionCount: number;
  age: number;
  ageUnit: "d";
  priority: "high" | "medium" | "low";
}

interface ReassignCTR {
  id: string;
  referenceNumber: string;
  currentAssignee: string;
  status: string;
  age: number;
  ageUnit: "d";
}

const mockUnassignedCTRs: UnassignedCTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0231",
    type: "CTR",
    entityName: "UBA Liberia",
    amount: "$12,500",
    transactionCount: 5,
    age: 4,
    ageUnit: "d",
    priority: "medium",
  },
  {
    id: "2",
    referenceNumber: "FIA-0230",
    type: "CTR",
    entityName: "First Intl Bank",
    amount: "$8,900",
    transactionCount: 3,
    age: 3,
    ageUnit: "d",
    priority: "low",
  },
  {
    id: "3",
    referenceNumber: "FIA-0229",
    type: "CTR",
    entityName: "Ecobank Liberia",
    amount: "$15,200",
    transactionCount: 2,
    age: 2,
    ageUnit: "d",
    priority: "medium",
  },
];

const mockReassignCTRs: ReassignCTR[] = [
  {
    id: "1",
    referenceNumber: "FIA-0234",
    currentAssignee: "Jane Doe",
    status: "Review",
    age: 3,
    ageUnit: "d",
  },
  {
    id: "2",
    referenceNumber: "FIA-0232",
    currentAssignee: "Mary Johnson",
    status: "Review",
    age: 2,
    ageUnit: "d",
  },
];

export default function AssignCTRs() {
  const [selectedUnassigned, setSelectedUnassigned] = useState<string[]>([]);
  const [selectedReassign, setSelectedReassign] = useState<string[]>([]);

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Users className="h-5 w-5" /> },
    { label: "Workload Management", link: "/compliance/workload/dashboard" },
    { label: "Assign CTRs" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Assign/Reassign CTRs
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Unassigned CTRs */}
        <Card>
          <CardHeader>
            <CardTitle>UNASSIGNED CTRs (3 items)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Ref #</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entity</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Trans</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUnassignedCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell>
                      <Checkbox
                        checked={selectedUnassigned.includes(ctr.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedUnassigned([...selectedUnassigned, ctr.id]);
                          } else {
                            setSelectedUnassigned(selectedUnassigned.filter(id => id !== ctr.id));
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>
                      <ReportTypeBadge type={ctr.type} />
                    </TableCell>
                    <TableCell>{ctr.entityName}</TableCell>
                    <TableCell className="font-medium">{ctr.amount}</TableCell>
                    <TableCell>{ctr.transactionCount}</TableCell>
                    <TableCell>{ctr.age}{ctr.ageUnit}</TableCell>
                    <TableCell>
                      <span className="text-xs capitalize">{ctr.priority}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Select All</Button>
                <Button variant="outline" size="sm">Deselect All</Button>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Assign to" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jane">Jane Doe</SelectItem>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="mary">Mary Johnson</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="date" className="w-[150px]" defaultValue="2026-01-25" />
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Assign Selected
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reassign Existing CTRs */}
        <Card>
          <CardHeader>
            <CardTitle>REASSIGN EXISTING CTRs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Search by Ref # or Subject..." className="flex-1" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Ref #</TableHead>
                  <TableHead>Current Assignee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockReassignCTRs.map((ctr) => (
                  <TableRow key={ctr.id} className="data-table-row">
                    <TableCell>
                      <Checkbox
                        checked={selectedReassign.includes(ctr.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedReassign([...selectedReassign, ctr.id]);
                          } else {
                            setSelectedReassign(selectedReassign.filter(id => id !== ctr.id));
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell className="font-mono font-medium text-primary">
                      {ctr.referenceNumber}
                    </TableCell>
                    <TableCell>{ctr.currentAssignee}</TableCell>
                    <TableCell>{ctr.status}</TableCell>
                    <TableCell>{ctr.age}{ctr.ageUnit}</TableCell>
                    <TableCell>
                      <Input placeholder="Enter reason..." className="w-[200px]" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Select All</Button>
                <Button variant="outline" size="sm">Deselect All</Button>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Reassign to" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jane">Jane Doe</SelectItem>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="mary">Mary Johnson</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="sm">Reassign Selected</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Workload Summary */}
        <Card>
          <CardHeader>
            <CardTitle>TEAM WORKLOAD SUMMARY</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead>Officer</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Pending</TableHead>
                  <TableHead>Overdue</TableHead>
                  <TableHead>Capacity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Jane Doe</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-orange-600">
                      <AlertTriangle className="h-4 w-4" />
                      High (85%)
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">John Smith</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Normal (65%)
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mary Johnson</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-orange-600">
                      <AlertTriangle className="h-4 w-4" />
                      High (90%)
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="p-4">
              <Button variant="outline" size="sm" className="w-full">
                Auto-Assign (Lowest Workload)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}