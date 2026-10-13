import { Blocks, Code2, Palette, Shapes, Wind } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// 스택 소개 카드 데이터
const stacks = [
  { name: "Next.js", description: "App Router 기반 React 프레임워크", icon: Blocks },
  { name: "TypeScript", description: "타입 안전한 개발 환경", icon: Code2 },
  { name: "Tailwind CSS v4", description: "config 파일 없는 CSS 우선 설정", icon: Wind },
  { name: "shadcn/ui", description: "복사해서 쓰는 접근성 높은 컴포넌트", icon: Palette },
  { name: "lucide-react", description: "일관된 오픈소스 아이콘 세트", icon: Shapes },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">웹 개발, 바로 시작하세요</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui가 설정된 스타터 킷입니다.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
              Next.js 문서
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer">
              shadcn/ui 문서
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stacks.map(({ name, description, icon: Icon }) => (
          <Card key={name}>
            <CardHeader>
              <Icon className="mb-2 size-6 text-muted-foreground" />
              <CardTitle>{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
