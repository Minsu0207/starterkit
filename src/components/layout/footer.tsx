import { siteConfig } from "@/config/site";

// 마케팅 레이아웃 하단 푸터
// 연도 표시에 new Date()를 쓰면 cacheComponents 프리렌더가 동적으로 바뀌므로 쓰지 않는다.
export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {siteConfig.name}. Built with Next.js, Tailwind CSS, shadcn/ui.</p>
        <nav className="flex flex-wrap gap-4">
          {siteConfig.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
