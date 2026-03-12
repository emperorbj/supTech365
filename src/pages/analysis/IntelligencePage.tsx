import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Send, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function IntelligencePage() {
  const breadcrumbItems = [
    { label: "Analysis Workspace", icon: <Send className="h-5 w-5" /> },
    { label: "Intelligence" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Send className="h-6 w-6 text-primary" />
            Intelligence Reports
          </h1>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            <Send className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>No intelligence reports available.</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
