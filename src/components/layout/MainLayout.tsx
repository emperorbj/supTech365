import { ReactNode } from "react";
import { TopNav } from "./TopNav";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { useSidebar } from "@/contexts/SidebarContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isCollapsed } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <MobileNav />
      <div className="flex w-full pt-16">
        <Sidebar />
        <main 
          className={cn(
            "flex-1 min-h-[calc(100vh-4rem)] transition-all duration-200",
            isMobile ? "ml-0" : isCollapsed ? "ml-16" : "ml-60"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
