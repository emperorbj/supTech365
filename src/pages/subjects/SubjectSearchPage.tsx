import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSubjectSearch } from "@/hooks/useSubjectSearch";
import type { SubjectType } from "@/types/subject";
import { Users, Search } from "lucide-react";

function SubjectSearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [subjectType, setSubjectType] = useState<SubjectType | "ALL">("ALL");

  const { data, isLoading, error } = useSubjectSearch({
    q: submittedQuery,
    subject_type: subjectType === "ALL" ? undefined : subjectType,
    page: 1,
    page_size: 20,
  });

  const breadcrumbItems = [
    { label: "Analysis", icon: <Users className="h-5 w-5" /> },
    { label: "Subject Profiles" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      setSubmittedQuery(query.trim());
    }
  };

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          Subject Profiles
        </h1>
        <p className="text-muted-foreground">
          Search and browse subject profiles by name, identifier, or account number. (Feature in progress.)
        </p>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex flex-wrap gap-2 max-w-3xl">
              <div className="relative flex-1 min-w-[260px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search subjects by name, ID, or account..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-9"
                  minLength={2}
                />
              </div>
              <Select value={subjectType} onValueChange={(v) => setSubjectType(v as SubjectType | "ALL")}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Subject type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Types</SelectItem>
                  <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                  <SelectItem value="ORGANIZATION">Organization</SelectItem>
                  <SelectItem value="UNKNOWN">Unknown</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" disabled={query.trim().length < 2}>
                Search
              </Button>
            </form>
            {query.trim().length > 0 && query.trim().length < 2 && (
              <p className="text-sm text-muted-foreground mt-2">Enter at least 2 characters to search.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            {!submittedQuery ? (
              <div className="py-12 text-center text-muted-foreground">
                <Users className="mx-auto mb-4 h-12 w-12 opacity-50" />
                <p>Enter a query and run search.</p>
              </div>
            ) : error ? (
              <div className="py-12 text-center text-destructive">
                Failed to load subject search results.
              </div>
            ) : (
              <>
                <div className="border-b p-4 text-sm text-muted-foreground">
                  {isLoading ? "Searching..." : `Found ${data?.total ?? 0} result(s)`}
                </div>
                <div className="rounded-md border-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/40">
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Reports</TableHead>
                        <TableHead>Last Activity</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {isLoading ? (
                        <TableRow>
                          <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                            Loading...
                          </TableCell>
                        </TableRow>
                      ) : (data?.results?.length ?? 0) === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                            No matches found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        data?.results.map((item) => (
                          <TableRow key={item.uuid}>
                            <TableCell className="font-medium">{item.primary_name}</TableCell>
                            <TableCell>{item.subject_type}</TableCell>
                            <TableCell>{item.report_count}</TableCell>
                            <TableCell>{item.last_activity_date ?? "N/A"}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => navigate(`/subjects/${item.uuid}`)}
                              >
                                View Profile
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}

export default SubjectSearchPage;
