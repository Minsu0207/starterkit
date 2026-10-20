import Link from "next/link";

import { Logo } from "@/components/common/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

// 마케팅 레이아웃 상단 헤더
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-4">
        <div className="flex items-center gap-8">
          <Logo />
          <MainNav />
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="ml-2 hidden md:inline-flex">
            <Link href="/login">로그인</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
