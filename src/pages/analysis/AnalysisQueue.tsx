import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Inbox } from "lucide-react";

export default function AnalysisQueue() {
  const breadcrumbItems = [
    { label: "Analysis Workspace", icon: <Inbox className="h-5 w-5" /> },
    { label: "Analysis Queue" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div>
          <h1>Analysis Queue</h1>
          <p className="text-gray-600 mt-1">Reports assigned for analysis</p>
        </div>
        {/* Content will be added here */}
      </div>
    </MainLayout>
  );
}
