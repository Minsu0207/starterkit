import { LayoutDashboard, Settings, type LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon?: LucideIcon;
};

// 사이트 전역 설정: 이름, 설명, 네비게이션 링크의 단일 출처
export const siteConfig = {
  name: "Next.js Starter Kit",
  description: "Next.js, TypeScript, Tailwind CSS v4, shadcn/ui로 바로 시작하는 웹 개발 스타터 킷",
  // 마케팅 레이아웃 상단 메뉴
  mainNav: [
    { title: "홈", href: "/" },
    { title: "대시보드", href: "/dashboard" },
    { title: "예제", href: "/examples" },
  ] satisfies NavItem[],
  // 예제 페이지 하위 탭
  examplesNav: [
    { title: "컴포넌트", href: "/examples/components" },
    { title: "폼", href: "/examples/forms" },
  ] satisfies NavItem[],
  // 대시보드 사이드바 메뉴
  dashboardNav: [
    { title: "대시보드", href: "/dashboard", icon: LayoutDashboard },
    { title: "설정", href: "/dashboard/settings", icon: Settings },
  ] satisfies NavItem[],
  // 외부 링크 (푸터 등)
  links: [
    { title: "Next.js 문서", href: "https://nextjs.org/docs" },
    { title: "shadcn/ui", href: "https://ui.shadcn.com" },
    { title: "Tailwind CSS", href: "https://tailwindcss.com/docs" },
  ] satisfies NavItem[],
};
