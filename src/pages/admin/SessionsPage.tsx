import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authApi } from "@/lib/api";
import type { SessionInfo } from "@/lib/api";
import { Shield, RefreshCw, LogOut } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

function formatUA(ua: string): string {
  if (!ua) return "—";
  const m = ua.match(/\((.*?)\)/);
  if (m) return m[1];
  return ua.length > 40 ? ua.slice(0, 40) + "…" : ua;
}

export default function SessionsPage() {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<SessionInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminating, setIsTerminating] = useState(false);

  const load = async () => {
    setIsLoading(true);
    try {
      const data = await authApi.getSessions();
      setSessions(Array.isArray(data) ? data : []);
    } catch {
      setSessions([]);
      toast.error("Failed to load sessions");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleTerminateAllOther = async () => {
    if (!confirm("This will sign you out on all other devices. Continue?")) return;
    setIsTerminating(true);
    try {
      await authApi.terminateAllSessions();
      toast.success("All other sessions have been terminated. Signing you out.");
      navigate("/login", { replace: true });
    } catch {
      toast.error("Failed to terminate sessions");
    } finally {
      setIsTerminating(false);
    }
  };

  const breadcrumbItems = [
    { label: "Administration", href: "/" },
    { label: "Active Sessions" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Active Sessions
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={load} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            {sessions.length > 1 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleTerminateAllOther}
                disabled={isTerminating}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {isTerminating ? "Terminating…" : "Terminate all other sessions"}
              </Button>
            )}
          </div>
        </div>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Sessions where you are currently signed in. Terminating all other sessions will sign you out everywhere except this device.
            </p>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Created</TableHead>
                    <TableHead>Last activity</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead>IP address</TableHead>
                    <TableHead>Device / browser</TableHead>
                    <TableHead>Remember me</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Loading…
                      </TableCell>
                    </TableRow>
                  ) : sessions.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No sessions found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    sessions.map((s) => (
                      <TableRow key={s.id}>
                        <TableCell className="text-muted-foreground text-sm">
                          {format(new Date(s.created_at), "PPp")}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {format(new Date(s.last_activity), "PPp")}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {format(new Date(s.expires_at), "PPp")}
                        </TableCell>
                        <TableCell className="font-mono text-sm">{s.ip_address}</TableCell>
                        <TableCell className="text-sm max-w-[200px] truncate" title={s.user_agent}>
                          {formatUA(s.user_agent)}
                        </TableCell>
                        <TableCell>
                          {s.is_remember_me ? (
                            <span className="text-workflow-validated text-sm">Yes</span>
                          ) : (
                            <span className="text-muted-foreground text-sm">No</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            {!isLoading && sessions.length > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                {sessions.length} session{sessions.length === 1 ? "" : "s"}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
