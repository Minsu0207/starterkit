// 사이트 전역 설정: 이름, 설명, 네비게이션 링크
export const siteConfig = {
  name: "Next.js Starter Kit",
  description: "Next.js, TypeScript, Tailwind CSS v4, shadcn/ui로 바로 시작하는 웹 개발 스타터 킷",
  navItems: [
    { title: "홈", href: "/" },
    { title: "문서", href: "https://nextjs.org/docs" },
  ],
} as const;
