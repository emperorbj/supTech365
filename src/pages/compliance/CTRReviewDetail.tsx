import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileText, Download, Printer, Eye, AlertTriangle, X, Circle, Lightbulb, User, Building2, Check, ChevronRight } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function CTRReviewDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);
  const [disposition, setDisposition] = useState("");
  const [justification, setJustification] = useState("");
  const [findings, setFindings] = useState("");

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileText className="h-5 w-5" /> },
    { label: "CTR Review Queue", link: "/compliance/ctr-review" },
    { label: `FIA-${id}`, link: `/compliance/ctr-review/${id}/review` },
    { label: "Review" },
  ];

  const transactions = [
    { id: 1, date: "01-19 14:30", amount: "$12,500", type: "Cash Deposit", originator: "John Mensah", beneficiary: "", account: "1234", alert: null },
    { id: 2, date: "01-19 15:45", amount: "$15,000", type: "Wire Transfer", originator: "Sarah Konneh", beneficiary: "Diamond T.", account: "9876", alert: "high" },
    { id: 3, date: "01-18 10:20", amount: "$10,000", type: "Cash Deposit", originator: "Diamond T.", beneficiary: "", account: "4561", alert: "medium" },
    { id: 4, date: "01-17 16:15", amount: "$13,000", type: "Cash Deposit", originator: "Sarah Konneh", beneficiary: "", account: "9876", alert: "high" },
    { id: 5, date: "01-15 09:30", amount: "$12,000", type: "Wire Transfer", originator: "John Mensah", beneficiary: "ABC Corp", account: "1234", alert: null },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">CTR FIA-{id}</h1>
              <Badge variant="outline" className="gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Compliance Review
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Audit Trail
            </Button>
          </div>
        </div>

        {/* Report Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Report Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Entity:</span>
                <p className="font-medium">Bank of Monrovia (Paynesville Branch)</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Submitted:</span>
                <p className="font-medium">Jan 20, 2026 08:15</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Validated:</span>
                <p className="font-medium">Jan 20, 2026 09:30</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Assigned to Me:</span>
                <p className="font-medium">Jan 20, 2026 10:00 (Age: 1 day)</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Transaction Count:</span>
                <p className="font-medium">847 transactions</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Total Amount:</span>
                <p className="font-medium">$4,125,300 USD</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Date Range:</span>
                <p className="font-medium">Jan 15-19, 2026 (5-day reporting period)</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Unique Subjects:</span>
                <p className="font-medium">23 (18 individuals, 5 business entities)</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Unique Accounts:</span>
                <p className="font-medium">31 accounts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Compliance Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Active Compliance Alerts (3)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-destructive p-4 bg-destructive/5 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span className="font-semibold">HIGH RISK: Structuring Pattern Detected</span>
              </div>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Rule:</span> "Multiple Transactions Below Threshold"</p>
                <p><span className="font-medium">Triggered on:</span> Transactions #127, #245, #389, #512 (Sarah Konneh)</p>
                <p><span className="font-medium">Details:</span> Subject conducted 4 transactions totaling $58,500 within 48 hours, all just below $15,000 threshold. Combined with subject history (4 prior CTRs in 60 days), indicates potential structuring.</p>
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">View Alert Details →</Button>
                <Button variant="outline" size="sm">View Rule Logic →</Button>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 p-4 bg-yellow-50 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold">MEDIUM: High Transaction Frequency</span>
              </div>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Rule:</span> "Subject in 3+ CTRs within 90 days"</p>
                <p><span className="font-medium">Triggered on:</span> Subject Profile (Sarah Konneh)</p>
                <p><span className="font-medium">Details:</span> Sarah Konneh appears in current report + 4 prior CTRs (total 5 CTRs in 68 days). Pattern requires compliance review.</p>
              </div>
              <Button variant="outline" size="sm" className="mt-2">View Subject History →</Button>
            </div>

            <div className="border-l-4 border-yellow-500 p-4 bg-yellow-50 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold">MEDIUM: High-Value Business Cash Activity</span>
              </div>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Rule:</span> "Business Cash Deposit &gt;$10,000"</p>
                <p><span className="font-medium">Triggered on:</span> Transactions #89, #156, #278 (Diamond Trading Ltd)</p>
                <p><span className="font-medium">Details:</span> Multiple cash deposits totaling $35,000 for precious metals trading business. Industry category flagged for enhanced due diligence.</p>
              </div>
              <Button variant="outline" size="sm" className="mt-2">View Transaction Details →</Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Transaction Table (847 transactions)</CardTitle>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="wire">Wire Transfer</SelectItem>
                    <SelectItem value="cash">Cash Deposit</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="low">Under $15k</SelectItem>
                    <SelectItem value="high">Over $15k</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="sarah">Sarah Konneh</SelectItem>
                    <SelectItem value="john">John Mensah</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search transactions..." className="w-[200px]" />
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <Select defaultValue="date">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                  <SelectItem value="type">Type</SelectItem>
                  <SelectItem value="originator">Originator</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="sm">Clear Filters</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Originator</TableHead>
                  <TableHead>Beneficiary</TableHead>
                  <TableHead>Acct</TableHead>
                  <TableHead className="w-12">Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow
                    key={tx.id}
                    className="data-table-row cursor-pointer"
                    onClick={() => setSelectedTransaction(tx.id)}
                  >
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{tx.date}</TableCell>
                    <TableCell className="font-medium">{tx.amount}</TableCell>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell>{tx.originator}</TableCell>
                    <TableCell>{tx.beneficiary || "-"}</TableCell>
                    <TableCell className="font-mono text-sm">{tx.account}</TableCell>
                    <TableCell>
                      {tx.alert === "high" && (
                        <Badge variant="destructive" className="h-5 px-1 gap-0.5">
                          <Circle className="h-2.5 w-2.5 fill-current" />
                          High
                        </Badge>
                      )}
                      {tx.alert === "medium" && (
                        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30 h-5 px-1 gap-0.5">
                          <Circle className="h-2.5 w-2.5 fill-current" />
                          Med
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <div className="p-4 border-t flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Showing 1-50 of 847 transactions
              </p>
              <Select defaultValue="50">
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Select All</Button>
              <Button variant="outline" size="sm">Deselect All</Button>
            </div>
          </div>
          <div className="p-4 border-t">
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
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">...</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">17</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <div className="p-4 bg-muted/50 text-sm text-muted-foreground flex items-center gap-2">
            <Lightbulb className="h-4 w-4 shrink-0" />
            Click any row to view full transaction details in side panel
          </div>
        </Card>

        {/* Subject Profiles */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Profiles & Historical Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">👤 Sarah Konneh (ID: LIB-123456789)</span>
                </div>
                <Button variant="ghost" size="sm">Expand ▼</Button>
              </div>
              <div className="text-sm space-y-1 pl-6">
                <p>Appears in: 4 transactions (Trans #2, #4, #127, #245)</p>
                <p>Total in this report: $58,500</p>
                <p>Historical Activity: 4 prior CTRs (60 days), 1 STR (12 months ago)</p>
                <p className="flex items-center gap-1 flex-wrap">Risk Indicators: <Circle className="h-2.5 w-2.5 fill-destructive shrink-0" /> High-frequency pattern, <Circle className="h-2.5 w-2.5 fill-destructive shrink-0" /> Structuring suspicion</p>
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium flex items-center gap-2"><User className="h-4 w-4 shrink-0" /> John Mensah (ID: LIB-987654321)</span>
                </div>
                <Button variant="ghost" size="sm">Expand ▼</Button>
              </div>
              <div className="text-sm space-y-1 pl-6">
                <p>Appears in: 2 transactions (Trans #1, #5)</p>
                <p>Total in this report: $24,500</p>
                <p>Historical Activity: 2 prior CTRs (180 days), 0 STRs</p>
                <p>Risk Indicators: None</p>
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium flex items-center gap-2"><Building2 className="h-4 w-4 shrink-0" /> Diamond Trading Ltd (REG: LIB-BUS-555444)</span>
                </div>
                <Button variant="ghost" size="sm">Expand ▼</Button>
              </div>
              <div className="text-sm space-y-1 pl-6">
                <p>Appears in: Trans #2 (beneficiary), #3 (depositor) + 2 more</p>
                <p>Total: $35,000</p>
                <p>Historical Activity: 1 prior CTR (90 days), 0 STRs</p>
                <p>Business Type: Precious Metals Trading (High-Risk Industry)</p>
                <p className="flex items-center gap-1">Risk Indicators: <Circle className="h-2.5 w-2.5 fill-warning shrink-0" /> High-value cash activity</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Review Findings */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Review Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Document your compliance review findings, red flags, and reasoning..."
              value={findings}
              onChange={(e) => setFindings(e.target.value)}
              className="min-h-[150px]"
            />
          </CardContent>
        </Card>

        {/* Disposition Decision */}
        <Card>
          <CardHeader>
            <CardTitle>Disposition Decision</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Decision applies to entire CTR report (all 847 transactions)
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={disposition} onValueChange={setDisposition}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="archive" id="archive" />
                <Label htmlFor="archive" className="cursor-pointer">
                  Archive - No suspicious activity, close report
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monitor" id="monitor" />
                <Label htmlFor="monitor" className="cursor-pointer">
                  Monitor - Place on watchlist, no immediate action
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="flag" id="flag" />
                <Label htmlFor="flag" className="cursor-pointer">
                  Flag for Escalation - Recommend conversion to Escalated CTR (Analysis)
                </Label>
              </div>
            </RadioGroup>

            {disposition === "flag" && (
              <div>
                <Label htmlFor="justification">
                  Escalation Justification (required if flagging)
                </Label>
                <Textarea
                  id="justification"
                  placeholder="Enter justification..."
                  value={justification}
                  onChange={(e) => setJustification(e.target.value)}
                  className="mt-2"
                />
              </div>
            )}

            {disposition === "monitor" && (
              <div>
                <Label htmlFor="monitoring-plan">
                  Monitoring Plan (required if selecting Monitor)
                </Label>
                <Textarea
                  id="monitoring-plan"
                  placeholder="Enter monitoring plan..."
                  className="mt-2"
                />
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Link to="/compliance/ctr-review">
                <Button variant="outline">Cancel</Button>
              </Link>
              <Button variant="outline">Save Draft</Button>
              <Button
                disabled={!disposition || (disposition === "flag" && !justification)}
              >
                Submit Decision
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tip */}
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm text-foreground flex items-start gap-2">
          <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
          <span><strong>TIP:</strong> Escalation sends this CTR to Head of Compliance approval queue. If approved, report becomes "Escalated CTR" and routes to Analysis team.</span>
        </div>
      </div>

      {/* Transaction Detail Side Panel */}
      <Sheet open={selectedTransaction !== null} onOpenChange={() => setSelectedTransaction(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Transaction #2 Details - Sarah Konneh</SheetTitle>
            <SheetDescription>
              Detailed transaction information
            </SheetDescription>
          </SheetHeader>
          {selectedTransaction && (
            <div className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><span className="font-medium">Transaction Date:</span> January 19, 2026, 15:45</div>
                  <div><span className="font-medium">Transaction Reference:</span> TXN-20260119-002</div>
                  <div><span className="font-medium">Amount:</span> $15,000.00 USD</div>
                  <div><span className="font-medium">Transaction Type:</span> Wire Transfer (Domestic)</div>
                  <div><span className="font-medium">Branch:</span> Paynesville Branch, Bank of Monrovia</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Originator (FROM)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><span className="font-medium">Account Number:</span> 9876543210</div>
                  <div><span className="font-medium">Account Holder:</span> Sarah Konneh (Individual)</div>
                  <div><span className="font-medium">ID Number:</span> LIB-123456789</div>
                  <div><span className="font-medium">Date of Birth:</span> March 22, 1985 (Age: 40)</div>
                  <div><span className="font-medium">Address:</span> 78 Randall Street, Sinkor, Monrovia, Montserrado</div>
                  <div><span className="font-medium">Account Type:</span> Personal Savings</div>
                  <div><span className="font-medium">Account Opened:</span> June 15, 2022</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Beneficiary (TO)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><span className="font-medium">Account Number:</span> 1112223333</div>
                  <div><span className="font-medium">Account Holder:</span> Diamond Trading Ltd (Business Entity)</div>
                  <div><span className="font-medium">Registration:</span> LIB-BUS-555444</div>
                  <div><span className="font-medium">Business Type:</span> Precious Metals Trading</div>
                  <div><span className="font-medium">Address:</span> 45 Commerce Street, Central Monrovia, Montserrado</div>
                  <div><span className="font-medium">Account Type:</span> Business Checking</div>
                  <div><span className="font-medium">Account Opened:</span> March 3, 2023</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Transaction Narrative</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">"Payment for diamond purchase - Invoice #DT-2026-0119"</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Purpose stated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Invoice reference provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-600">⚠</span>
                      <span>Supporting documentation not attached to report</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Alerts & Red Flags
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="border-l-4 border-destructive p-3 bg-destructive/5">
                    <div className="font-semibold text-destructive mb-2">HIGH RISK: Structuring Pattern Detected</div>
                    <p>This transaction is part of a 4-transaction pattern totaling $58,500 conducted by Sarah Konneh within 48 hours. All amounts positioned just below $15,000 individual transaction threshold.</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Complete Alert Details <ChevronRight className="h-4 w-4 ml-1 inline" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </MainLayout>
  );
}