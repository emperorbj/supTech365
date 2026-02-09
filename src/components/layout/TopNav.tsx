import { useNavigate, Link } from "react-router-dom";
import { Search, ChevronDown, Settings, Lock, HelpCircle, MessageSquare, LogOut, Menu, X } from "lucide-react";
import { NotificationBell } from "@/components/assignment/NotificationBell";
import { useAuth } from "@/contexts/AuthContext";
import { ROLE_LABELS } from "@/types/roles";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/SidebarContext";
import { useIsMobile } from "@/hooks/use-mobile";

export function TopNav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { isMobileNavOpen, setIsMobileNavOpen } = useSidebar();
  const isMobile = useIsMobile();

  const handleLogout = async () => {
    await logout();
    toast.success("You have been signed out.");
    navigate("/login", { replace: true });
  };
  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/80 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 gap-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-xl hover:bg-muted"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </Button>
        )}

        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary shadow-sm">
            <span className="text-base sm:text-lg font-bold text-primary-foreground">FIA</span>
          </div>
          <span className="text-base sm:text-lg font-semibold text-foreground hidden sm:inline tracking-tight">SupTech365</span>
          <span className="text-base font-semibold text-foreground sm:hidden">FIA</span>
        </a>

        <div className="hidden flex-1 max-w-[520px] mx-4 lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search reports, subjects, cases..."
              className="w-full h-9 pl-9 pr-20 bg-muted/60 border-border rounded-xl text-sm placeholder:text-muted-foreground focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden h-5 select-none items-center gap-0.5 rounded-md border border-border bg-muted/80 px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <NotificationBell />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 h-9 sm:h-10 rounded-xl hover:bg-muted">
                <Avatar className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium text-foreground">{user?.name}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-xl border-border/80 shadow-soft-lg">
              <div className="px-3 py-2">
                <p className="font-medium text-sm text-foreground">{user?.name}</p>
                <p className="text-xs text-muted-foreground">
                  {user?.role ? ROLE_LABELS[user.role] : ""}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">
                  <Settings className="mr-2 h-4 w-4" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Lock className="mr-2 h-4 w-4" />
                Change Password
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                Help Documentation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Submit Feedback
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
