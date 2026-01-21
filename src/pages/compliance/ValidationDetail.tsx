import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileCheck, CheckCircle2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ReportTypeBadge } from "@/components/ui/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function ValidationDetail() {
  const params = useParams();
  const reportId = (params.reportId ?? params.id ?? "UNKNOWN") as string;
  const [decision, setDecision] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedTxIds, setSelectedTxIds] = useState<number[]>([]);
  const [isTxSheetOpen, setIsTxSheetOpen] = useState(false);
  const [focusedTxId, setFocusedTxId] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Validation Queue", link: "/compliance/validation" },
    { label: reportId, link: `/compliance/validation/${reportId}/validate` },
    { label: "Validate" },
  ];

  const transactions = [
    {
      id: 1,
      date: "2026-01-19",
      amount: "$15,000",
      type: "Wire Transfer",
      originator: "Sarah K.",
      account: "9876543",
      narrative: "Payment for diamond purchase - Invoice #DT-2026-0119",
    },
    {
      id: 2,
      date: "2026-01-19",
      amount: "$12,500",
      type: "Cash Deposit",
      originator: "John M.",
      account: "1234567",
      narrative: "Cash deposit - business proceeds",
    },
    {
      id: 3,
      date: "2026-01-18",
      amount: "$10,000",
      type: "Cash Deposit",
      originator: "Diamond Ltd",
      account: "4561237",
      narrative: "Cash deposit - trade settlement",
    },
    {
      id: 4,
      date: "2026-01-17",
      amount: "$13,000",
      type: "Cash Deposit",
      originator: "Sarah K.",
      account: "9876543",
      narrative: "Cash deposit - personal savings",
    },
    {
      id: 5,
      date: "2026-01-15",
      amount: "$12,000",
      type: "Wire Transfer",
      originator: "John M.",
      account: "1234567",
      narrative: "Wire transfer - invoice payment",
    },
  ];

  const focusedTx = useMemo(() => {
    if (focusedTxId == null) return null;
    return transactions.find(t => t.id === focusedTxId) ?? null;
  }, [focusedTxId]);

  const openTxSheetFor = (txId: number) => {
    setFocusedTxId(txId);
    setIsTxSheetOpen(true);
  };

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">
                Report {reportId} (CTR)
              </h1>
              <Badge variant="outline" className="gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                Pending
              </Badge>
            </div>
          </div>
        </div>

        {/* Report Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Report Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Reporting Entity:</span>
                <p className="font-medium">Bank of Monrovia</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Submitted:</span>
                <p className="font-medium">2026-01-20 08:15</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Automated Validation:</span>
                <p className="font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  PASSED
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Transaction Count:</span>
                <p className="font-medium">5</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Total Amount:</span>
                <p className="font-medium">$62,500 USD</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Date Range:</span>
                <p className="font-medium">Jan 15-19, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Transaction Table</CardTitle>
              <div className="flex gap-2">
                <Select defaultValue="date">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="amount">Amount</SelectItem>
                    <SelectItem value="type">Type</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="wire">Wire Transfer</SelectItem>
                    <SelectItem value="cash">Cash Deposit</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Search..." className="w-[200px]" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Selected: <span className="font-medium text-foreground">{selectedTxIds.length}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTxIds(transactions.map(t => t.id))}
                >
                  Select All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTxIds([])}
                >
                  Clear
                </Button>
                <Button
                  size="sm"
                  disabled={selectedTxIds.length === 0}
                  onClick={() => openTxSheetFor(selectedTxIds[0])}
                >
                  View Transaction Details
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="data-table-header">
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Originator</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id} className="data-table-row">
                    <TableCell>
                      <Checkbox
                        checked={selectedTxIds.includes(tx.id)}
                        onCheckedChange={(checked) => {
                          if (checked) setSelectedTxIds([...selectedTxIds, tx.id]);
                          else setSelectedTxIds(selectedTxIds.filter(id => id !== tx.id));
                        }}
                      />
                    </TableCell>
                    <TableCell>{tx.date}</TableCell>
                    <TableCell className="font-medium">{tx.amount}</TableCell>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell>{tx.originator}</TableCell>
                    <TableCell className="font-mono text-sm">{tx.account}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => openTxSheetFor(tx.id)}
                        aria-label="View transaction details"
                      >
                        🔍
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Validation Checklist */}
        <Card>
          <CardHeader>
            <CardTitle>Validation Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>All mandatory fields present</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Transaction details clear and complete</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Subject identification valid</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Narrative sufficient for review</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Supporting documentation attached (if applicable)</span>
            </div>
          </CardContent>
        </Card>

        {/* Validation Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Validation Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Add notes for downstream reviewers..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        {/* Decision Required */}
        <Card>
          <CardHeader>
            <CardTitle>Decision Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={decision} onValueChange={setDecision}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="accept" id="accept" />
                <Label htmlFor="accept" className="cursor-pointer">
                  Accept
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="return" id="return" />
                <Label htmlFor="return" className="cursor-pointer">
                  Return for Correction
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reject" id="reject" />
                <Label htmlFor="reject" className="cursor-pointer">
                  Reject
                </Label>
              </div>
            </RadioGroup>

            {(decision === "return" || decision === "reject") && (
              <div>
                <Label htmlFor="reason">
                  Reason (required for Return/Reject)
                </Label>
                <Textarea
                  id="reason"
                  placeholder="Enter reason..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="mt-2"
                />
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Link to="/compliance/validation">
                <Button variant="outline">Cancel</Button>
              </Link>
              <Button
                onClick={() => {
                  // Handle submit
                }}
                disabled={!decision || ((decision === "return" || decision === "reject") && !reason)}
              >
                Submit Decision
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CW-2A: Transaction Details (Sheet) */}
      <Sheet open={isTxSheetOpen} onOpenChange={setIsTxSheetOpen}>
        <SheetContent side="right" className="w-[520px] sm:max-w-[520px]">
          <SheetHeader>
            <SheetTitle>Transaction Details (Validation)</SheetTitle>
            <SheetDescription>
              Report {reportId} • Selected {selectedTxIds.length || 1} transaction{(selectedTxIds.length || 1) === 1 ? "" : "s"}
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            <div className="rounded-md border p-3">
              <div className="text-sm font-medium mb-2">Selected Transactions</div>
              <div className="space-y-2">
                {(selectedTxIds.length ? selectedTxIds : focusedTxId ? [focusedTxId] : [])
                  .map((id) => transactions.find(t => t.id === id))
                  .filter(Boolean)
                  .map((t) => (
                    <button
                      key={t!.id}
                      className={`w-full text-left text-sm rounded-md px-3 py-2 border transition ${
                        focusedTxId === t!.id ? "bg-muted border-muted-foreground/30" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setFocusedTxId(t!.id)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono">TXN-{t!.id}</span>
                        <span className="text-muted-foreground">{t!.date}</span>
                      </div>
                      <div className="text-muted-foreground mt-1">
                        {t!.amount} • {t!.type} • {t!.originator}
                      </div>
                    </button>
                  ))}
              </div>
            </div>

            <div className="rounded-md border p-3">
              <div className="text-sm font-medium mb-3">Focused Transaction</div>
              {!focusedTx ? (
                <div className="text-sm text-muted-foreground">Select a transaction to view details.</div>
              ) : (
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-muted-foreground">Reference</div>
                      <div className="font-mono">TXN-{focusedTx.id}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Amount</div>
                      <div className="font-medium">{focusedTx.amount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Type</div>
                      <div>{focusedTx.type}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Account</div>
                      <div className="font-mono">{focusedTx.account}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Originator</div>
                    <div>{focusedTx.originator}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Narrative</div>
                    <div className="leading-relaxed">{focusedTx.narrative}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsTxSheetOpen(false)}>
                Back to Validation
              </Button>
              <Button variant="outline">Mark Issue</Button>
              <Button>Add Note</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </MainLayout>
  );
}