import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NotificationsPanel } from "@/components/assignment/NotificationsPanel";
import { Bell } from "lucide-react";

export default function NotificationsPage() {
  const breadcrumbItems = [
    { label: "Notifications", icon: <Bell className="h-5 w-5" /> },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Bell className="h-6 w-6 text-primary" />
          Notifications
        </h1>
        <Card className="max-w-2xl">
          <CardContent className="p-0">
            <NotificationsPanel isDropdown={false} />
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
