import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Upload } from "lucide-react";

export default function SubmitReport() {
  const breadcrumbItems = [
    { label: "Reporting Entity Workspace", icon: <Upload className="h-5 w-5" /> },
    { label: "Submit Report" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div>
          <h1>Submit Report</h1>
          <p className="text-gray-600 mt-1">Upload STR or CTR reports for submission</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="mb-4">Upload Options</h3>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-light transition-colors cursor-pointer">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm font-medium text-gray-900 mb-1">Upload Excel File</p>
              <p className="text-xs text-gray-600">Click or drag file here to upload</p>
            </div>
            
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                Download STR Template
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                Download CTR Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
