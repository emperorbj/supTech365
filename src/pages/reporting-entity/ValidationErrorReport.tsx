import { useParams, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, ArrowLeft, Download, Upload } from "lucide-react";

const mockErrors = [
  { id: 1, field: "Transaction Date", error: "Missing mandatory field", row: "Row 3" },
  { id: 2, field: "Amount", error: "Invalid numeric format", row: "Row 5" },
  { id: 3, field: "Date of Birth", error: "Invalid date format", row: "Row 7" },
];

export default function ValidationErrorReport() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "Reporting", href: "/submissions" },
    { label: "Submission", href: `/submissions/${id}` },
    { label: "Validation Error Report", href: "#" },
  ];

  const referenceNumber = `REF-2026-${String(id).padStart(5, "0")}`;
  const reportType = "STR";
  const submittedAt = "2026-02-05 15:45:00";

  const handleDownload = () => {
    // In real app: generate CSV/PDF of errors
    window.open("#", "_blank");
  };

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <Breadcrumb items={breadcrumbItems} />
        <Button variant="ghost" onClick={() => navigate("/submissions")} className="mb-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Submissions
        </Button>

        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Validation Error Report</h1>
            <div className="text-sm text-muted-foreground space-y-1 mt-2">
              <p><strong>Reference:</strong> {referenceNumber}</p>
              <p><strong>Report Type:</strong> {reportType}</p>
              <p><strong>Submitted:</strong> {submittedAt}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">Validation failed</p>
                <p className="text-sm text-red-700 mt-1">
                  {mockErrors.length} error(s) found. Please fix and resubmit.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Errors ({mockErrors.length})</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Field</TableHead>
                    <TableHead>Error</TableHead>
                    <TableHead>Row</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockErrors.map((e, i) => (
                    <TableRow key={e.id}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{e.field}</TableCell>
                      <TableCell>{e.error}</TableCell>
                      <TableCell>{e.row}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download Error Report
              </Button>
              <Button onClick={() => navigate("/submit")}>
                <Upload className="h-4 w-4 mr-2" />
                Resubmit Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
