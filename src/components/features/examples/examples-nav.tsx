"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// 예제 페이지 하위 탭. 현재 경로와 일치하는 탭을 강조한다.
export function ExamplesNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 border-b">
      {siteConfig.examplesNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
          className={cn(
            "-mb-px border-b-2 border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
            pathname === item.href && "border-foreground font-medium text-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
