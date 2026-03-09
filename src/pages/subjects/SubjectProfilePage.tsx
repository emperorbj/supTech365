import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSubjectProfile, useSubjectReports, useSubjectStatistics } from "@/hooks/useSubjectProfile";
import { ArrowLeft, Users } from "lucide-react";

function SubjectProfilePage() {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();
  const { data: profile, isLoading: profileLoading, error: profileError } = useSubjectProfile(uuid);
  const { data: stats, isLoading: statsLoading } = useSubjectStatistics(uuid);
  const { data: reports, isLoading: reportsLoading } = useSubjectReports(uuid, {
    report_type: "ALL",
    page: 1,
    page_size: 20,
  });

  const breadcrumbItems = [
    { label: "Analysis", href: "/" },
    { label: "Subject Profiles", href: "/subjects" },
    { label: profile?.primary_name ?? "Profile", href: "#" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="space-y-6 p-6">
        <Button variant="ghost" onClick={() => navigate("/subjects")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Search
        </Button>

        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Users className="h-6 w-6 text-primary" />
          Subject Profile
        </h1>

        {profileError ? (
          <Card>
            <CardContent className="py-8 text-center text-destructive">
              Failed to load subject profile.
            </CardContent>
          </Card>
        ) : null}

        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Profile Details</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {profileLoading ? (
              <p className="text-muted-foreground">Loading profile...</p>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <p className="text-xl font-semibold">{profile?.primary_name ?? "N/A"}</p>
                  {profile?.subject_type ? <Badge variant="secondary">{profile.subject_type}</Badge> : null}
                </div>
                <p className="text-sm text-muted-foreground">
                  Subject ID: <span className="font-mono">{uuid ?? "-"}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Created: {profile?.created_at ? new Date(profile.created_at).toLocaleString() : "N/A"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Updated: {profile?.updated_at ? new Date(profile.updated_at).toLocaleString() : "N/A"}
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Identifiers</h2>
          </CardHeader>
          <CardContent>
            {(profile?.identifiers?.length ?? 0) === 0 ? (
              <p className="text-sm text-muted-foreground">No identifiers.</p>
            ) : (
              <div className="space-y-2">
                {profile?.identifiers.map((identifier, idx) => (
                  <div key={`${identifier.type}-${identifier.value}-${idx}`} className="rounded border p-3">
                    <p className="text-xs text-muted-foreground">{identifier.type}</p>
                    <p className="font-mono text-sm">{identifier.value}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Attributes</h2>
          </CardHeader>
          <CardContent>
            {(profile?.attributes?.length ?? 0) === 0 ? (
              <p className="text-sm text-muted-foreground">No attributes.</p>
            ) : (
              <div className="space-y-2">
                {profile?.attributes.map((attribute, idx) => (
                  <div key={`${attribute.type}-${attribute.value}-${idx}`} className="rounded border p-3">
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">{attribute.type}</p>
                      {attribute.is_primary ? <Badge>Primary</Badge> : null}
                    </div>
                    <p className="text-sm">{attribute.value}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Statistics</h2>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <p className="text-sm text-muted-foreground">Loading statistics...</p>
            ) : (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded border p-3">
                  <p className="text-xs text-muted-foreground">Total Reports</p>
                  <p className="text-lg font-semibold">{stats?.statistics.total_reports ?? 0}</p>
                </div>
                <div className="rounded border p-3">
                  <p className="text-xs text-muted-foreground">STR Count</p>
                  <p className="text-lg font-semibold">{stats?.statistics.str_count ?? 0}</p>
                </div>
                <div className="rounded border p-3">
                  <p className="text-xs text-muted-foreground">CTR Count</p>
                  <p className="text-lg font-semibold">{stats?.statistics.ctr_count ?? 0}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">Linked Reports</h2>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-b p-4 text-sm text-muted-foreground">
              {reportsLoading
                ? "Loading reports..."
                : `Accessible: ${reports?.access_summary.accessible_reports ?? 0} | Restricted: ${reports?.access_summary.restricted_reports ?? 0}`}
            </div>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40">
                  <TableHead>Reference</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Access</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportsLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : (reports?.reports?.length ?? 0) === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                      No reports linked to this subject.
                    </TableCell>
                  </TableRow>
                ) : (
                  reports?.reports.map((report) => (
                    <TableRow key={`${report.reference_number}-${report.report_id}`}>
                      <TableCell className="font-medium">{report.reference_number}</TableCell>
                      <TableCell>{report.report_type}</TableCell>
                      <TableCell>{report.entity_name}</TableCell>
                      <TableCell>{report.status ?? "N/A"}</TableCell>
                      <TableCell>
                        <Badge variant={report.access_level === "restricted" ? "destructive" : "secondary"}>
                          {report.access_level}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}

export default SubjectProfilePage;
