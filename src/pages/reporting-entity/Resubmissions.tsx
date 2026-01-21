import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RotateCcw, Eye, AlertCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge, ReportTypeBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Resubmission {
  id: string;
  referenceNumber: string;
  reportType: "CTR" | "STR";
  transactionDate: string;
  amount: string;
  currency: string;
  returnedDate: string;
  returnReason: string;
  institution: string;
  daysPending: number;
}

const sampleResubmissions: Resubmission[] = [
  {
    id: "1",
    referenceNumber: "LRD-STR-2024-001890",
    reportType: "STR",
    transactionDate: "2024-01-25",
    amount: "95,000.00",
    currency: "USD",
    returnedDate: "2024-01-28",
    returnReason: "Incomplete transaction narrative. Please provide detailed description of suspicious activities observed.",
    institution: "Access Bank Liberia",
    daysPending: 5,
  },
  {
    id: "2",
    referenceNumber: "LRD-CTR-2024-001234",
    reportType: "CTR",
    transactionDate: "2024-01-20",
    amount: "60,000.00",
    currency: "USD",
    returnedDate: "2024-01-30",
    returnReason: "Missing beneficiary identification details. Required fields: full name, nationality, and identification document number.",
    institution: "Ecobank Liberia Limited",
    daysPending: 3,
  },
];

export default function Resubmissions() {
  const breadcrumbItems = [
    { label: "Reporting Entity Workspace", icon: <RotateCcw className="h-5 w-5" /> },
    { label: "Resubmissions" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div>
          <h1>Resubmissions</h1>
          <p className="text-gray-600 mt-1">Reports returned for correction requiring resubmission</p>
        </div>

        {sampleResubmissions.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-8 text-center text-gray-500">
              <RotateCcw className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>No resubmissions pending</p>
              <p className="text-sm mt-1">Reports requiring correction will appear here</p>
            </div>
          </div>
        ) : (
          <>
            <Alert className="bg-warning-50 border-warning-200">
              <AlertCircle className="h-4 w-4 text-warning-600" />
              <AlertDescription className="text-warning-800">
                You have {sampleResubmissions.length} report(s) requiring correction and resubmission.
                Please review the return reasons and submit corrected reports within 7 days.
              </AlertDescription>
            </Alert>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference Number</TableHead>
                    <TableHead>Report Type</TableHead>
                    <TableHead>Transaction Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Institution</TableHead>
                    <TableHead>Returned Date</TableHead>
                    <TableHead>Days Pending</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleResubmissions.map((resubmission) => (
                    <TableRow key={resubmission.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{resubmission.referenceNumber}</TableCell>
                      <TableCell>
                        <ReportTypeBadge type={resubmission.reportType} />
                      </TableCell>
                      <TableCell>{resubmission.transactionDate}</TableCell>
                      <TableCell>
                        {resubmission.amount} {resubmission.currency}
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">{resubmission.institution}</TableCell>
                      <TableCell>{resubmission.returnedDate}</TableCell>
                      <TableCell>
                        <span className={resubmission.daysPending >= 5 ? "text-warning-600 font-medium" : ""}>
                          {resubmission.daysPending} day(s)
                        </span>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status="returned" />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-primary hover:bg-primary-dark">
                            Correct & Resubmit
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Return Reasons Details */}
            <div className="space-y-4">
              {sampleResubmissions.map((resubmission) => (
                <div key={resubmission.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{resubmission.referenceNumber}</h3>
                      <p className="text-sm text-gray-600 mt-1">Returned: {resubmission.returnedDate}</p>
                    </div>
                    {resubmission.daysPending >= 5 && (
                      <span className="px-2 py-1 text-xs font-medium bg-warning-100 text-warning-800 rounded">
                        Urgent
                      </span>
                    )}
                  </div>
                  <div className="mt-3 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm font-medium text-gray-700 mb-1">Return Reason:</p>
                    <p className="text-sm text-gray-600">{resubmission.returnReason}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}
