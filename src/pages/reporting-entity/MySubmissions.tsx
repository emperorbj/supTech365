import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileText, Eye, Download } from "lucide-react";
import { Link } from "react-router-dom";
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

interface Submission {
  id: string;
  referenceNumber: string;
  reportType: "CTR" | "STR";
  transactionDate: string;
  amount: string;
  currency: string;
  status: "submitted" | "validated" | "under_review" | "rejected" | "returned";
  submittedDate: string;
  institution: string;
}

const sampleSubmissions: Submission[] = [
  {
    id: "1",
    referenceNumber: "LRD-STR-2024-001234",
    reportType: "STR",
    transactionDate: "2024-01-15",
    amount: "125,000.00",
    currency: "USD",
    status: "validated",
    submittedDate: "2024-01-16",
    institution: "Liberian Bank for Development & Investment (LBDI)",
  },
  {
    id: "2",
    referenceNumber: "LRD-CTR-2024-002456",
    reportType: "CTR",
    transactionDate: "2024-01-18",
    amount: "50,000.00",
    currency: "USD",
    status: "under_review",
    submittedDate: "2024-01-19",
    institution: "Ecobank Liberia Limited",
  },
  {
    id: "3",
    referenceNumber: "LRD-STR-2024-001567",
    reportType: "STR",
    transactionDate: "2024-01-20",
    amount: "75,500.00",
    currency: "LRD",
    status: "submitted",
    submittedDate: "2024-01-21",
    institution: "United Bank for Africa (UBA) Liberia",
  },
  {
    id: "4",
    referenceNumber: "LRD-CTR-2024-002789",
    reportType: "CTR",
    transactionDate: "2024-01-22",
    amount: "200,000.00",
    currency: "USD",
    status: "validated",
    submittedDate: "2024-01-23",
    institution: "Guaranty Trust Bank Liberia",
  },
  {
    id: "5",
    referenceNumber: "LRD-STR-2024-001890",
    reportType: "STR",
    transactionDate: "2024-01-25",
    amount: "95,000.00",
    currency: "USD",
    status: "returned",
    submittedDate: "2024-01-26",
    institution: "Access Bank Liberia",
  },
  {
    id: "6",
    referenceNumber: "LRD-CTR-2024-003012",
    reportType: "CTR",
    transactionDate: "2024-01-28",
    amount: "150,000.00",
    currency: "USD",
    status: "under_review",
    submittedDate: "2024-01-29",
    institution: "First International Bank (FIB) Liberia",
  },
  {
    id: "7",
    referenceNumber: "LRD-STR-2024-002134",
    reportType: "STR",
    transactionDate: "2024-02-01",
    amount: "180,000.00",
    currency: "LRD",
    status: "submitted",
    submittedDate: "2024-02-02",
    institution: "International Bank Liberia Limited",
  },
  {
    id: "8",
    referenceNumber: "LRD-CTR-2024-003456",
    reportType: "CTR",
    transactionDate: "2024-02-05",
    amount: "300,000.00",
    currency: "USD",
    status: "validated",
    submittedDate: "2024-02-06",
    institution: "Liberian Bank for Development & Investment (LBDI)",
  },
  {
    id: "9",
    referenceNumber: "LRD-STR-2024-002567",
    reportType: "STR",
    transactionDate: "2024-02-08",
    amount: "65,000.00",
    currency: "USD",
    status: "rejected",
    submittedDate: "2024-02-09",
    institution: "Ecobank Liberia Limited",
  },
  {
    id: "10",
    referenceNumber: "LRD-CTR-2024-003789",
    reportType: "CTR",
    transactionDate: "2024-02-12",
    amount: "175,000.00",
    currency: "USD",
    status: "validated",
    submittedDate: "2024-02-13",
    institution: "United Bank for Africa (UBA) Liberia",
  },
  {
    id: "11",
    referenceNumber: "LRD-STR-2024-002890",
    reportType: "STR",
    transactionDate: "2024-02-15",
    amount: "110,000.00",
    currency: "LRD",
    status: "under_review",
    submittedDate: "2024-02-16",
    institution: "Guaranty Trust Bank Liberia",
  },
  {
    id: "12",
    referenceNumber: "LRD-CTR-2024-004012",
    reportType: "CTR",
    transactionDate: "2024-02-18",
    amount: "225,000.00",
    currency: "USD",
    status: "submitted",
    submittedDate: "2024-02-19",
    institution: "Access Bank Liberia",
  },
];

export default function MySubmissions() {
  const breadcrumbItems = [
    { label: "Reporting Entity Workspace", icon: <FileText className="h-5 w-5" /> },
    { label: "My Submissions" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1>My Submissions</h1>
            <p className="text-gray-600 mt-1">View all your submitted reports</p>
          </div>
          <Link to="/submit">
            <Button className="bg-primary hover:bg-primary-dark">
              Submit New Report
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex gap-4 flex-wrap">
            <select className="px-3 py-2 border border-gray-200 rounded-md text-sm">
              <option>All Status</option>
              <option>Submitted</option>
              <option>Validated</option>
              <option>Rejected</option>
              <option>Returned for Correction</option>
              <option>Under Review</option>
            </select>
            <select className="px-3 py-2 border border-gray-200 rounded-md text-sm">
              <option>All Report Types</option>
              <option>STR</option>
              <option>CTR</option>
            </select>
            <input
              type="text"
              placeholder="Search by reference number..."
              className="px-3 py-2 border border-gray-200 rounded-md text-sm flex-1 min-w-[200px]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reference Number</TableHead>
                <TableHead>Report Type</TableHead>
                <TableHead>Transaction Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.referenceNumber}</TableCell>
                  <TableCell>
                    <ReportTypeBadge type={submission.reportType} />
                  </TableCell>
                  <TableCell>{submission.transactionDate}</TableCell>
                  <TableCell>
                    {submission.amount} {submission.currency}
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">{submission.institution}</TableCell>
                  <TableCell>
                    <StatusBadge status={submission.status} />
                  </TableCell>
                  <TableCell>{submission.submittedDate}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}
