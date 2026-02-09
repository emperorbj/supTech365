import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { registrationApi } from "@/lib/api";
import type { Entity } from "@/lib/api";
import { FileText, RefreshCw, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function EntitiesPage() {
  const navigate = useNavigate();
  const [entities, setEntities] = useState<Entity[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isLookingUp, setIsLookingUp] = useState(false);

  const load = async () => {
    setIsLoading(true);
    try {
      const res = await registrationApi.getEntities({ limit: 500, offset: 0 });
      setEntities(res.data || []);
      setTotal(res.total ?? 0);
    } catch {
      setEntities([]);
      setTotal(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleSearchSubmit = async () => {
    const q = search.trim();
    if (!q) return;
    setIsLookingUp(true);
    try {
      const entity = await registrationApi.getEntityByRegistrationNumber(q);
      navigate(`/entities/${entity.id}`);
    } catch {
      toast.error("No entity found with that registration number.");
    } finally {
      setIsLookingUp(false);
    }
  };

  const filtered = search.trim()
    ? entities.filter(
        (e) =>
          e.name.toLowerCase().includes(search.toLowerCase()) ||
          e.registration_number.toLowerCase().includes(search.toLowerCase()) ||
          e.contact_email.toLowerCase().includes(search.toLowerCase())
      )
    : entities;

  const breadcrumbItems = [
    { label: "Administration", href: "/" },
    { label: "Entities" },
  ];

  return (
    <MainLayout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Entities
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={load} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button asChild variant="default" size="sm">
              <Link to="/admin/entities/register">Register Entity</Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <form
                className="relative flex-1 min-w-[200px] max-w-md"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearchSubmit();
                }}
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                <Input
                  placeholder="Search by name, registration number, or email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </form>
              <p className="text-sm text-muted-foreground">
                {total} entit{total === 1 ? "y" : "ies"} total
              </p>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Table filters as you type. For an exact match, enter a full registration number and press Enter to open that entity.
            </p>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>name</TableHead>
                    <TableHead>entity_type</TableHead>
                    <TableHead>registration_number</TableHead>
                    <TableHead>contact_email</TableHead>
                    <TableHead>is_active</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : filtered.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No entities found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filtered.map((e) => (
                      <TableRow
                        key={e.id}
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => navigate(`/entities/${e.id}`)}
                      >
                        <TableCell className="font-medium">{e.name}</TableCell>
                        <TableCell>{e.entity_type}</TableCell>
                        <TableCell>{e.registration_number}</TableCell>
                        <TableCell>{e.contact_email}</TableCell>
                        <TableCell>
                          <span
                            className={
                              e.is_active
                                ? "text-workflow-validated font-medium"
                                : "text-muted-foreground"
                            }
                          >
                            {e.is_active ? "true" : "false"}
                          </span>
                        </TableCell>
                        <TableCell onClick={(ev) => ev.stopPropagation()}>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/entities/${e.id}`}>View</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Showing {filtered.length} of {total}. Click a row or View to open details.
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
