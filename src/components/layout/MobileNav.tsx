import { useLocation, Link } from "react-router-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useSidebar } from "@/contexts/SidebarContext";
import { getNavigationByRole } from "./Sidebar";
import { UserRole } from "@/types/roles";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
  badgeVariant?: "info" | "warning" | "critical";
}

interface NavSection {
  label: string;
  items: NavItem[];
}

export function MobileNav() {
  const { isMobileNavOpen, setIsMobileNavOpen } = useSidebar();
  const location = useLocation();
  const { user } = useAuth();

  const navigation = user ? getNavigationByRole(user.role as UserRole) : [];

  if (!isMobileNavOpen) return null;

  return (
    <>
      {/* Overlay (f2.md Section 5.1) */}
      <div
        className="fixed inset-0 bg-black/50 z-[199] transition-opacity duration-250"
        onClick={() => setIsMobileNavOpen(false)}
      />

      {/* Slide-out Panel (f2.md Section 5.1) */}
      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 w-[280px] max-w-[80%] bg-white z-[200] shadow-lg transition-transform duration-250",
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-white">FIA</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">SupTech365</span>
            </div>
            <button
              onClick={() => setIsMobileNavOpen(false)}
              className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Navigation Sections */}
          <nav className="flex-1 overflow-y-auto py-4 px-4">
            {navigation.map((section, sectionIndex) => (
              <div key={section.label} className={cn(sectionIndex > 0 && "mt-6")}>
                <div className="px-2 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {section.label}
                </div>
                <div className="space-y-1 mt-2">
                  {section.items.map((item) => {
                    const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/");
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileNavOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-150 min-h-[44px]",
                          isActive
                            ? "bg-primary-light text-white font-medium"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        )}
                      >
                        <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                        <span className="flex-1 truncate">{item.title}</span>
                        {item.badge !== undefined && (
                          <span
                            className={cn(
                              "ml-auto min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-semibold flex items-center justify-center",
                              item.badgeVariant === "critical" && "bg-risk-critical text-white",
                              item.badgeVariant === "warning" && "bg-warning text-white",
                              (!item.badgeVariant || item.badgeVariant === "info") &&
                                "bg-primary-light text-white",
                              isActive && "bg-white/20 text-white"
                            )}
                          >
                            {item.badge > 99 ? "99+" : item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <Link
              to="/help"
              onClick={() => setIsMobileNavOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-150 min-h-[44px]"
            >
              <span>Help & Support</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
