import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authApi } from "@/lib/api";
import type { UserProfile } from "@/lib/api";
import { ROLE_LABELS } from "@/types/roles";
import { mapBackendRole } from "@/types/roles";
import type { UserRole } from "@/types/roles";
import { User, Mail, Shield, Building2, Calendar, LogIn } from "lucide-react";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    authApi
      .getProfile()
      .then((data) => {
        if (!cancelled) setProfile(data);
      })
      .catch(() => {
        if (!cancelled) setError("Failed to load profile.");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const breadcrumbItems = [
    { label: "Profile" },
  ];

  const roleLabel = profile?.role
    ? ROLE_LABELS[mapBackendRole(profile.role) as UserRole] ?? profile.role
    : "—";

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 max-w-2xl">
        <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

        {error && (
          <Card className="border-destructive">
            <CardContent className="pt-6">
              <p className="text-destructive text-sm">{error}</p>
            </CardContent>
          </Card>
        )}

        {isLoading && (
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        )}

        {!isLoading && profile && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Account details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <User className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Username</p>
                    <p className="font-medium">{profile.username}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="font-medium">{profile.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</p>
                    <p className="font-medium">{roleLabel}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Account status</p>
                    <p className="font-medium">{profile.account_status}</p>
                  </div>
                </div>
                {(profile.entity_id != null || profile.entity_name != null) && (
                  <div className="flex items-start gap-3 sm:col-span-2">
                    <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Entity</p>
                      <p className="font-medium">{profile.entity_name ?? profile.entity_id ?? "—"}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <LogIn className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Last login</p>
                    <p className="font-medium">
                      {profile.last_login
                        ? format(new Date(profile.last_login), "PPp")
                        : "—"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Account created</p>
                    <p className="font-medium">
                      {profile.created_at
                        ? format(new Date(profile.created_at), "PP")
                        : "—"}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground pt-2 border-t">
                ID: {profile.id}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  );
}
