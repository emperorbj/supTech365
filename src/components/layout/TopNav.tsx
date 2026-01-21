import { Search, Bell, ChevronDown, Settings, Lock, HelpCircle, MessageSquare, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { ROLE_LABELS } from "@/types/roles";
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
  const { user } = useAuth();
  const { isMobileNavOpen, setIsMobileNavOpen } = useSidebar();
  const isMobile = useIsMobile();
  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-6 gap-4">
        {/* Hamburger Menu (Mobile) - f2.md Section 5.1 */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </Button>
        )}

        {/* Logo Section (f2.md Section 3.2) */}
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-white">FIA</span>
          </div>
          <span className="text-lg font-semibold text-gray-900 hidden sm:inline">FIA SupTech365</span>
          <span className="text-lg font-semibold text-gray-900 sm:hidden">FIA</span>
        </a>

        {/* Search Section (f2.md Section 3.2) - Hidden on mobile */}
        <div className="hidden flex-1 max-w-[600px] mx-4 lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600" />
            <Input
              placeholder="Search reports, subjects, cases..."
              className="w-full h-10 pl-10 pr-20 bg-gray-50 border-gray-200 rounded-lg focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-gray-600 sm:flex">
              <span className="text-xs">Ctrl</span>K
            </kbd>
          </div>
        </div>

        {/* Right Section (f2.md Section 3.2) */}
        <div className="flex items-center gap-4">
          {/* Notifications (f2.md Section 3.2) */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative h-10 w-10 rounded-lg hover:bg-gray-100"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[11px] font-bold bg-error text-white rounded-full flex items-center justify-center border-2 border-white">
              5
            </span>
          </Button>

          {/* User Menu (f2.md Section 3.2) - Avatar only on mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 h-10 hover:bg-gray-100">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-white text-sm font-medium">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium text-gray-900">{user?.name}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-600 hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <div className="px-3 py-2">
                <p className="font-medium text-sm">{user?.name}</p>
                <p className="text-xs text-gray-600">
                  {user?.role ? ROLE_LABELS[user.role] : ""}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                My Profile
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
              <DropdownMenuItem className="text-destructive">
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
