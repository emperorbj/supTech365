import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Flag, AlertTriangle, Eye, Circle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function EscalationApprovalDetail() {
  const { id } = useParams<{ id: string }>();
  const [decision, setDecision] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");
  const [rejectionReason, setRejectionReason] = useState("");

  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <Flag className="h-5 w-5" /> },
    { label: "Escalation Queue", link: "/compliance/escalation/pending" },
    { label: `FIA-${id}`, link: `/compliance/escalation/${id}/escalate` },
    { label: "Review Escalation" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Escalation Review: CTR FIA-{id}</h1>
          </div>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Original CTR Report
          </Button>
        </div>

        {/* Compliance Officer Escalation Recommendation */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Officer Escalation Recommendation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Flagged By:</span>
                <p className="font-medium">Jane Doe (Compliance Officer)</p>
              </div>
              <div>
                <span className="text-muted-foreground">Flagged Date:</span>
                <p className="font-medium">January 20, 2026, 16:30</p>
              </div>
              <div>
                <span className="text-muted-foreground">Risk Assessment:</span>
                <p className="font-medium">
                  <Badge variant="destructive" className="gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    HIGH RISK
                  </Badge>
                </p>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium block mb-2">Justification Provided:</span>
              <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                <p>
                  "Sarah Konneh demonstrates clear structuring pattern. Report contains 4 transactions (Trans #2, #4, #127, #245) totaling $58,500 conducted within 48 hours, all positioned just below individual transaction reporting thresholds.
                </p>
                <p>
                  Subject has extensive CTR history: 4 prior CTRs in past 60 days, totaling $66,800 across 7 transactions. All transactions range between $10,500-$15,000, suggesting deliberate threshold avoidance.
                </p>
                <p>
                  Additionally, Sarah Konneh was subject of STR in Feb 2025 (FIA-2025-0123) for suspicious wire transfer pattern, though no case was opened at that time due to insufficient evidence. Current pattern combined with historical activity warrants full analytical investigation.
                </p>
                <p>
                  Total value across current + 4 prior CTRs: $125,300 in 68 days.
                </p>
                <p>
                  Recommend immediate escalation to Analysis for comprehensive subject investigation and potential case development."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTR Report Summary */}
        <Card>
          <CardHeader>
            <CardTitle>CTR Report Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Report:</span>
                <p className="font-medium">FIA-{id} (CTR)</p>
              </div>
              <div>
                <span className="text-muted-foreground">Entity:</span>
                <p className="font-medium">Bank of Monrovia (Paynesville Branch)</p>
              </div>
              <div>
                <span className="text-muted-foreground">Submitted:</span>
                <p className="font-medium">Jan 20, 2026 08:15</p>
              </div>
              <div>
                <span className="text-muted-foreground">Validated:</span>
                <p className="font-medium">Jan 20, 2026 09:30</p>
              </div>
              <div>
                <span className="text-muted-foreground">Reviewed By:</span>
                <p className="font-medium">Jane Doe</p>
              </div>
              <div>
                <span className="text-muted-foreground">Review Date:</span>
                <p className="font-medium">Jan 20, 2026 16:00</p>
              </div>
              <div>
                <span className="text-muted-foreground">Transaction Count:</span>
                <p className="font-medium">847 transactions</p>
              </div>
              <div>
                <span className="text-muted-foreground">Total Amount:</span>
                <p className="font-medium">$4,125,300 USD</p>
              </div>
              <div>
                <span className="text-muted-foreground">Date Range:</span>
                <p className="font-medium">Jan 15-19, 2026 (5-day period)</p>
              </div>
              <div>
                <span className="text-muted-foreground">Unique Subjects:</span>
                <p className="font-medium">23 (18 individuals, 5 business)</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <span className="text-sm font-medium block mb-2">Active Alerts:</span>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2"><Circle className="h-2.5 w-2.5 fill-destructive shrink-0" /> Structuring Pattern (Trans #2, #4, #127, #245 - Sarah Konneh)</li>
                <li className="flex items-center gap-2"><Circle className="h-2.5 w-2.5 fill-warning shrink-0" /> High Transaction Frequency (Sarah Konneh - 5 CTRs in 68 days)</li>
                <li className="flex items-center gap-2"><Circle className="h-2.5 w-2.5 fill-warning shrink-0" /> High-Value Business Cash (Trans #89, #156, #278 - Diamond Trading)</li>
              </ul>
            </div>
            <Button variant="outline" size="sm">View Complete CTR Report →</Button>
          </CardContent>
        </Card>

        {/* Escalation Decision */}
        <Card>
          <CardHeader>
            <CardTitle>Escalation Decision</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={decision} onValueChange={setDecision}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="approve" id="approve" />
                <Label htmlFor="approve" className="cursor-pointer">
                  Approve Escalation (Convert to Escalated CTR → Analysis Workflow)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reject" id="reject" />
                <Label htmlFor="reject" className="cursor-pointer">
                  Reject Escalation (Return to CTR disposition)
                </Label>
              </div>
            </RadioGroup>

            <div>
              <Label htmlFor="context">
                Head of Compliance Additional Context (optional)
              </Label>
              <Textarea
                id="context"
                placeholder="Enter additional context..."
                value={additionalContext}
                onChange={(e) => setAdditionalContext(e.target.value)}
                className="mt-2"
              />
            </div>

            {decision === "reject" && (
              <div>
                <Label htmlFor="rejection-reason">
                  Rejection Reason (required if rejecting)
                </Label>
                <Textarea
                  id="rejection-reason"
                  placeholder="Enter rejection reason..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Link to="/compliance/escalation/pending">
                <Button variant="outline">Cancel</Button>
              </Link>
              <Button
                disabled={!decision || (decision === "reject" && !rejectionReason)}
                onClick={() => {
                  // Handle submit
                }}
              >
                Submit Decision
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Note */}
        <div className="p-4 bg-warning/10 border border-warning/30 rounded-lg text-sm text-foreground flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-warning" />
          <span><strong>Note:</strong> Approved escalations are immediately routed to Head of Analysis for analyst assignment. Original CTR data and escalation context will be visible to assigned analyst.</span>
        </div>
      </div>
    </MainLayout>
  );
}