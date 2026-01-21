import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BarChart3 } from "lucide-react";
import { KPICard } from "@/components/ui/KPICard";
import { FileText, CheckCircle, XCircle, Clock } from "lucide-react";

export default function Statistics() {
  const breadcrumbItems = [
    { label: "Reporting Entity Workspace", icon: <BarChart3 className="h-5 w-5" /> },
    { label: "Statistics" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div>
          <h1>Submission Statistics</h1>
          <p className="text-gray-600 mt-1">Overview of your submission performance</p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Total Submissions"
            value="156"
            subtitle="Current month"
            icon={<FileText className="h-6 w-6" />}
          />
          <KPICard
            title="Acceptance Rate"
            value="94%"
            trend={{ value: 2, direction: "up" }}
            subtitle="vs last month"
            icon={<CheckCircle className="h-6 w-6" />}
          />
          <KPICard
            title="Rejected"
            value="9"
            trend={{ value: -3, direction: "down" }}
            subtitle="vs last month"
            icon={<XCircle className="h-6 w-6" />}
          />
          <KPICard
            title="Avg Validation Time"
            value="2.4d"
            trend={{ value: -0.5, direction: "down" }}
            subtitle="improving"
            icon={<Clock className="h-6 w-6" />}
          />
        </div>

        {/* Charts placeholder */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="mb-4">Submission Trends</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart visualization will be added here
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
