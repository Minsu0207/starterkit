import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

// 모바일 메뉴: 링크를 누르면 시트가 닫힌다
export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="메뉴 열기">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
          <SheetDescription>메뉴</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-3 px-4">
          {siteConfig.mainNav.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link href={item.href} className="text-sm font-medium">
                {item.title}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Button asChild className="mt-2">
              <Link href="/login">로그인</Link>
            </Button>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
