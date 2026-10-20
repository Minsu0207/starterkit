import { Rocket } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// 사이트 로고: 아이콘 + 사이트명, 홈 링크
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-semibold", className)}>
      <Rocket className="size-5" />
      <span>{siteConfig.name}</span>
    </Link>
  );
}
