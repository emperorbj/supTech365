import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMyWorkload } from "@/hooks/useMyWorkload";
import { BarChart3, ChevronRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

interface MyWorkloadCardProps {
  compact?: boolean;
  className?: string;
}

export function MyWorkloadCard({ compact = false, className }: MyWorkloadCardProps) {
  const { data, isLoading } = useMyWorkload();
  const { user } = useAuth();
  const isAnalyst = user?.role === "analyst" || user?.role === "head_of_analysis";

  if (isLoading || !data) {
    return (
      <Card className={cn(className)}>
        <CardContent className="p-4">
          <div className="animate-pulse h-20 rounded bg-muted" />
        </CardContent>
      </Card>
    );
  }

  const { total, by_type } = data;

  if (compact) {
    return (
      <Link to="/my-assignments">
        <Card className={cn("hover:bg-muted/50 transition-colors", className)}>
          <CardContent className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{total} active</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Card className={cn(className)}>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <span className="font-medium">My Workload</span>
        </div>
        <div className="text-center py-2">
          <p className="text-3xl font-bold">{total}</p>
          <p className="text-sm text-muted-foreground">Active Assignments</p>
        </div>
        <div className="border-t pt-3 space-y-1 text-sm text-muted-foreground">
          {isAnalyst ? (
            <>
              <p>STRs: {by_type.strs ?? 0}</p>
              <p>Escalated CTRs: {by_type.escalated_ctrs ?? 0}</p>
              <p>Active Cases: {by_type.cases ?? 0}</p>
            </>
          ) : (
            <>
              <p>CTRs: {by_type.ctrs ?? 0}</p>
              <p>STRs: {by_type.strs ?? 0}</p>
              <p>Cases: {by_type.cases ?? 0}</p>
            </>
          )}
        </div>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link to="/my-assignments">
            View All Assignments
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
