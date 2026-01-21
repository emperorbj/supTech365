import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileText } from "lucide-react";

export default function CTRReview() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileText className="h-5 w-5" /> },
    { label: "CTR Review" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div>
          <h1>CTR Review Queue</h1>
          <p className="text-gray-600 mt-1">Currency Transaction Reports requiring review</p>
        </div>
        {/* Content will be added here */}
      </div>
    </MainLayout>
  );
}
