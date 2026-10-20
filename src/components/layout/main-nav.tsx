"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// 루트(/)는 정확히 일치할 때만, 나머지는 하위 경로까지 활성으로 본다
function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

// 데스크톱 상단 메뉴. 현재 경로와 일치하는 항목을 강조한다.
// 동적 param 라우트를 추가하면 usePathname 때문에 Suspense로 감싸야 할 수 있다 (cacheComponents).
export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 text-sm md:flex">
      {siteConfig.mainNav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground",
              active && "font-medium text-foreground",
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
