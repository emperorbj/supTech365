import { useParams, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle2, FileText, Upload, AlertCircle } from "lucide-react";

export default function ValidationResult() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "Reporting", href: "/submissions" },
    { label: "Submission", href: `/submissions/${id}` },
    { label: "Validation Result", href: `#` },
  ];

  // In real app: fetch validation result by submission id (pass/fail)
  const passed = true;
  const referenceNumber = `REF-2026-${String(id).padStart(5, "0")}`;
  const reportType = "CTR";
  const submittedAt = "2026-02-05 14:30:00";

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <Breadcrumb items={breadcrumbItems} />
        <Card className="max-w-2xl">
          <CardHeader>
            <h1 className="text-2xl font-bold">Validation Result</h1>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-sm text-muted-foreground space-y-1">
              <p><strong>Reference:</strong> {referenceNumber}</p>
              <p><strong>Report Type:</strong> {reportType}</p>
              <p><strong>Submitted:</strong> {submittedAt}</p>
            </div>

            {passed ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-800">Validation passed</p>
                  <p className="text-sm text-green-700 mt-1">
                    Your report has been submitted successfully and is now in the review queue.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Validation failed</p>
                  <p className="text-sm text-red-700 mt-1">
                    Your report could not be accepted. Please view the errors and resubmit.
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => navigate(`/submissions/${id}`)}>
                <FileText className="h-4 w-4 mr-2" />
                View Submission Details
              </Button>
              <Button variant="outline" onClick={() => navigate("/submit")}>
                <Upload className="h-4 w-4 mr-2" />
                Submit Another
              </Button>
              {!passed && (
                <Button variant="outline" onClick={() => navigate(`/submissions/${id}/errors`)}>
                  <AlertCircle className="h-4 w-4 mr-2" />
                  View Errors
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
