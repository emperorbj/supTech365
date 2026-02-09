import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  link?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center h-12 px-4 sm:px-6 bg-muted/40 border-b border-border">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground/60 shrink-0" />
              )}
              {(item.href || item.link) && !isLast ? (
                <Link
                  to={item.href || item.link || "#"}
                  className="flex items-center gap-2 text-primary hover:text-primary/90 hover:underline underline-offset-2"
                >
                  {item.icon && <span className="h-5 w-5">{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span
                  className={cn(
                    "flex items-center gap-2",
                    isLast ? "font-medium text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.icon && <span className="h-5 w-5">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
