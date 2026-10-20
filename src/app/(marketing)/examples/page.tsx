import { ArrowRight, Component, FormInput } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "예제" };

const examples = [
  {
    title: "컴포넌트",
    description: "버튼, 다이얼로그, 테이블, 토스트 등 shadcn/ui 컴포넌트 모음",
    href: "/examples/components",
    icon: Component,
  },
  {
    title: "폼",
    description: "react-hook-form + zod 검증을 적용한 폼 예시",
    href: "/examples/forms",
    icon: FormInput,
  },
];

export default function ExamplesPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {examples.map(({ title, description, href, icon: Icon }) => (
        <Link key={href} href={href} className="group">
          <Card className="h-full transition-colors group-hover:bg-muted/50">
            <CardHeader>
              <Icon className="mb-2 size-6 text-muted-foreground" />
              <CardTitle className="flex items-center gap-1">
                {title}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
