import { useMemo, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileCheck, RefreshCw, UserPlus, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ReportTypeBadge } from "@/components/ui/StatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface UnassignedValidation {
  id: string;
  referenceNumber: string;
  type: "CTR" | "STR";
  entityName: string;
  transactionCount: number;
  submittedDate: string;
  age: string;
  overdue?: boolean;
}

interface AssignedValidation {
  id: string;
  referenceNumber: string;
  type: "CTR" | "STR";
  entityName: string;
  currentAssignee: string;
  status: "Pending" | "In Progress";
  age: string;
}

const mockUnassigned: UnassignedValidation[] = [
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

const mockAssigned: AssignedValidation[] = [
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
  {
    id: "FIA-2026-0232",
    referenceNumber: "FIA-2026-0232",
    type: "CTR",
    entityName: "Ecobank Liberia",
    currentAssignee: "Mary J.",
    status: "Pending",
    age: "3d",
  },
];

type IntakeTab = "unassigned" | "assigned";

export default function ValidationIntakeAssignment() {
  const [tab, setTab] = useState<IntakeTab>("unassigned");
  const [query, setQuery] = useState("");
  const [selectedUnassigned, setSelectedUnassigned] = useState<string[]>([]);
  const [selectedAssigned, setSelectedAssigned] = useState<string[]>([]);

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Validation Queue", link: "/compliance/validation" },
    { label: "Intake & Assignment" },
  ];

  const filteredUnassigned = useMemo(() => {
    if (!query.trim()) return mockUnassigned;
    const q = query.toLowerCase();
    return mockUnassigned.filter(v =>
      v.referenceNumber.toLowerCase().includes(q) ||
      v.entityName.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredAssigned = useMemo(() => {
    if (!query.trim()) return mockAssigned;
    const q = query.toLowerCase();
    return mockAssigned.filter(v =>
      v.referenceNumber.toLowerCase().includes(q) ||
      v.entityName.toLowerCase().includes(q) ||
      v.currentAssignee.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-primary" />
            Validation Intake &amp; Assignment
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Tabs + shared filters/search */}
        <div className="flex flex-col gap-4">
          <Tabs value={tab} onValueChange={(v) => setTab(v as IntakeTab)}>
            <TabsList>
              <TabsTrigger value="unassigned">Unassigned ({mockUnassigned.length})</TabsTrigger>
              <TabsTrigger value="assigned">Assigned / Reassign ({mockAssigned.length})</TabsTrigger>
            </TabsList>

            <div className="mt-4 flex gap-2 flex-wrap items-center">
              <Select defaultValue={tab === "unassigned" ? "unassigned" : "assigned"} disabled>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                </SelectContent>
              </Select>
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
              <Button variant="ghost" size="sm" onClick={() => setQuery("")}>
                Clear
              </Button>
              <div className="flex-1" />
              <div className="min-w-[260px] w-full sm:w-[360px]">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by Ref # / Entity / Assignee..."
                />
              </div>
            </div>

            <TabsContent value="unassigned" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Unassigned Pool</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow className="data-table-header">
                        <TableHead className="w-12">
                          <Checkbox
                            checked={selectedUnassigned.length > 0 && selectedUnassigned.length === filteredUnassigned.length}
                            onCheckedChange={(checked) => {
                              if (checked) setSelectedUnassigned(filteredUnassigned.map(v => v.id));
                              else setSelectedUnassigned([]);
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
                      {filteredUnassigned.map((v) => (
                        <TableRow key={v.id} className="data-table-row">
                          <TableCell>
                            <Checkbox
                              checked={selectedUnassigned.includes(v.id)}
                              onCheckedChange={(checked) => {
                                if (checked) setSelectedUnassigned([...selectedUnassigned, v.id]);
                                else setSelectedUnassigned(selectedUnassigned.filter(id => id !== v.id));
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
                          <TableCell className={`inline-flex items-center gap-1 ${v.overdue ? "text-destructive font-medium" : ""}`}>
                            {v.age}{v.overdue ? <AlertTriangle className="h-4 w-4 shrink-0" /> : ""}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedUnassigned(filteredUnassigned.map(v => v.id))}
                      >
                        Select All
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setSelectedUnassigned([])}>
                        Clear
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
                      <Button size="sm" disabled={selectedUnassigned.length === 0}>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Assign Selected
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assigned" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Assigned / Reassign</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow className="data-table-header">
                        <TableHead className="w-12">
                          <Checkbox
                            checked={selectedAssigned.length > 0 && selectedAssigned.length === filteredAssigned.length}
                            onCheckedChange={(checked) => {
                              if (checked) setSelectedAssigned(filteredAssigned.map(v => v.id));
                              else setSelectedAssigned([]);
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
                      {filteredAssigned.map((v) => (
                        <TableRow key={v.id} className="data-table-row">
                          <TableCell>
                            <Checkbox
                              checked={selectedAssigned.includes(v.id)}
                              onCheckedChange={(checked) => {
                                if (checked) setSelectedAssigned([...selectedAssigned, v.id]);
                                else setSelectedAssigned(selectedAssigned.filter(id => id !== v.id));
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
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedAssigned(filteredAssigned.map(v => v.id))}
                      >
                        Select All
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setSelectedAssigned([])}>
                        Clear
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
                      <Button size="sm" disabled={selectedAssigned.length === 0}>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Reassign Selected
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
}

