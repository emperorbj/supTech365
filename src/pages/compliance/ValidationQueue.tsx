import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FileCheck } from "lucide-react";

export default function ValidationQueue() {
  const breadcrumbItems = [
    { label: "Compliance Workspace", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Validation Queue" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div>
          <h1>Validation Queue</h1>
          <p className="text-gray-600 mt-1">Pending manual validations</p>
        </div>
        {/* Content will be added here */}
      </div>
    </MainLayout>
  );
}
